import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

const ConfirmRiskyCopy = ({ command, warning, saferAlternative, onCancel, onConfirm }) => {
    const cancelRef = useRef(null);
    const confirmRef = useRef(null);

    useEffect(() => {
        cancelRef.current?.focus();
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                onCancel();
            }
            if (event.key === "Tab") {
                if (event.shiftKey && document.activeElement === cancelRef.current) {
                    event.preventDefault();
                    confirmRef.current?.focus();
                } else if (!event.shiftKey && document.activeElement === confirmRef.current) {
                    event.preventDefault();
                    cancelRef.current?.focus();
                }
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onCancel]);

    return (
        <div className={styles.modalBackdrop} onMouseDown={(event) => { if (event.target === event.currentTarget) onCancel(); }}>
            <div className={styles.riskDialog} role="dialog" aria-modal="true" aria-labelledby="risky-copy-title" aria-describedby="risky-copy-description">
                <span className={styles.warningMark} aria-hidden="true">!</span>
                <h2 id="risky-copy-title">Copy a high-impact command?</h2>
                <p id="risky-copy-description">{warning}</p>
                <pre><code>{command}</code></pre>
                <div className={styles.saferAlternative}><strong>Safer next step</strong><code>{saferAlternative}</code></div>
                <p className={styles.copyOnlyNote}>This only copies command text. Nothing will run from this page.</p>
                <div className={styles.dialogActions}>
                    <button type="button" ref={cancelRef} onClick={onCancel}>Keep browsing</button>
                    <button type="button" ref={confirmRef} onClick={onConfirm}>Copy command</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmRiskyCopy;
