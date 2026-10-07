import assert from "node:assert/strict";
import test from "node:test";
import { commandCategories, gitCommands } from "../src/data/gitCommands.js";

test("every Git reference entry has a unique id and usable command information", () => {
    const ids = gitCommands.map((command) => command.id);
    assert.equal(new Set(ids).size, ids.length);
    assert.ok(gitCommands.length >= 25);
    assert.ok(gitCommands.every((command) => command.command.startsWith("git ") && command.summary && command.details && command.example));
});

test("every command uses one of the visible categories and risk labels", () => {
    const validCategories = new Set(commandCategories.slice(1));
    const validRisks = new Set(["Read-only", "Routine", "Caution", "High impact"]);
    assert.ok(gitCommands.every((command) => validCategories.has(command.category)));
    assert.ok(gitCommands.every((command) => validRisks.has(command.risk)));
});

test("high-impact commands include a warning and a safer next step", () => {
    const highImpactCommands = gitCommands.filter((command) => command.risk === "High impact");
    assert.ok(highImpactCommands.length >= 3);
    assert.ok(highImpactCommands.every((command) => command.warning && command.saferAlternative));
});

test("cleanup offers a dry-run before deleting untracked files", () => {
    const cleanupCommand = gitCommands.find((command) => command.id === "clean-force");
    assert.equal(cleanupCommand.example, "git clean -nd");
    assert.equal(cleanupCommand.saferAlternative, "git clean -nd");
});
