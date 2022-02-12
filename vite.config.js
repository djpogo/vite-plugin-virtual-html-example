import { defineConfig } from "vite";
import virtualhtml from "vite-plugin-virtual-html";

export default defineConfig({
    root: "src/",
    plugins: [
        virtualhtml({
            pages: {
                index: "/src/pages/index.html",
                page2: "/src/pages/page2.html"
            }
        })
    ]
});