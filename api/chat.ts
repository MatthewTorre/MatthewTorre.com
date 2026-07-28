import type { VercelRequest, VercelResponse } from '@vercel/node';
import { systemPrompt } from './_prompt.ts';

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

/** Overridable without a redeploy of the code path. */
const MODEL = process.env.GROQ_MODEL ?? 'llama-3.3-70b-versatile';

/**
 * Only the last N turns are forwarded. Without this the whole transcript is
 * resent every turn, so a long conversation grows its own cost quadratically.
 * The system prompt already holds every fact, so older turns carry little.
 */
const HISTORY_TURNS = 8;

const MAX_MESSAGE_CHARS = 2_000;
const MAX_TOTAL_CHARS = 16_000;
const MAX_OUTPUT_TOKENS = 400;

/**
 * Per-instance rate limiting. Serverless means this is per warm container, not
 * global, so it throttles a single abusive caller rather than guaranteeing a
 * ceiling. A hard global limit needs shared state (Vercel KV or similar).
 */
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 12;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Keep the map from growing without bound on a long-lived container.
  if (hits.size > 5_000) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < RATE_WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > RATE_MAX;
}

interface Turn {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * Accepts only user/assistant turns with non-empty string content. Without
 * this a caller could inject their own `system` turn and override the brief.
 */
function parseTurns(input: unknown): Turn[] | null {
  if (!Array.isArray(input) || input.length === 0) return null;

  const turns: Turn[] = [];
  let total = 0;

  for (const raw of input) {
    if (!raw || typeof raw !== 'object') return null;
    const { role, content } = raw as Record<string, unknown>;
    if (role !== 'user' && role !== 'assistant') return null;
    if (typeof content !== 'string') return null;

    const trimmed = content.trim();
    if (!trimmed) continue;
    if (trimmed.length > MAX_MESSAGE_CHARS) return null;

    total += trimmed.length;
    if (total > MAX_TOTAL_CHARS) return null;

    turns.push({ role, content: trimmed });
  }

  return turns.length ? turns : null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error('GROQ_API_KEY is not set');
    return res.status(500).json({ error: 'Chat is not configured.' });
  }

  const ip =
    (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0].trim() ?? 'unknown';
  if (rateLimited(ip)) {
    res.setHeader('Retry-After', '60');
    return res.status(429).json({ error: 'Too many messages. Give it a minute.' });
  }

  const turns = parseTurns((req.body as { messages?: unknown } | undefined)?.messages);
  if (!turns) {
    return res.status(400).json({ error: 'Invalid request body.' });
  }

  const upstream = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: systemPrompt() },
        ...turns.slice(-HISTORY_TURNS),
      ],
      max_tokens: MAX_OUTPUT_TOKENS,
      // Low: this assistant recites facts about one person. Variety is not a
      // virtue here, and higher values invite invented specifics.
      temperature: 0.2,
      top_p: 0.9,
      stream: true,
    }),
  });

  if (!upstream.ok || !upstream.body) {
    // Log the upstream detail; return none of it. Provider error bodies can
    // echo the request and are not the caller's business.
    console.error('Groq error', upstream.status, await upstream.text().catch(() => ''));
    return res.status(502).json({ error: 'The model is unavailable right now.' });
  }

  // Stream token-by-token so the first words appear immediately rather than
  // after the full completion.
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Accel-Buffering', 'no');

  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      // Server-sent events: complete records are separated by a blank line.
      const records = buffer.split('\n\n');
      buffer = records.pop() ?? '';

      for (const record of records) {
        const line = record.split('\n').find((l) => l.startsWith('data: '));
        if (!line) continue;

        const payload = line.slice(6).trim();
        if (payload === '[DONE]') {
          return res.end();
        }

        try {
          const token = JSON.parse(payload)?.choices?.[0]?.delta?.content;
          if (token) res.write(token);
        } catch {
          // A partial record; the next chunk completes it.
        }
      }
    }
  } catch (err) {
    console.error('Stream interrupted', err);
  }

  return res.end();
}
