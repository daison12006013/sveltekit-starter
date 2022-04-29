/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
	interface Locals {
		// sveltekit default
		userid: string;

		// laravel sanctum
		user: any;
		session: string;
	}

	interface Platform { }

	interface Session {
		// laravel sanctum
		user: any;
	}

	interface Stuff { }
}
