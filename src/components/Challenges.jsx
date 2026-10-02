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

    return (
        <section className="section" aria-labelledby="challenges-title">
            <div className="section__head">
                <h2 id="challenges-title" className="challenges__title">Die Mission</h2>
            </div>

            <div className="challenges">
                <ol className="challenges__list">
                    {challenges.map((challenge, index) => (
                        <li key={challenge.id} className={`challenge challenge--${challenge.status}`}>
                            <span className="challenge__dot" aria-hidden="true" />
                            {/* Line to the next point: full green when done, half blue while in progress */}
                            <span className={`challenge__line challenge__line--${challenge.status}`} aria-hidden="true" />

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

                {/* Finish flag at the end of the path, reached when all challenges are done */}
                <div className={`challenges__goal ${allDone ? 'challenges__goal--done' : ''}`}>
                    <span className="challenges__flag" aria-hidden="true">
                        <FaFlagCheckered />
                    </span>
                    <p className="challenge__status">
                        {allDone ? 'Complete' : <span className="challenge__sr-text">Ziel noch nicht erreicht</span>}
                    </p>
                </div>
            </div>
        </section>
    )
}