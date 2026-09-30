// Declarative WebMCP attributes (Chrome origin trial).
// https://developer.chrome.com/docs/ai/webmcp/declarative-api
declare module 'svelte/elements' {
	export interface HTMLFormAttributes {
		toolname?: string;
		tooldescription?: string;
	}
}

export {};
