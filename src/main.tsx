import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./common/i18n";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApplicationProvider } from "@/context/ApplicationContext.tsx";
import { Box, ChakraProvider, ClientOnly, Skeleton } from "@chakra-ui/react";
import { theme } from "@/components/ui/theme.ts";
import {
	ColorModeButton,
	ColorModeProvider,
} from "@/components/ui/color-mode/color-mode.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<ApplicationProvider>
			<ChakraProvider value={theme}>
				<ColorModeProvider>
					<StrictMode>
						<App />
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
		</ApplicationProvider>
	</QueryClientProvider>
);
