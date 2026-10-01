import { credits } from '../content/credits.js'
import '../styles/Legal.css'

export default function Legal() {
    return (
        <>
            <header className="page-head">
                <p className="eyebrow">Rechtliches</p>
                <h1>Impressum &amp; Datenschutz</h1>
            </header>

            <div className="legal">
                <section id="impressum" className="legal__card">
                    <h2>Impressum</h2>
                    <p>Folgt nach Abstimmung mit damago.</p>
                </section>

                <section id="datenschutz" className="legal__card">
                    <h2>Datenschutz</h2>
                    <p>Folgt nach Abstimmung mit damago.</p>
                </section>

                <section id="medien" className="legal__card">
                    <h2>Bild- und Medienachweise</h2>
                    <ul className="credits">
                        {credits.map((credit) => (
                            <li key={credit.name} className="credits__item">
                                <p className="credits__name">
                                    {credit.name}
                                    <span className="credits__type">{credit.type}</span>
                                </p>
                                <p className="credits__meta">
                                    {credit.author}
                                    {' · '}
                                    {credit.licenseUrl ? (
                                        <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer">
                                            {credit.license}
                                        </a>
                                    ) : (
                                        credit.license
                                    )}
                                </p>
                                {credit.note && <p className="credits__note">{credit.note}</p>}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    )
}