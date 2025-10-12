import path from "path-browserify";

type TranslationModule = {
	default: Record<string, string>;
};

type I18nextResource = Record<
	string,
	{
		translations: Record<string, string>;
	}
>;

export function loadTranslations(): I18nextResource {
	const resources: I18nextResource = {};

	const modules = import.meta.glob<TranslationModule>(
		"/src/**/locales/*.json",
		{ eager: true }
	);

	for (const filePath in modules) {
		const module = modules[filePath];

		if (module) {
			const jsonContent = module.default;
			const lang = path.basename(filePath, ".json");

			if (!resources[lang]) {
				resources[lang] = {
					translations: {},
				};
			}

			resources[lang].translations = {
				...resources[lang].translations,
				...jsonContent,
			};
		}
	}

	return resources;
}
