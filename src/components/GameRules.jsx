// Taken from the game's own values (BALL_TYPES, battery pickup)
const items = [
    { color: 'green', label: 'Grün', points: '100', battery: '+3 %' },
    { color: 'red', label: 'Rot', points: '150', battery: '+5 %' },
    { color: 'blue', label: 'Blau', points: '200', battery: '+10 %' },
    { color: 'yellow', label: 'Ladestation', points: '–', battery: '+25 %' },
]

export default function GameRules() {
    return (
        <table className="game-rules" aria-label="Punkte und Batterie je Objekt">
            <thead>
            <tr>
                <th scope="col">Objekt</th>
                <th scope="col">Punkte</th>
                <th scope="col">Batterie</th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => (
                <tr key={item.color}>
                    <th scope="row" className={`game-rules__item item--${item.color}`}>
                        {item.label}
                    </th>
                    <td className="game-rules__points">{item.points}</td>
                    <td className="game-rules__battery">{item.battery}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}