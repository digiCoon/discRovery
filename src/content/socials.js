import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'

// Add the profile URL once the account exists; without URL the icon is shown as a placeholder
// TODO: replace test URLs with the team profiles before publishing
export const socials = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com', Icon: FaLinkedin },
    { label: 'Instagram', url: 'https://www.instagram.com', Icon: FaInstagram },
    { label: 'X', url: 'https://x.com', Icon: FaXTwitter },
]