import i18n, { type InitOptions } from "i18next";
import Backend, { type HttpBackendOptions } from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { loadTranslations } from "@/common/i18n-loader.ts";

export const defaultNS = "translations";
export const resources = loadTranslations();

const i18nOptions: InitOptions<HttpBackendOptions> = {
	lng: "pt-BR",
	defaultNS,
	ns: [defaultNS],
	resources,
	debug: false,
	fallbackLng: "en",
	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	},
	backend: {
		loadPath: "src/assets/locales/pt-BR.json",
	},
};

void i18n
	.use(initReactI18next)
	.use(Backend)
	.init<HttpBackendOptions>(i18nOptions);

export default i18n;
