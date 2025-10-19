import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";
import "@testing-library/jest-dom";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
	cleanup();
});

vi.stubGlobal("ResizeObserver", ResizeObserver);

window["ResizeObserver"] = ResizeObserver;

const IntersectionObserverMock = vi.fn(() => ({
	disconnect: vi.fn(),
	observe: vi.fn(),
	takeRecords: vi.fn(),
	unobserve: vi.fn(),
}));
vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
// @ts-expect-error jsdom global
window["IntersectionObserver"] = IntersectionObserverMock;

window.Element.prototype.scrollTo = () => {};

window.Element.prototype.scrollIntoView = () => {};

window.requestAnimationFrame = (cb) => setTimeout(cb, 1000 / 60);

window.URL.createObjectURL = () => "https://i.pravatar.cc/300";

window.URL.revokeObjectURL = () => {};

Object.defineProperty(window, "navigator", {
	value: {
		clipboard: {
			writeText: vi.fn(),
		},
	},
});
