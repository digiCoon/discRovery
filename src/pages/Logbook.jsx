import { Link, useSearchParams } from 'react-router'
import { entries, formatDate } from '../content/logbook.js'
import EntryModal from '../components/EntryModal.jsx'
import '../styles/Logbook.css'

export default function Logbook() {
    const [searchParams, setSearchParams] = useSearchParams()
    const activeEntry = entries.find((entry) => entry.slug === searchParams.get('eintrag')) ?? null

    function closeEntry() {
        setSearchParams((params) => {
            params.delete('eintrag')
            return params
        })
    }

    return (
        <>
            <header className="page-head">
                <p className="eyebrow">Fortschritt</p>
                <h1>Logbuch</h1>
                <p className="page-head__intro">
                    Was wir gebaut, gelernt und verworfen haben, der neueste Eintrag zuerst.
                </p>
            </header>

            {entries.length === 0 ? (
                <p>Noch keine Einträge.</p>
            ) : (
                <ol className="timeline">
                    {entries.map((entry) => (
                        <li key={entry.slug} className="timeline__item">
                            <article className="log-entry">
                                <div className="log-entry__meta">
                                    <time dateTime={entry.isoDate}>{formatDate(entry.date)}</time>
                                    {entry.category && (
                                        <span className="log-entry__category">{entry.category}</span>
                                    )}
                                </div>
                                <h2 className="log-entry__title">
                                    <Link to={`?eintrag=${entry.slug}`} className="log-entry__link">
                                        {entry.title}
                                    </Link>
                                </h2>
                                <p className="log-entry__teaser">{entry.teaser}</p>
                            </article>
                        </li>
                    ))}
                </ol>
            )}

            <EntryModal entry={activeEntry} onClose={closeEntry} />
        </>
    )
}