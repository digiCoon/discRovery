import { Link, NavLink } from 'react-router'
import '../styles/Header.css'

export default function Header() {
    return (
        <header className="site-header">
            <div className="container site-header__inner">
                <Link to="/" className="brand">DiscRovery</Link>
                <nav className="site-nav" aria-label="Hauptnavigation">
                    <NavLink to="/" end>Start</NavLink>
                    <NavLink to="/logbuch">Logbuch</NavLink>
                    <NavLink to="/impressum">Impressum</NavLink>
                </nav>
            </div>
        </header>
    )
}