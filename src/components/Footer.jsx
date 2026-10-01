import { Link } from 'react-router'
import SocialLinks from './SocialLinks.jsx'
import '../styles/Footer.css'

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

                <p className="site-footer__note">
                    <span className="site-footer__label">Info:</span> DiscRovery ist ein Praxisprojekt der
                    Klassen FI16-AE/SI in der Umschulung Fachinformatik bei der{' '}
                    <a href="https://www.damago.de/de" target="_blank" rel="noopener noreferrer">
                        damago GmbH
                    </a>
                    . Das Start-up ist fiktiv.
                </p>
            </div>
        </footer>
    )
}