import { useEffect, useRef, useState } from 'react'
import Markdown from 'react-markdown'
import { FaMagnifyingGlassPlus } from 'react-icons/fa6'
import { formatDate } from '../content/logbook.js'
import ImageLightbox from './ImageLightbox.jsx'
import '../styles/EntryModal.css'

const imageLinkPattern = /\.(webp|png|jpe?g|gif|svg|avif)(\?.*)?$/i

// Images in the Markdown body: focusable, with a zoom badge so it's clear they open larger.
// Diagrams get the full width. Clicks are handled once on the surrounding .prose element.
function MarkdownImage({ src, alt = '' }) {
    const isDiagram = src?.includes('-flowchart')

    return (
        <span className={`prose__zoom ${isDiagram ? 'prose__zoom--diagram' : ''}`}>
            <img
                src={src}
                alt={alt}
                role="button"
                tabIndex={0}
                aria-label={alt ? `${alt} (vergrößern)` : 'Bild vergrößern'}
            />
            <span className="prose__zoom-badge" aria-hidden="true">
                <FaMagnifyingGlassPlus />
            </span>
        </span>
    )
}

// A link that only points to an image file would leave the page, the lightbox replaces it
function MarkdownLink({ href, title, children }) {
    if (href && imageLinkPattern.test(href)) return children

    return (
        <a href={href} title={title}>
            {children}
        </a>
    )
}

const markdownComponents = { img: MarkdownImage, a: MarkdownLink }

export default function EntryModal({ entry, onClose }) {
    const dialogRef = useRef(null)
    const triggerRef = useRef(null)
    const [zoomed, setZoomed] = useState(null)

    // Only show the zoomed image while its entry is open, so it never outlives the modal
    const activeImage = entry && zoomed?.slug === entry.slug ? zoomed : null

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return

        if (entry && !dialog.open) {
            dialog.showModal()
        } else if (!entry && dialog.open) {
            dialog.close()
        }
    }, [entry])

    function handleClick(event) {
        if (event.target === dialogRef.current) {
            dialogRef.current.close()
        }
    }

    function openImage(image) {
        triggerRef.current = image
        setZoomed({ slug: entry.slug, src: image.getAttribute('src'), alt: image.alt })
    }

    // Click on the image or on its zoom badge
    function handleProseClick(event) {
        const image = event.target.closest('.prose__zoom')?.querySelector('img')
        if (image) openImage(image)
    }

    function handleProseKeyDown(event) {
        if (event.target.tagName !== 'IMG') return
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            openImage(event.target)
        }
    }

    // Back to the entry: same scroll position, focus on the image that was opened
    function closeImage() {
        setZoomed(null)
        triggerRef.current?.focus()
    }

    return (
        <>
            <dialog
                ref={dialogRef}
                className="entry-modal"
                onClose={onClose}
                onClick={handleClick}
                aria-labelledby="entry-modal-title"
            >
                {entry && (
                    <article className="entry-modal__content">
                        <header className="entry-modal__head">
                            <div className="entry-modal__meta">
                                <time dateTime={entry.isoDate}>{formatDate(entry.date)}</time>
                                {entry.day && (
                                    <>
                                        <span aria-hidden="true">·</span>
                                        <span className="entry-modal__day">Tag {entry.day}</span>
                                    </>
                                )}
                            </div>
                            <button
                                type="button"
                                className="entry-modal__close"
                                aria-label="Schließen"
                                onClick={() => dialogRef.current.close()}
                            >
                                ×
                            </button>
                        </header>

                        <h2 id="entry-modal-title">{entry.title}</h2>

                        <div className="prose" onClick={handleProseClick} onKeyDown={handleProseKeyDown}>
                            <Markdown components={markdownComponents}>{entry.body}</Markdown>
                        </div>

                        {entry.video && (
                            <video
                                className="entry-modal__media"
                                src={entry.video}
                                controls
                                preload="metadata"
                            />
                        )}
                    </article>
                )}
            </dialog>

            {/* Sibling of the entry modal, so Esc and backdrop clicks only ever close the image */}
            <ImageLightbox image={activeImage} onClose={closeImage} />
        </>
    )
}