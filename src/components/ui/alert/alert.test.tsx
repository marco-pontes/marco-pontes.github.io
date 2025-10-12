import { screen } from "@testing-library/react";
import { render } from "@/test-utils/render.tsx";
import { Alert } from "./alert";
import { AlertType } from "@/types/types.ts";

describe("Alert", () => {
	it("renders the message as title", () => {
		render(<Alert message="Saved successfully" type={AlertType.success} />);
		expect(screen.getByText(/saved successfully/i)).toBeInTheDocument();
	});

	it("renders alert root container for error status", () => {
		const { container } = render(
			<Alert message="Something went wrong" type={AlertType.error} />
		);
		const root = container.querySelector(".chakra-alert__root");
		expect(root).toBeTruthy();
	});

	it("supports different statuses (warning)", () => {
		const { container } = render(
			<Alert message="Be careful" type={AlertType.warning} />
		);
		const root = container.querySelector(".chakra-alert__root");
		expect(root).toBeTruthy();
	});
});
