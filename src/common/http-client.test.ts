import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Client } from "@marco-pontes/simple-fake-api/http";

describe("httpClient singleton", () => {
	beforeEach(() => {
		vi.resetModules();
	});

	it('creates a client using create("api-server") and caches it', async () => {
		const mockClient: Record<string, unknown> = { label: "client-1" };
		const createMock = vi.fn(() => mockClient as unknown as Client);

		vi.doMock("@marco-pontes/simple-fake-api/http", () => ({
			create: createMock,
		}));

		const { httpClient } = await import("./http-client");

		const c1 = httpClient();
		const c2 = httpClient();

		expect(createMock).toHaveBeenCalledTimes(1);
		expect(createMock).toHaveBeenCalledWith("api-server");
		expect(c1).toBe(mockClient);
		expect(c2).toBe(mockClient);
	});

	it("returns the cached instance on subsequent calls even after reusing the imported function in same module instance", async () => {
		const firstClient: Client = {} as Client;
		const createMock = vi.fn(() => firstClient);

		vi.doMock("@marco-pontes/simple-fake-api/http", () => ({
			create: createMock,
		}));

		const { httpClient } = await import("./http-client");

		const a = httpClient();
		const b = httpClient();

		expect(a).toBe(b);
		expect(createMock).toHaveBeenCalledTimes(1);
	});

	it("re-initializes cache when module is reloaded (module state reset)", async () => {
		const firstClient: Client = {} as Client;
		const createMock1 = vi.fn(() => firstClient);

		vi.doMock("@marco-pontes/simple-fake-api/http", () => ({
			create: createMock1,
		}));

		const module1 = await import("./http-client");
		const cFirst = module1.httpClient();
		expect(cFirst).toBe(firstClient);
		expect(createMock1).toHaveBeenCalledTimes(1);

		vi.resetModules();

		const secondClient: Client = {} as Client;
		const createMock2 = vi.fn(() => secondClient);

		vi.doMock("@marco-pontes/simple-fake-api/http", () => ({
			create: createMock2,
		}));

		const module2 = await import("./http-client");
		const cSecond = module2.httpClient();

		expect(cSecond).toBe(secondClient);
		expect(createMock2).toHaveBeenCalledTimes(1);
	});
});
