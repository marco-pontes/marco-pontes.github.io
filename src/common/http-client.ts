import { type Client, create } from "@vivid-front/http";

// Singleton client instance
let cachedClient: Client | null = null;

export const httpClient = (): Client => {
	if (cachedClient) return cachedClient;
	cachedClient = create("api-server");
	return cachedClient;
};
