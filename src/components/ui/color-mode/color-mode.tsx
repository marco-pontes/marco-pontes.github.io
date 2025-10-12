"use client";

import {
	type IconButtonProps,
	ClientOnly,
	IconButton,
	Skeleton,
} from "@chakra-ui/react";
import { ThemeProvider, useTheme, type ThemeProviderProps } from "next-themes";
import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import type { JSX } from "react";

export type ColorModeProviderProps = ThemeProviderProps;

export function ColorModeProvider(props: ColorModeProviderProps): JSX.Element {
	return (
		<ThemeProvider disableTransitionOnChange attribute="class" {...props} />
	);
}

export type ColorMode = "light" | "dark";

export interface UseColorModeReturn {
	colorMode: ColorMode;
	setColorMode: (colorMode: ColorMode) => void;
	toggleColorMode: () => void;
}

export function useColorMode(): UseColorModeReturn {
	const { resolvedTheme, setTheme, forcedTheme } = useTheme();
	const colorMode = forcedTheme || resolvedTheme;
	const toggleColorMode = (): void => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	};
	return {
		colorMode: colorMode as ColorMode,
		setColorMode: setTheme,
		toggleColorMode,
	};
}

export function ColorModeIcon(): JSX.Element {
	const { colorMode } = useColorMode();
	return colorMode === "dark" ? <LuMoon /> : <LuSun />;
}

type ColorModeButtonProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeButton = React.forwardRef<
	HTMLButtonElement,
	ColorModeButtonProps
>(function ColorModeButton(props, ref) {
	const { toggleColorMode } = useColorMode();
	return (
		<ClientOnly fallback={<Skeleton boxSize="8" />}>
			<IconButton
				ref={ref}
				aria-label="Toggle color mode"
				size="sm"
				variant="ghost"
				onClick={toggleColorMode}
				{...props}
				css={{
					_icon: {
						width: "5",
						height: "5",
					},
				}}
			>
				<ColorModeIcon />
			</IconButton>
		</ClientOnly>
	);
});
