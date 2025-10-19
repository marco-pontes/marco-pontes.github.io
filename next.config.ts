import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	i18n: {
		locales: ["en"], // Your supported locales
		defaultLocale: "en",
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
