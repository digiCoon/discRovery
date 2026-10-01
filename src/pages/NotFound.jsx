import { Link } from 'react-router'
import mudImage from '../assets/images/404.webp'
import '../styles/NotFound.css'

export default function NotFound() {
    return (
        <section className="not-found">
            <div className="not-found__text">
                <p className="not-found__code" aria-hidden="true">404</p>
                <h1>Festgefahren.</h1>
                <p>
                    Diese Seite gibt es nicht. Oder unsere Rover sind auf dem Weg
                    dorthin im Schlamm stecken geblieben.
                </p>
                <div className="not-found__actions">
                    <Link to="/" className="button button--primary">Zur Startseite</Link>
                    <Link to="/logbuch" className="button button--secondary">Zum Logbuch</Link>
                </div>
            </div>

            <img
                className="not-found__image"
                src={mudImage}
                alt="Zwei Rover stecken bis zu den Reifen im Schlamm"
            />
        </section>
    )
}