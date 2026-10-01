import { Link } from 'react-router'
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import '../styles/Footer.css'

// Add the profile URL once the account exists; without URL the icon is shown as a placeholder
const socials = [
    { label: 'LinkedIn', url: '', Icon: FaLinkedin },
    { label: 'Instagram', url: '', Icon: FaInstagram },
    { label: 'X', url: '', Icon: FaXTwitter },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="site-footer">
            <div className="container site-footer__inner">
                <p>© {year} DiscRovery</p>

                <div className="site-footer__end">
                    <ul className="footer-social">
                        {socials.map(({ label, url, Icon }) => (
                            <li key={label}>
                                {url ? (
                                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                        <Icon aria-hidden="true" />
                                    </a>
                                ) : (
                                    <span className="footer-social__placeholder" title={`${label} folgt`}>
                    <Icon aria-hidden="true" />
                  </span>
                                )}
                            </li>
                        ))}
                    </ul>

                    <nav className="footer-nav" aria-label="Rechtliches">
                        <Link to="/impressum">Impressum &amp; Datenschutz</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}