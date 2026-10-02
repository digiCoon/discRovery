import { useEffect, useRef } from 'react'
import Markdown from 'react-markdown'
import { formatDate } from '../content/logbook.js'
import '../styles/EntryModal.css'

export default function EntryModal({ entry, onClose }) {
    const dialogRef = useRef(null)

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

                    <div className="prose">
                        <Markdown>{entry.body}</Markdown>
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
    )
}