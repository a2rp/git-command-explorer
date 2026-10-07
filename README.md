![Project screenshot](./screenshot.png)

# Git Command Explorer

Git Command Explorer is a browser-based reference for common Git tasks. Search the catalog, understand what a command changes, review a practical example, and copy the command text when you are ready to use it.

**Live app:** [https://a2rp.github.io/git-command-explorer/](https://a2rp.github.io/git-command-explorer/)

## How to use it

Search by command, task, example, category, or risk level. Choose a category to narrow the list. Open **How it works** on a card to read more about its effects, see an example, and review a safer next step when one is available. Use **Copy command** to copy the command shown on that card.

Commands marked **High impact** need an extra confirmation before they are copied. The confirmation names the command, explains its warning, and shows a safer next step. Cancel, Escape, or clicking outside keeps the command uncopied. The app copies text to the clipboard only. It never opens a terminal or executes a command.

## What is included

- Twenty-nine curated commands across inspection, staging and commits, branches, undo and stash, remote work, and cleanup.
- Search across command syntax, task titles, categories, risk labels, explanations, examples, warnings, and safer alternatives.
- Category filters with matching command counts and a clear-filters empty state.
- Four risk levels: **Read-only**, **Routine**, **Caution**, and **High impact**.
- Expandable explanations, practical examples, and safer next steps where relevant.
- Copy-to-clipboard actions with success and unavailable feedback.
- A keyboard-accessible high-impact copy confirmation with a safe cancel action, Escape support, outside-click cancel, and focus kept inside the dialog.
- A fixed header with section links and the project repository, plus the requested profile and support links in the footer.
- A back-to-top button that appears after scrolling more than 50 pixels.

## Risk labels and limits

Risk labels are guidance, not a guarantee that a command is safe in every repository state. **High impact** commands can discard local work or change remote history, so inspect the command and its alternative before copying. The catalog does not inspect your repository, check the current branch, or tailor commands to a particular Git version or shell. Replace placeholders such as `<file>`, `<branch>`, and `<commit>` with values from your own repository before running a command.

Search text, expanded cards, and category filters are held in page state only. Nothing is saved between visits. Clipboard actions require browser clipboard permission and a supported browser context.

## Run locally

```sh
npm install
npm run dev
```

## Check and deploy

```sh
npm run lint
npm test
npm run build
npm run deploy
```

The deploy command builds the app and publishes the `dist` folder to the `gh-pages` branch. The live site is [https://a2rp.github.io/git-command-explorer/](https://a2rp.github.io/git-command-explorer/).

## Future improvements

These are ideas that are not implemented yet:

- Add more commands for tags, submodules, bisect, and worktrees.
- Add shell-specific quoting notes for Windows PowerShell, Command Prompt, and Unix shells.
- Let readers bookmark commands locally for quick reference.
- Add a guided workflow for common tasks such as creating a branch and opening a pull request.

## Links

- Portfolio: [https://www.ashishranjan.net](https://www.ashishranjan.net)
- GitHub: [https://github.com/a2rp](https://github.com/a2rp)
- CodePen: [https://codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [https://www.linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [https://www.facebook.com/theash.ashish/](https://www.facebook.com/theash.ashish/)
- YouTube: [https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [mailto:ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- Support: [https://a2rp-donation-page.netlify.app/](https://a2rp-donation-page.netlify.app/)
- Buy Me a Coffee: [https://buymeacoffee.com/ashishranjan](https://buymeacoffee.com/ashishranjan)
- Patreon: [https://www.patreon.com/ashishranjan](https://www.patreon.com/ashishranjan)
