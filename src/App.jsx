import { LuCheck, LuGitBranch, LuTerminal } from "react-icons/lu";
import BackToTop from "./components/backToTop/index.jsx";
import CommandLibrary from "./components/commandLibrary/index.jsx";
import SiteFooter from "./components/siteFooter/index.jsx";
import SiteHeader from "./components/siteHeader/index.jsx";
import styles from "./App.module.css";

const App = () => (
    <div className={styles.appShell} id="top">
        <SiteHeader />
        <main className={styles.mainContent}>
            <section className={styles.intro} aria-labelledby="page-title">
                <div className={styles.introCopy}>
                    <span className={styles.introLabel}><LuGitBranch aria-hidden="true" /> A FRIENDLY FIELD GUIDE</span>
                    <h1 id="page-title">Know the command<br />before you run it.</h1>
                    <p>Find the Git command for the job. See what it changes, check its risk, and copy a useful example when you are ready.</p>
                    <div className={styles.introFacts}>
                        <span><LuCheck aria-hidden="true" /> Search 29 commands</span>
                        <span><LuCheck aria-hidden="true" /> Read risk notes</span>
                        <span><LuCheck aria-hidden="true" /> Copy, never execute</span>
                    </div>
                </div>
                <div className={styles.terminalCard} aria-label="Sample Git command and output">
                    <div className={styles.terminalBar}><div><i /><i /><i /></div><span>terminal · example</span><LuTerminal aria-hidden="true" /></div>
                    <pre><code><span className={styles.prompt}>$</span> git status{"\n"}<span className={styles.terminalMuted}>On branch</span> <span className={styles.branchName}>main</span>{"\n"}<span className={styles.terminalMuted}>Your working tree is clean.</span></code></pre>
                    <div className={styles.terminalFoot}><span><i /> safe to inspect</span><code>READ ONLY</code></div>
                </div>
                <div className={styles.glow} aria-hidden="true" />
            </section>
            <CommandLibrary />
            <p className={styles.privacyNote}>No terminal connection. No repository access. Just clear explanations and copyable text.</p>
        </main>
        <SiteFooter />
        <BackToTop />
    </div>
);

export default App;
