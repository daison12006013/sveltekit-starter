import type { Handle } from '@sveltejs/kit';

// since we want to simulate a FAKE log out
// inside this hooks, we will do nothing!
export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event)
	return response
};
