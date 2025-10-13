var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import autoprefixer from "autoprefixer";
import { setupHttpClientEndpoints } from "@vivid-front/bundler";
var environment = process.env.NODE_ENV || "development";
// Use the setupHttpClientEndpoints directly and synchronously so env vars are set before Vite proceeds
var apiConfig = setupHttpClientEndpoints(environment);
console.log(apiConfig);
// https://vite.dev/config/
export default defineConfig(__assign(__assign({}, apiConfig), { plugins: [
        tsconfigPaths(),
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
    ], css: {
        postcss: {
            plugins: [autoprefixer],
        },
    }, server: {
        host: true,
        strictPort: true,
    }, test: {
        environment: "jsdom",
        setupFiles: ["./vitest.setup.ts"],
        css: true,
        globals: true,
    } }));
