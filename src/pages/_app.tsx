import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { StrictMode } from "react";
import { ColorModeButton, ColorModeProvider } from "@/components/ui/color-mode";
import { Box, ChakraProvider, ClientOnly, Skeleton } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "@/components/ui/theme";
import "../styles/sass/main.scss";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	const { messages } = pageProps;
	const router = useRouter();

	return (
		<NextIntlClientProvider locale={router.locale} messages={messages}>
			<QueryClientProvider client={queryClient}>
				{/*<AppProvider>*/}
				<ChakraProvider value={theme}>
					<ColorModeProvider>
						<StrictMode>
							<Component {...pageProps} />
						</StrictMode>

						<ReactQueryDevtools initialIsOpen={false} position="bottom" />
						<Box pos="fixed" right="14" top="12">
							<ClientOnly fallback={<Skeleton h="10" rounded="md" w="10" />}>
								<ClientOnly fallback={<Skeleton h="10" rounded="md" w="10" />}>
									<ColorModeButton />
								</ClientOnly>
							</ClientOnly>
						</Box>
					</ColorModeProvider>
				</ChakraProvider>
				{/*</AppProvider>*/}
			</QueryClientProvider>
		</NextIntlClientProvider>
	);
}
