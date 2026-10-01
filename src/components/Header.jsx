import { Link, NavLink } from 'react-router'
import BrandName from './BrandName.jsx'
import '../styles/Header.css'

export default function Header() {
    return (
        <header className="site-header">
            <div className="container site-header__inner">
                <Link to="/" className="brand"><BrandName /></Link>
                <nav className="site-nav" aria-label="Hauptnavigation">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/logbuch">Logbuch</NavLink>
                </nav>
            </div>
        </header>
    )
}