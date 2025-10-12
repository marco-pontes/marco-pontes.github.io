import { type Client, create } from "@marco-pontes/simple-fake-api/http";

// Singleton client instance
let cachedClient: Client | null = null;

export const httpClient = (): Client => {
	if (cachedClient) return cachedClient;
	cachedClient = create("api-server");
	return cachedClient;
};
