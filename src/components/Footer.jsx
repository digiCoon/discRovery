import { Link } from 'react-router'
import SocialLinks from './SocialLinks.jsx'
import '../styles/Footer.css'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="site-footer">
            <div className="container site-footer__inner">
                <p>© {year} DiscRovery</p>

                <div className="site-footer__end">
                    <SocialLinks />

                    <nav className="footer-nav" aria-label="Rechtliches">
                        <Link to="/impressum">Impressum &amp; Datenschutz</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}