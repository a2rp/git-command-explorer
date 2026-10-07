import { useState } from "react";
import { LuSearch, LuShieldCheck, LuX } from "react-icons/lu";
import { commandCategories, gitCommands } from "../../data/gitCommands.js";
import CommandCard from "./commandCard/index.jsx";
import styles from "./styles.module.css";

const CommandLibrary = () => {
    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All commands");
    const [expandedCommandId, setExpandedCommandId] = useState("");
    const normalizedQuery = query.trim().toLowerCase();

    const matchingCommands = gitCommands.filter((command) => {
        const searchableText = [command.title, command.command, command.category, command.summary, command.details, command.example, command.warning, command.saferAlternative].filter(Boolean).join(" ").toLowerCase();
        return searchableText.includes(normalizedQuery);
    });

    const visibleCommands = matchingCommands.filter((command) => activeCategory === "All commands" || command.category === activeCategory);

    const toggleCommand = (commandId) => setExpandedCommandId((currentId) => currentId === commandId ? "" : commandId);
    const clearFilters = () => {
        setQuery("");
        setActiveCategory("All commands");
    };

    return (
        <section className={styles.commandLibrary} id="commands" aria-labelledby="commands-title">
            <div className={styles.libraryHeader}>
                <div><h2 id="commands-title">Find a command</h2><p>Search by command, task, or keyword.</p></div>
                <span className={styles.commandCount} aria-live="polite">{visibleCommands.length} {visibleCommands.length === 1 ? "command" : "commands"}</span>
            </div>
            <div className={styles.searchBox}>
                <LuSearch aria-hidden="true" />
                <input id="command-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try: undo a commit, branch, remote..." aria-label="Search Git commands" autoComplete="off" />
                {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><LuX aria-hidden="true" /></button>}
            </div>
            <div className={styles.categoryFilters} role="group" aria-label="Filter by command category">
                {commandCategories.map((category) => {
                    const categoryCount = category === "All commands" ? matchingCommands.length : matchingCommands.filter((command) => command.category === category).length;
                    return <button className={activeCategory === category ? styles.activeFilter : ""} type="button" key={category} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}>{category}<span>{categoryCount}</span></button>;
                })}
            </div>
            <div className={styles.safetyNote} id="risk-notes">
                <span><LuShieldCheck aria-hidden="true" /></span>
                <div><strong>Commands are reference text only.</strong><p>High-impact commands show a warning and safer next step. Confirm before copying them. This page never runs Git commands.</p></div>
            </div>
            <div className={styles.resultSummary} aria-live="polite">Showing {visibleCommands.length} of {gitCommands.length} commands{normalizedQuery ? ` for “${query.trim()}”` : ""}.</div>
            {visibleCommands.length ? (
                <div className={styles.commandGrid}>
                    {visibleCommands.map((command) => <CommandCard key={command.id} command={command} expanded={expandedCommandId === command.id} onToggle={() => toggleCommand(command.id)} />)}
                </div>
            ) : (
                <div className={styles.emptyState}>
                    <span><LuSearch aria-hidden="true" /></span>
                    <h3>No commands found</h3>
                    <p>Try a shorter search or choose a different category.</p>
                    <button type="button" onClick={clearFilters}>Clear search and filters</button>
                </div>
            )}
        </section>
    );
};

export default CommandLibrary;
