import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    root: "src",
    base: "/react_simon_says",
    build: {
        outDir: "./../dist"
    }
})