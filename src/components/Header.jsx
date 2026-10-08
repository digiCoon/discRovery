import { Link, NavLink } from 'react-router'
import BrandName from './BrandName.jsx'
import logo from '../assets/images/logo-white.webp'
import '../styles/Header.css'

export default function Header() {
    return (
        <header className="site-header">
            <div className="container site-header__inner">
                <Link to="/" className="brand">
                    <img className="brand__logo" src={logo} alt="" />
                    <span><BrandName /></span>
                </Link>
                <nav className="site-nav" aria-label="Hauptnavigation">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/logbuch">Logbuch</NavLink>
                    <NavLink to="/spiel">Spiel</NavLink>
                </nav>
            </div>
        </header>
    )
}