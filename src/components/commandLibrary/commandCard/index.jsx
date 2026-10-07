import { useCallback, useState } from "react";
import { LuCheck, LuChevronDown, LuCopy } from "react-icons/lu";
import ConfirmRiskyCopy from "./confirmRiskyCopy/index.jsx";
import styles from "./styles.module.css";

const riskClasses = {
    "Read-only": styles.readOnly,
    Routine: styles.routine,
    Caution: styles.caution,
    "High impact": styles.highImpact,
};

const CommandCard = ({ command, expanded, onToggle }) => {
    const [copyStatus, setCopyStatus] = useState("");
    const [confirmOpen, setConfirmOpen] = useState(false);
    const cardId = `command-details-${command.id}`;

    const copyCommand = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(command.command);
            setCopyStatus("Copied");
        } catch {
            setCopyStatus("Clipboard unavailable");
        }
        window.setTimeout(() => setCopyStatus(""), 1800);
    }, [command.command]);

    const cancelConfirmation = useCallback(() => setConfirmOpen(false), []);
    const confirmCopy = useCallback(async () => {
        await copyCommand();
        setConfirmOpen(false);
    }, [copyCommand]);

    const startCopy = () => {
        if (command.risk === "High impact") setConfirmOpen(true);
        else copyCommand();
    };

    return (
        <article className={`${styles.commandCard} ${expanded ? styles.expanded : ""}`}>
            <div className={styles.cardLabels}>
                <span className={styles.category}>{command.category}</span>
                <span className={`${styles.risk} ${riskClasses[command.risk]}`}>{command.risk}</span>
            </div>
            <button className={styles.commandTitle} type="button" onClick={onToggle} aria-expanded={expanded} aria-controls={cardId}>
                <span>{command.title}</span><LuChevronDown aria-hidden="true" />
            </button>
            <p className={styles.summary}>{command.summary}</p>
            <div className={styles.commandLine}><code>{command.command}</code></div>
            <div className={styles.cardActions}>
                <button className={styles.detailsButton} type="button" onClick={onToggle} aria-expanded={expanded} aria-controls={cardId}>{expanded ? "Hide details" : "How it works"}</button>
                <button className={styles.copyButton} type="button" onClick={startCopy}>
                    {copyStatus === "Copied" ? <LuCheck aria-hidden="true" /> : <LuCopy aria-hidden="true" />}
                    {copyStatus === "Copied" ? "Copied" : "Copy command"}
                </button>
            </div>
            <p className={styles.copyStatus} aria-live="polite">{copyStatus === "Clipboard unavailable" ? copyStatus : ""}</p>

            <div className={styles.commandDetails} id={cardId} hidden={!expanded}>
                <p>{command.details}</p>
                {command.warning && <p className={styles.warning}>{command.warning}</p>}
                <div className={styles.example}><span>Example</span><code>{command.example}</code></div>
                {command.saferAlternative && <div className={styles.alternative}><span>Safer next step</span><code>{command.saferAlternative}</code></div>}
                <p className={styles.copyOnly}>The Explorer copies command text only. It never runs Git commands.</p>
            </div>
            {confirmOpen && <ConfirmRiskyCopy command={command.command} warning={command.warning} saferAlternative={command.saferAlternative} onCancel={cancelConfirmation} onConfirm={confirmCopy} />}
        </article>
    );
};

export default CommandCard;
