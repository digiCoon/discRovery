import { useEffect, useRef, useState } from 'react'
import '../styles/ImageLightbox.css'

// Shows one image large on top of everything else, including an open entry modal.
// As its own modal dialog it gets Esc handling, focus trapping and the top layer from the browser.
// The image first fits the screen; a click on it switches to full size (scrollable) and back.
export default function ImageLightbox({ image, onClose }) {
    const dialogRef = useRef(null)
    const [fullSize, setFullSize] = useState(false)

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return

        if (image && !dialog.open) {
            dialog.showModal()
        } else if (!image && dialog.open) {
            dialog.close()
        }
    }, [image])

    function handleClose() {
        setFullSize(false)
        onClose()
    }

    // A click outside the image hits the dialog itself and closes it
    function handleClick(event) {
        if (event.target === dialogRef.current) {
            dialogRef.current.close()
        }
    }

    return (
        <dialog
            ref={dialogRef}
            className={`lightbox ${fullSize ? 'lightbox--full' : ''}`}
            onClose={handleClose}
            onClick={handleClick}
            aria-label={image?.alt || 'Vergrößertes Bild'}
        >
            {image && (
                <>
                    <button
                        type="button"
                        className="lightbox__close"
                        aria-label="Bild schließen"
                        onClick={() => dialogRef.current.close()}
                    >
                        ×
                    </button>
                    <img
                        className="lightbox__image"
                        src={image.src}
                        alt={image.alt}
                        onClick={() => setFullSize((current) => !current)}
                    />
                </>
            )}
        </dialog>
    )
}