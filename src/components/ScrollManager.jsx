import { useEffect } from 'react'
import { useLocation } from 'react-router'

// React Router does not scroll by itself: go to the top on page change, or to the anchor (#team)
export default function ScrollManager() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView()
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname, hash])

    return null
}