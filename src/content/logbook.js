// Vite collects all Markdown files in this folder at build time
const files = import.meta.glob('./logbook/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
})

// Minimal frontmatter parser: supports simple "key: value" lines
function parseFrontmatter(raw) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
    if (!match) return { attributes: {}, body: raw }

    const attributes = {}
    for (const line of match[1].split(/\r?\n/)) {
        const index = line.indexOf(':')
        if (index === -1) continue
        const key = line.slice(0, index).trim()
        const value = line.slice(index + 1).trim().replace(/^["']|["']$/g, '')
        attributes[key] = value
    }

    return { attributes, body: match[2].trim() }
}

export function formatDate(date) {
    return date.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })
}

export const entries = Object.entries(files)
    .map(([path, raw]) => {
        const { attributes, body } = parseFrontmatter(raw)
        const slug = path.split('/').pop().replace(/\.md$/, '')

        return {
            slug,
            title: attributes.title,
            date: new Date(attributes.date),
            isoDate: attributes.date,
            teaser: attributes.teaser,
            image: attributes.image,
            imageAlt: attributes.imageAlt,
            video: attributes.video,
            body,
        }
    })
    // Skip entries with a missing or invalid date instead of crashing the page
    .filter((entry) => {
        const isValid = !Number.isNaN(entry.date.getTime())
        if (!isValid) console.warn(`Logbook entry "${entry.slug}" has an invalid date (expected YYYY-MM-DD)`)
        return isValid
    })
    .sort((a, b) => b.date - a.date)

export const latestEntries = entries.slice(0, 3)