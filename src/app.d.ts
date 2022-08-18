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
	grecaptcha: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		render: (d: string, t: any) => any;
	};
}
