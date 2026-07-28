import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { ROUTES, SITE_URL } from './src/routes'

/**
 * Emits sitemap.xml from the same route table the router and the page titles read,
 * so a route cannot be live and unlisted.
 */
function sitemap(): Plugin {
  return {
    name: 'emit-sitemap',
    apply: 'build',
    generateBundle() {
      const lastmod = new Date().toISOString().slice(0, 10)
      const urls = ROUTES.map(
        (r) =>
          '  <url>\n' +
          `    <loc>${SITE_URL}${r.path}</loc>\n` +
          `    <lastmod>${lastmod}</lastmod>\n` +
          `    <priority>${r.priority.toFixed(1)}</priority>\n` +
          '  </url>',
      ).join('\n')

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), sitemap()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
