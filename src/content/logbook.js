const files = import.meta.glob('./logbook/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
})

function parseFrontmatter(raw) {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)

    if (!match) {
        return { attributes: {}, body: raw }
    }

    const attributes = {}

    for (const line of match[1].split(/\r?\n/)) {
        const separator = line.indexOf(':')
        if (separator === -1) continue

        const key = line.slice(0, separator).trim()
        const value = line.slice(separator + 1).trim()
        if (key) attributes[key] = value
    }

    return { attributes, body: match[2] }
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
            day: attributes.day ? Number(attributes.day) : undefined,
            teaser: attributes.teaser,
            video: attributes.video,
            body,
        }
    })
    .filter((entry) => {
        if (Number.isNaN(entry.date.getTime())) {
            console.warn(`Logbook entry "${entry.slug}" has an invalid date and was skipped.`)
            return false
        }
        return true
    })
    .sort((a, b) => b.date - a.date)

export const latestEntries = entries.slice(0, 3)