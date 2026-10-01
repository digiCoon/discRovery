import { useEffect, useRef } from 'react'
import Markdown from 'react-markdown'
import { formatDate } from '../content/logbook.js'
import '../styles/EntryModal.css'

export default function EntryModal({ entry, onClose }) {
    const dialogRef = useRef(null)

    // Open or close the native dialog when the selected entry changes
    useEffect(() => {
        const dialog = dialogRef.current
        if (entry && !dialog.open) dialog.showModal()
        if (!entry && dialog.open) dialog.close()
    }, [entry])

    // Close when clicking on the backdrop (outside the content)
    function handleClick(event) {
        if (event.target === dialogRef.current) dialogRef.current.close()
    }

    return (
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
                            <time dateTime={entry.date.toISOString().slice(0, 10)}>
                                {formatDate(entry.date)}
                            </time>
                            {entry.category && <span>{entry.category}</span>}
                        </div>
                        <button
                            type="button"
                            className="entry-modal__close"
                            onClick={() => dialogRef.current.close()}
                            aria-label="Schließen"
                        >
                            ×
                        </button>
                    </header>

                    <h2 id="entry-modal-title">{entry.title}</h2>

                    {entry.image && (
                        <img className="entry-modal__media" src={entry.image} alt={entry.imageAlt ?? ''} />
                    )}
                    {entry.video && (
                        <video className="entry-modal__media" src={entry.video} controls preload="metadata" />
                    )}

                    <div className="prose">
                        <Markdown>{entry.body}</Markdown>
                    </div>
                </article>
            )}
        </dialog>
    )
}