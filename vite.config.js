import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// Public pages for the sitemap; logbook entries open in a dialog and need no own entry
const routes = ['/', '/logbuch', '/impressum']

// Crawlers that collect training data for AI models
const blockedBots = [
  'GPTBot',
  'ChatGPT-User',
  'CCBot',
  'anthropic-ai',
  'ClaudeBot',
  'Google-Extended',
  'PerplexityBot',
]

// Replaces %SITE_URL% in index.html, e.g. for social media previews that need absolute URLs
function siteUrlInHtml(siteUrl) {
  return {
    name: 'site-url-in-html',
    transformIndexHtml(html) {
      return html.replaceAll('%SITE_URL%', siteUrl)
    },
  }
}

// Writes robots.txt and sitemap.xml into the build, using the domain from SITE_URL
function seoFiles(siteUrl) {
  return {
    name: 'seo-files',
    apply: 'build',
    generateBundle() {
      const robots = [
        'User-agent: *',
        'Crawl-delay: 10',
        'Allow: /',
        `Sitemap: ${siteUrl}/sitemap.xml`,
        '',
        '# Block AI training crawlers',
        ...blockedBots.flatMap((bot) => [`User-agent: ${bot}`, 'Disallow: /', '']),
      ].join('\n')

      const today = new Date().toISOString().slice(0, 10)
      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...routes.map((route) => `  <url><loc>${siteUrl}${route}</loc><lastmod>${today}</lastmod></url>`),
        '</urlset>',
        '',
      ].join('\n')

      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.SITE_URL || 'https://discrovery.de').replace(/\/$/, '')

  return {
    plugins: [react(), siteUrlInHtml(siteUrl), seoFiles(siteUrl)],
  }
})