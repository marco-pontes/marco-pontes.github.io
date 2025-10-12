// Common constants for API endpoints and query keys
export const API_ENDPOINTS = {
	TODOS: (page: number, limit: number) =>
		`/v1/todos?page=${page}&limit=${limit}`,
	UPDATE_TODO: (id: number) => `/v1/todos/${id}`,
	DELETE_TODO: (id: number) => `/v1/todos/${id}`,
	DELETE_TODOS: `/v1/todos/`,
	CREATE_TODO: `/v1/todos`,
} as const;

export const QUERY_KEYS = {
	TODOS: "todos" as const,
} as const;
