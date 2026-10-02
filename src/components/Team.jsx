import { useState } from 'react'
import { departments } from '../content/team.js'
import '../styles/Team.css'

export default function Team() {
    return (
        <section id="team" className="section" aria-labelledby="team-title">
            <div className="section__head">
                <h2 id="team-title" className="eyebrow">Team</h2>
            </div>

            <div className="team">
                {departments.map((department) => (
                    <Department key={department.id} department={department} />
                ))}
            </div>
        </section>
    )
}

// Each department keeps its own open profile, so one per column can be open
function Department({ department }) {
    const [openId, setOpenId] = useState(null)

    return (
        <div className="team__department">
            <h3 className="team__heading">
                <span className="team__symbol" aria-hidden="true">{department.symbol}</span>
                {department.label} · {department.members.length}
            </h3>

            <ul className="team__list">
                {department.members.map((member) => {
                    const isOpen = member.id === openId
                    const panelId = `member-${member.id}`

                    return (
                        <li key={member.id} className="team__member">
                            <button
                                type="button"
                                className="team__toggle"
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => setOpenId(isOpen ? null : member.id)}
                            >
                                <span>{member.name}</span>
                                <span className="team__chevron" aria-hidden="true" />
                            </button>

                            {/* Label/value pairs, so the labels don't count as headings */}
                            <dl id={panelId} className="team__profile" hidden={!isOpen}>
                                <dt className="team__label">{'> Mission'}</dt>
                                <dd className="team__value">{member.tasks}</dd>

                                {member.funfact && (
                                    <>
                                        <dt className="team__label">{'// Funfact'}</dt>
                                        <dd className="team__value">{member.funfact}</dd>
                                    </>
                                )}

                                {member.links.length > 0 && (
                                    <>
                                        <dt className="team__label">{'> Links'}</dt>
                                        <dd className="team__value">
                                            <ul className="team__links">
                                                {member.links.map((link) => (
                                                    <li key={link.url}>
                                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                            → {link.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </dd>
                                    </>
                                )}
                            </dl>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}