import { Link, NavLink } from 'react-router'

export default function Header() {
    return (
        <header>
            <Link to="/" className="brand">DiscRovery</Link>
            <nav>
                <NavLink to="/" end>Start</NavLink>
                <NavLink to="/logbuch">Logbuch</NavLink>
                <NavLink to="/impressum">Impressum</NavLink>
            </nav>
        </header>
    )
}