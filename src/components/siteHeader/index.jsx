import { LuGitBranch, LuGithub } from "react-icons/lu";
import styles from "./styles.module.css";

const SiteHeader = () => (
    <header className={styles.siteHeader}>
        <a className={styles.brand} href="#top" aria-label="Git Command Explorer home"><span><LuGitBranch aria-hidden="true" /></span><b>git guide</b></a>
        <nav aria-label="Main navigation"><a href="#commands">Commands</a><a href="#risk-notes">Risk notes</a></nav>
        <a className={styles.repository} href="https://github.com/a2rp/git-command-explorer" target="_blank" rel="noreferrer"><LuGithub aria-hidden="true" /><span>Repository</span></a>
    </header>
);

export default SiteHeader;
