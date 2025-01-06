// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface PrivateEnv {}
	// interface PublicEnv {}
	// interface Session {}
	// interface Stuff {}
}

interface Window {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	grecaptcha: any;
}

interface Navigator {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	connection: any;
}
