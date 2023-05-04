// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}

		interface Locals {
			// sveltekit default
			userid: string;

			// laravel sanctum
			user: any;
			session: string;
		}

		interface Session {
			// laravel sanctum
			user: any;
		}

		// interface PageData {}
		// interface Platform {}
	}
}

export { };
