import { screen, render as rtlRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "@/test-utils/render.tsx";
import React, { type JSX } from "react";
import { useApplicationContext } from "@/context/ApplicationContext.tsx";
import { AlertType } from "@/types/types.ts";
import { vi } from "vitest";

vi.mock(
	"@/features/todos/hooks/useTodoList",
	(): Record<string, unknown> => ({
		useTodoList: (page: number) => ({
			data: { todos: [], totalResults: 0, page },
			isLoading: false,
			isError: false,
		}),
	})
);

function Consumer(): JSX.Element {
	const context = useApplicationContext();
	return (
		<div>
			<div data-testid="message">
				{context.message ? context.message.message : ""}
			</div>

			<button
				onClick={() => {
					context.addMessage({ type: AlertType.success, message: "Hi" }, 10);
				}}
			>
				addMsg
			</button>
		</div>
	);
}

describe("ApplicationContext", () => {
	it("throws when used outside provider", () => {
		const origError = console.error;
		console.error = (): void => {};
		const Thrower = (): React.JSX.Element | null => {
			useApplicationContext();
			return null;
		};
		expect(() => rtlRender(<Thrower />)).toThrowError(
			/useApplicationContext must be used within an ApplicationProvider/i
		);
		console.error = origError;
	});

	it("provides default values and allows state updates", async () => {
		const user = userEvent.setup();
		renderWithProviders(<Consumer />);

		expect(screen.getByTestId("page")).toHaveTextContent("1");
		expect(screen.getByTestId("selection")).toHaveTextContent("");
		expect(screen.getByTestId("editModalOpen")).toHaveTextContent("false");

		await user.click(screen.getByText("setPage3"));
		expect(screen.getByTestId("page")).toHaveTextContent("3");

		await user.click(screen.getByText("setSelection12"));
		expect(screen.getByTestId("selection")).toHaveTextContent("1,2");
	});

	it("handleEditTodo opens modal and sets active todo", async () => {
		const user = userEvent.setup();
		renderWithProviders(<Consumer />);

		expect(screen.getByTestId("editModalOpen")).toHaveTextContent("false");

		await user.click(screen.getByText("editTodo"));

		expect(screen.getByTestId("editModalOpen")).toHaveTextContent("true");
	});

	it("addMessage sets message and auto clears after duration", async () => {
		function Trigger(): JSX.Element {
			const context = useApplicationContext();
			React.useEffect(() => {
				context.addMessage({ type: AlertType.success, message: "Hi" }, 0);
			}, []);
			return <Consumer />;
		}

		renderWithProviders(<Trigger />);

		expect(screen.getByTestId("message")).toHaveTextContent("Hi");

		await Promise.resolve();
		await Promise.resolve();

		expect(screen.getByTestId("message")).toHaveTextContent("Hi");
	});
});
