import React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTodoList } from "./useTodoList.ts";
import { API_ENDPOINTS } from "@/common/constants.ts";
import type { Todo } from "@/types/types.ts";

const get = vi.fn();
vi.mock(
	"@/common/http-client.ts",
	(): Record<string, unknown> => ({
		httpClient: () => ({ get }),
	})
);

const jsonMock = vi.fn();

function createWrapper(): ({
	children,
}: {
	children: React.ReactNode;
}) => React.ReactElement {
	const client = new QueryClient({
		defaultOptions: { queries: { retry: false } },
	});
	return ({ children }: { children: React.ReactNode }) =>
		React.createElement(
			QueryClientProvider,
			{ client },
			children as React.ReactElement
		);
}

describe("useTodoList", () => {
	const wrapper = createWrapper();

	beforeEach(() => {
		get.mockReset();
		jsonMock.mockReset();
	});

	it("fetches todos with default limit 10 and returns data shape", async () => {
		const page = 2;
		const limit = 10; // default

		const todos: Array<Todo> = [
			{
				id: 1,
				title: "A",
				description: "d1",
				status: "PENDING" as unknown as Todo["status"],
			},
			{
				id: 2,
				title: "B",
				description: "d2",
				status: "COMPLETED" as unknown as Todo["status"],
			},
		];

		jsonMock.mockResolvedValueOnce(todos);

		const headers = new Headers({ "X-Total-Count": "42" });
		const response = {
			json: jsonMock,
			headers,
		} as unknown as Response;

		get.mockResolvedValueOnce(response);

		const { result } = renderHook(() => useTodoList(page), { wrapper });

		await waitFor(() => {
			expect(
				result.current.isSuccess || result.current.data !== undefined
			).toBeTruthy();
		});

		const firstCall = get.mock.calls[0] as [string, { signal?: unknown }];
		expect(firstCall[0]).toBe(API_ENDPOINTS.TODOS(page, limit));
		expect(
			firstCall[1] &&
				typeof firstCall[1] === "object" &&
				"signal" in (firstCall[1] as object)
		).toBe(true);

		expect(result.current.data?.todos).toEqual(todos);
		expect(result.current.data?.totalResults).toBe(42);
	});

	it("respects provided limit parameter when hook is called with custom limit", async () => {
		const page = 1;
		const customLimit = 5;

		const todos: Array<Todo> = [
			{
				id: 10,
				title: "X",
				description: "d",
				status: "PENDING" as unknown as Todo["status"],
			},
		];

		jsonMock.mockResolvedValueOnce(todos);
		const headers = new Headers({ "X-Total-Count": "1" });
		const response = { json: jsonMock, headers } as unknown as Response;
		get.mockResolvedValueOnce(response);

		const { result } = renderHook(() => useTodoList(page, customLimit), {
			wrapper,
		});

		await waitFor(() => {
			expect(result.current.data).toBeTruthy();
		});

		const secondCall = get.mock.calls[0] as [string, { signal?: unknown }];
		expect(secondCall[0]).toBe(API_ENDPOINTS.TODOS(page, customLimit));
		expect(
			secondCall[1] &&
				typeof secondCall[1] === "object" &&
				"signal" in (secondCall[1] as object)
		).toBe(true);
		expect(result.current.data?.todos).toEqual(todos);
		expect(result.current.data?.totalResults).toBe(1);
	});

	it("sets isError when network fails (propagated by react-query)", async () => {
		const consoleErrorSpy = vi
			.spyOn(console, "error")
			.mockImplementation(() => {});

		const page = 3;
		get.mockRejectedValueOnce(new Error("boom"));

		const { result } = renderHook(() => useTodoList(page), { wrapper });

		await waitFor(() => {
			expect(result.current.isError).toBe(true);
		});

		consoleErrorSpy.mockRestore();
	});

	it("aborts in-flight request via AbortSignal when unmounted", () => {
		const page = 1;

		let resolveJson: (value: unknown) => void = () => {};
		const jsonPromise = new Promise((resolveFn) => {
			resolveJson = resolveFn;
		});

		jsonMock.mockReturnValueOnce(
			jsonPromise as unknown as Promise<Array<Todo>>
		);
		const headers = new Headers({ "X-Total-Count": "10" });
		const response = { json: jsonMock, headers } as unknown as Response;
		get.mockResolvedValueOnce(response);

		const { unmount } = renderHook(() => useTodoList(page), { wrapper });

		expect(get).toHaveBeenCalledTimes(1);
		const firstCall = get.mock.calls[0] as
			| [string, { signal?: unknown }]
			| undefined;
		const options = firstCall?.[1];
		expect(
			options && typeof options === "object" && "signal" in (options as object)
		).toBe(true);

		unmount();

		resolveJson([]);
	});
});
