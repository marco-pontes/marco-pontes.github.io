import i18n, { type InitOptions } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend, { type HttpBackendOptions } from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { isProduction } from "./utils/utilities.ts";
import { loadTranslations } from "@/common/i18n-loader.ts";

export const defaultNS = "translations";

export const resources = loadTranslations();

const i18nOptions: InitOptions<HttpBackendOptions> = {
	lng: "pt-BR",
	defaultNS,
	resources,
	ns: [defaultNS],
	debug: !isProduction,
	fallbackLng: "en",
	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	},
	backend: {
		loadPath: isProduction
			? "locales/{{lng}}.json"
			: "src/assets/locales/{{lng}}.json",
	},
};

void i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(Backend)
	.init<HttpBackendOptions>(i18nOptions);
