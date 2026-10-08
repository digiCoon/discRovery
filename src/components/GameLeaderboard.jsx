import { useEffect, useState } from 'react'

// Same key the game writes to; both run on the same domain and share localStorage
const storageKey = 'rovyYHighscores'

const rankClasses = { 1: 'rank--gold', 2: 'rank--silver', 3: 'rank--bronze' }

function readScores() {
    try {
        const scores = JSON.parse(localStorage.getItem(storageKey))
        return Array.isArray(scores) ? scores : []
    } catch {
        return []
    }
}

export default function GameLeaderboard() {
    const [scores, setScores] = useState(readScores)

    // The game saves each round inside its frame; the storage event tells this page about it
    useEffect(() => {
        function handleStorage(event) {
            if (event.key === storageKey) setScores(readScores())
        }

        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
    }, [])

    return (
        <aside className="leaderboard" aria-labelledby="leaderboard-title">
            <h2 id="leaderboard-title" className="leaderboard__title">Bestenliste</h2>

            {scores.length === 0 ? (
                <p className="leaderboard__empty">Noch keine Mission abgeschlossen.</p>
            ) : (
                <table className="leaderboard__table">
                    <thead>
                    <tr>
                        <th scope="col">Rang</th>
                        <th scope="col">Spieler</th>
                        <th scope="col">Punkte</th>
                    </tr>
                    </thead>
                    <tbody>
                    {scores.map((entry, index) => {
                        const rank = index + 1

                        return (
                            <tr key={`${entry.date}-${index}`}>
                                <td className={`leaderboard__rank ${rankClasses[rank] ?? ''}`}>
                                    {rank === 1 ? <span aria-label="Platz 1">🏆</span> : rank}
                                </td>
                                <td className="leaderboard__name">{entry.name}</td>
                                <td className="leaderboard__score">{entry.score}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            )}

            <p className="leaderboard__note">
                Die Bestenliste bleibt im eigenen Browser. Nichts wird übertragen.
            </p>
        </aside>
    )
}