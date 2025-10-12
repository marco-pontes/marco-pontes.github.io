import { screen } from "@testing-library/react";
import { render } from "@/test-utils/render.tsx";
import userEvent from "@testing-library/user-event";
import { ColorModeButton, ColorModeIcon } from "./color-mode.tsx";

describe("Color Mode UI", () => {
	it("renders ColorModeIcon (SVG present)", () => {
		const { container } = render(<ColorModeIcon />);
		const svg = container.querySelector("svg");
		expect(svg).toBeTruthy();
	});

	it("renders ColorModeButton with accessible label", () => {
		render(<ColorModeButton />);
		const button = screen.getByRole("button", { name: /toggle color mode/i });
		expect(button).toBeInTheDocument();
	});

	it("clicking ColorModeButton works without errors", async () => {
		const user = userEvent.setup();
		render(<ColorModeButton />);
		const button = screen.getByRole("button", { name: /toggle color mode/i });
		expect(button).toBeEnabled();
		await user.click(button);
		expect(button).toBeInTheDocument();
	});
});
