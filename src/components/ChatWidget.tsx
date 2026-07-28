import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTED = [
  'What is Matthew working on?',
  'Tell me about Invariant',
  'What are his research interests?',
  'Where has he worked?',
];

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [open, messages]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    const next: Message[] = [...messages, { role: 'user', content }];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) {
        // Errors still come back as JSON; only success streams plain text.
        const detail = await res.json().catch(() => null);
        setMessages([
          ...next,
          { role: 'assistant', content: detail?.error ?? 'Something went wrong. Try again.' },
        ]);
        return;
      }

      // Append an empty turn, then fill it as tokens arrive.
      setMessages([...next, { role: 'assistant', content: '' }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = '';

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setMessages([...next, { role: 'assistant', content: reply }]);
      }

      if (!reply.trim()) {
        setMessages([...next, { role: 'assistant', content: 'No response received.' }]);
      }
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Could not reach the server. Try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  const showSuggested = messages.length === 0;
  const last = messages[messages.length - 1];
  const streaming = loading && last?.role === 'assistant' && last.content !== '';

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Ask about Matthew">
          <div className="chat-header">
            <div className="chat-header-info">
              <span className="chat-header-title">Ask about Matthew</span>
              <span className="chat-header-sub">Powered by Llama 3.3</span>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <CloseIcon />
            </button>
          </div>

          <div className="chat-messages">
            {messages.length === 0 && (
              <p className="chat-empty">
                Ask me anything about Matthew — his research, projects, experience, or background.
              </p>
            )}
            {messages.map((m, i) =>
              // The in-flight turn starts empty; the dots below stand in for it
              // until the first token lands.
              m.content ? (
                <div key={i} className={`chat-bubble chat-bubble--${m.role}`}>
                  {m.content}
                </div>
              ) : null
            )}
            {loading && !streaming && (
              <div className="chat-bubble chat-bubble--assistant chat-typing">
                <span /><span /><span />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {showSuggested && (
            <div className="chat-suggestions">
              {SUGGESTED.map((s) => (
                <button key={s} className="chat-suggestion" onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="chat-input-row">
            <textarea
              ref={inputRef}
              className="chat-input"
              placeholder="Ask a question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              aria-label="Chat input"
            />
            <button
              className="chat-send"
              onClick={() => send(input)}
              disabled={!input.trim() || loading}
              aria-label="Send"
            >
              <SendIcon />
            </button>
          </div>

          {/*
            Notice at collection. What a visitor types leaves this site for a
            third-party model provider, and that has to be said before they
            type it, not in a policy page they will not open.
          */}
          <p className="chat-disclosure">
            Messages are sent to Groq to generate a reply and are not stored by this
            site. Please don&rsquo;t enter anything confidential.
          </p>
        </div>
      )}

      <button
        className={`chat-fab${open ? ' chat-fab--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Ask about Matthew'}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  );
}
