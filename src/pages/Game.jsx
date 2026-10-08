import '../styles/Game.css'

export default function Game() {
    return (
        <>
            <header className="page-head">
                <p className="eyebrow">Kurze Pause</p>
                <h1>Rovv-Y</h1>
                <p className="page-head__intro">
                    Ein Mini-Spiel aus dem Team: Kugeln sammeln, Felsen ausweichen und die Batterie
                    im Blick behalten.
                </p>
            </header>

            {/* The game runs as its own page in a frame, so its keyboard controls stay inside it */}
            <div className="game">
                <iframe
                    className="game__frame"
                    src="/game/rovv-y.html"
                    title="Rovv-Y, Mini-Spiel"
                />
                <p className="game__note">
                    Die Bestenliste wird nur in deinem Browser gespeichert und nirgendwohin übertragen.
                </p>
            </div>

            <p className="game__mobile-hint">
                Rovv-Y braucht eine Tastatur. Schau am Rechner vorbei, dann kann es losgehen.
            </p>
        </>
    )
}