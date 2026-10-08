import { Link } from 'react-router'
import '../styles/GameTeaser.css'

export default function GameTeaser() {
    return (
        <section className="section game-teaser" aria-labelledby="game-teaser-title">
            <div className="game-teaser__text">
                <p className="eyebrow">Kurze Pause · Mini-Spiel</p>
                <h2 id="game-teaser-title" className="game-teaser__title">Testfahrt im Handbetrieb</h2>
                <p className="game-teaser__intro">
                    Die echten Rover lernen noch. Bis dahin sitzt der Mensch am Steuer:<br/>Kugeln sammeln, Batterie laden, Felsen meiden.
                </p>
            </div>

            <Link to="/spiel" className="button button--primary">
                Zur Testfahrt
            </Link>
        </section>
    )
}