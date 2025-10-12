import { render as rtlRender, type RenderResult } from "@testing-library/react";
import i18n from "./i18n-test.ts";
import { theme } from "@/components/ui/theme.ts";
import { I18nextProvider } from "react-i18next";
import { ChakraProvider } from "@chakra-ui/react";
import {
	type ApplicationContextType,
	ApplicationProvider,
} from "@/context/ApplicationContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function render(ui: React.ReactNode): RenderResult {
	return rtlRender(<>{ui}</>, {
		wrapper: (props: React.PropsWithChildren) => (
			<I18nextProvider i18n={i18n}>
				<ChakraProvider value={theme}>{props.children}</ChakraProvider>
			</I18nextProvider>
		),
	});
}

export function renderWithProviders(
	ui: React.ReactNode,
	values?: Partial<ApplicationContextType>
): RenderResult {
	return rtlRender(<>{ui}</>, {
		wrapper: (props: React.PropsWithChildren) => (
			<QueryClientProvider client={queryClient}>
				<ApplicationProvider overrideValues={values}>
					<I18nextProvider i18n={i18n}>
						<ChakraProvider value={theme}>{props.children}</ChakraProvider>
					</I18nextProvider>
				</ApplicationProvider>
			</QueryClientProvider>
		),
	});
}
