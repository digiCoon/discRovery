import { socials } from '../content/socials.js'
import '../styles/SocialLinks.css'

export default function SocialLinks({ className = '' }) {
    return (
        <ul className={`social-links ${className}`}>
            {socials.map(({ label, url, Icon }) => (
                <li key={label}>
                    {url ? (
                        <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                            <Icon aria-hidden="true" />
                        </a>
                    ) : (
                        <span className="social-links__placeholder" title={`${label} folgt`}>
              <Icon aria-hidden="true" />
            </span>
                    )}
                </li>
            ))}
        </ul>
    )
}