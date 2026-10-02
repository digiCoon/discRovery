import { Link } from 'react-router'
import SocialLinks from './SocialLinks.jsx'
import damagoLogo from '../assets/images/damago_logo_weiss.webp'
import '../styles/Footer.css'

const damagoUrl = 'https://www.damago.de/de/umschulung-fachinformatik'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="site-footer">
            <div className="container site-footer__container">
                <div className="site-footer__inner">
                    <p>© {year} DiscRovery</p>

                    <div className="site-footer__end">
                        <SocialLinks />

                        <nav className="footer-nav" aria-label="Rechtliches">
                            <Link to="/impressum">Impressum &amp; Datenschutz</Link>
                        </nav>
                    </div>
                </div>

                <div className="site-footer__project">
                    <p className="site-footer__note">
                        <span className="site-footer__label">Info:</span> DiscRovery ist ein Praxisprojekt der
                        Klassen FI16-AE/SI in der Umschulung Fachinformatik bei der{' '}
                        <a href={damagoUrl} target="_blank" rel="noopener noreferrer">
                            damago GmbH
                        </a>
                        . Das Start-up ist fiktiv.
                    </p>

                    <a
                        className="site-footer__partner"
                        href={damagoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={damagoLogo} alt="damago GmbH" />
                    </a>
                </div>
            </div>
        </footer>
    )
}