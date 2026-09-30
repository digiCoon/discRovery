import { Link } from 'react-router'
import '../styles/Footer.css'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="site-footer">
            <div className="container site-footer__inner">
                <p>© {year} DiscRovery</p>
                <nav className="footer-nav" aria-label="Rechtliches">
                    <Link to="/impressum">Impressum</Link>
                    <Link to="/impressum#datenschutz">Datenschutz</Link>
                </nav>
            </div>
        </footer>
    )
}