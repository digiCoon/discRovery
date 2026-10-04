import { planGroups } from '../content/plan.js'
import '../styles/Plan.css'

export default function Plan() {
    return (
        <section className="section" aria-labelledby="plan-title">
            <div className="section__head">
                <h2 id="plan-title" className="plan__title">Der Plan</h2>
            </div>

            <div className="plan">
                {planGroups.map((group) => (
                    <div key={group.id} className="plan__group">
                        <h3 className="plan__heading">
                            <span className="plan__symbol" aria-hidden="true">{group.symbol}</span>
                            {group.label}
                        </h3>

                        {/* Label/value rows, read like a spec sheet */}
                        <dl className="plan__list">
                            {group.items.map((item) => (
                                <div key={item.label} className="plan__row">
                                    <dt className="plan__label">{`// ${item.label}`}</dt>
                                    <dd className="plan__text">{item.text}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                ))}
            </div>
        </section>
    )
}