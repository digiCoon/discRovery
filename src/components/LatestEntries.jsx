import { Link } from 'react-router'
import { latestEntries, formatDate } from '../content/logbook.js'
import '../styles/LatestEntries.css'

export default function LatestEntries() {
    if (latestEntries.length === 0) return null

    return (
        <section className="section" aria-labelledby="latest-title">
            <div className="section__head">
                <h2 id="latest-title" className="latest__title">Letzte Logs</h2>
                <Link to="/logbuch" className="section__more">Alle Einträge →</Link>
            </div>

            <ul className="entry-cards">
                {latestEntries.map((entry) => (
                    <li key={entry.slug} className="entry-card">
                        <time className="entry-card__meta" dateTime={entry.isoDate}>
                            {formatDate(entry.date)}
                        </time>
                        <h3 className="entry-card__title">{entry.title}</h3>
                        <p className="entry-card__teaser">{entry.teaser}</p>
                        <Link to={`/logbuch?eintrag=${entry.slug}`} className="entry-card__link">
                            Weiterlesen →
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}