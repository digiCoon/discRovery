import { Link } from 'react-router'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer>
            <p>© {year} DiscRovery</p>
            <nav>
                <Link to="/impressum">Impressum</Link>
                <Link to="/impressum#datenschutz">Datenschutz</Link>
            </nav>
        </footer>
    )
}