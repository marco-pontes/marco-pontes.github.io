import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { API_ENDPOINTS, QUERY_KEYS } from "@/common/constants.ts";
import { httpClient } from "@/common/http-client.ts";
import type { FetchResponse, Todo } from "@/types/types.ts";

async function fetchTodos(
	page: number,
	limit: number,
	signal?: AbortSignal
): Promise<FetchResponse> {
	const api = httpClient();
	const response: Response = await api.get(API_ENDPOINTS.TODOS(page, limit), {
		signal,
	});
	const jsonResponse = (await response.json()) as Array<Todo>;
	const total = response.headers.get("X-Total-Count") || "10";
	return {
		todos: jsonResponse,
		totalResults: +total,
	};
}

export function useTodoList(
	page: number,
	limit = 10
): UseQueryResult<FetchResponse> {
	return useQuery<FetchResponse>({
		queryKey: [QUERY_KEYS.TODOS, page],

		queryFn: ({ signal }) => fetchTodos(page, limit, signal),
	});
}
