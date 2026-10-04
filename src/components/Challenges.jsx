import { FaFlagCheckered } from 'react-icons/fa6'
import { challenges } from '../content/challenges.js'
import '../styles/Challenges.css'

const statusLabels = {
    done: 'Geschafft',
    active: 'In Arbeit',
    open: 'Offen',
}

const targetLabels = {
    red: 'rot',
    green: 'grün',
    blue: 'blau',
}

export default function Challenges() {
    const allDone = challenges.every((challenge) => challenge.status === 'done')

    // The line after a point shows the way to the next point, so it takes the status of the next challenge.
    // After the last point it leads to the finish flag.
    function statusAfter(index) {
        const next = challenges[index + 1]
        if (next) return next.status
        return allDone ? 'done' : 'open'
    }

    return (
        <section className="section" aria-labelledby="challenges-title">
            <div className="section__head">
                <h2 id="challenges-title" className="challenges__title">Die Mission</h2>
            </div>
            <p className="section__intro">
                1&nbsp;×&nbsp;1&nbsp;Meter Feld, drei Kugeln, ein Rover. Wo die Kugeln liegen, wird nicht verraten. Und finden muss er sie ganz allein, ohne Wegbeschreibung oder Navi.
            </p>

            <div className="challenges">
                {/* Start marker at the beginning of the path, always green because the project is running */}
                <span className="challenges__start" aria-hidden="true">&gt;</span>

                <ol className="challenges__list">
                    {challenges.map((challenge, index) => (
                        <li key={challenge.id} className={`challenge challenge--${challenge.status}`}>
                            {index === 0 && (
                                <span
                                    className={`challenge__lead challenge__line--${challenge.status}`}
                                    aria-hidden="true"
                                />
                            )}
                            <span className="challenge__dot" aria-hidden="true" />
                            <span
                                className={`challenge__line challenge__line--${statusAfter(index)}`}
                                aria-hidden="true"
                            />

                            <p className="challenge__status">
                                {String(index + 1).padStart(2, '0')} · {statusLabels[challenge.status]}
                            </p>
                            <h3 className="challenge__name">{challenge.title}</h3>

                            <p className="challenge__targets">
                                <span className="challenge__sr-text">
                                    Reihenfolge: {challenge.targets.map((target) => targetLabels[target]).join(', ')}
                                </span>
                                {challenge.targets.map((target, targetIndex) => (
                                    <span
                                        key={`${target}-${targetIndex}`}
                                        className={`challenge__ball challenge__ball--${target}`}
                                        aria-hidden="true"
                                    />
                                ))}
                            </p>

                            <p className="challenge__description">{challenge.description}</p>
                        </li>
                    ))}
                </ol>

                {/* Finish flag at the end of the path, turns green when all challenges are done */}
                <div className={`challenges__goal ${allDone ? 'challenges__goal--done' : ''}`}>
                    <span className="challenges__flag" aria-hidden="true">
                        <FaFlagCheckered />
                    </span>
                    <p className="challenge__sr-text">
                        {allDone ? 'Ziel erreicht' : 'Ziel noch nicht erreicht'}
                    </p>
                </div>
            </div>
        </section>
    )
}