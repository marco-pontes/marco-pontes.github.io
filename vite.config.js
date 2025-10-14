import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import autoprefixer from "autoprefixer";
import { setupHttpClientEndpoints } from "@vivid-front/bundler";
var environment = process.env.NODE_ENV || "development";
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tsconfigPaths(),
        setupHttpClientEndpoints(environment),
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
    ],
    css: {
        postcss: {
            plugins: [autoprefixer],
        },
    },
    server: {
        host: true,
        strictPort: true,
    },
    // test: {
    // 	environment: "jsdom",
    // 	setupFiles: ["./vitest.setup.ts"],
    // 	css: true,
    // 	globals: true,
    // },
});
