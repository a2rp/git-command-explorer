import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    base: "/git-command-explorer/",
    build: {
        sourcemap: false,
    },
    plugins: [react()],
});
