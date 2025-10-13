import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import autoprefixer from "autoprefixer";
import { setupHttpClientEndpoints } from "@vivid-front/bundler";
let environment = process.env.NODE_ENV || "development";

// Use the setupHttpClientEndpoints directly and synchronously so env vars are set before Vite proceeds
const apiConfig = setupHttpClientEndpoints(environment);
console.log(apiConfig);
// https://vite.dev/config/
export default defineConfig({
	define: { __SIMPLE_FAKE_API_HTTP__: JSON.stringify("ASASASADSADCUCU") },
	plugins: [
		tsconfigPaths(),
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
