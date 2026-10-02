import { Link } from 'react-router'
import BrandName from './BrandName.jsx'
import SocialLinks from './SocialLinks.jsx'
import heroImage from '../assets/images/hero.webp'
import '../styles/Hero.css'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__text">
                <h1 className="hero__title">
                    <span className="hero__brand brand"><BrandName /></span>
                    <span className="hero__claim">Autonom. Oder gar nicht.</span>
                </h1>
                <p>
                    In fünf Wochen bringen wir einem Rover bei, Gesten und
                    handgeschriebene Ziffern zu erkennen, farbige Kugeln zu finden und
                    sie selbstständig anzufahren. Hier dokumentieren wir, wie es läuft,
                    auch wenn es mal nicht läuft.
                </p>
                <div className="hero__actions">
                    <Link to="/logbuch" className="button button--primary">Zum Logbuch</Link>
                    <Link to="/#team" className="button button--secondary">Das Team</Link>
                    <span className="hero__divider" aria-hidden="true" />
                    <SocialLinks className="social-links--large" />
                </div>
            </div>

            <img
                className="hero__image"
                src={heroImage}
                alt="Zwei DiscRovery-Rover vor dem DiscRovery-Logo"
                fetchPriority="high"
            />
        </section>
    )
}