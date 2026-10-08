import GameLeaderboard from '../components/GameLeaderboard.jsx'
import GameRules from '../components/GameRules.jsx'
import '../styles/Game.css'

const briefing = [
    { label: 'Ziel', text: 'Kugeln einsammeln und Punkte holen, solange die Batterie reicht.' },
    { label: 'Tempo', text: 'Je höher der Score, desto mehr Kugeln und desto enger wird es.' },
    { label: 'Batterie', text: 'Akku sinkt stetig, beim Fahren schneller. Ladestation bei 70, 40 und 10 %.' },
    { label: 'Felsen', text: 'Kosten keine Punkte, aber Zeit. Der Rover bleibt hängen.' },
]

export default function Game() {
    return (
        <div className="game-page">
            <header className="page-head">
                <p className="eyebrow">Kurze Pause · Mini-Spiel</p>
                <h1>Testfahrt im Handbetrieb</h1>
                <p className="page-head__intro">
                    Die echten Rover üben noch, Kugeln selbst zu finden. Bis dahin übernimmt der Mensch und zeigt, wie es geht... oder wie nicht...
                </p>

                {/* Rules on the left, the values as a small table on the right */}
                <div className="game-intro">
                    <dl className="game-briefing">
                        {briefing.map((item) => (
                            <div key={item.label} className="game-briefing__row">
                                <dt>{item.label}:</dt>
                                <dd>{item.text}</dd>
                            </div>
                        ))}
                    </dl>

                    <GameRules />
                </div>
            </header>

            {/* The game runs as its own page in a frame, so its keyboard controls stay inside it */}
            <div className="game">
                <iframe
                    className="game__frame"
                    src="/game/rovv-y.html"
                    title="ROVV-Y, Mini-Spiel"
                />
                <GameLeaderboard />
            </div>

            <p className="game__mobile-hint">
                ROVV-Y braucht eine Tastatur und läuft deshalb nur am Rechner.
            </p>
        </div>
    )
}