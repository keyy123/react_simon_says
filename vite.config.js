import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    root: "src"
    // root: "src/",
    // server: {
    //     host: '127.0.0.1',
    //     port: 3000
    // }
    // root: "/react_simon_says/"
});