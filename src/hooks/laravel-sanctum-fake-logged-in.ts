import cookie, { parse } from 'cookie';
import type { Handle } from '@sveltejs/kit';

// inside laravel-sanctum.ts
// -> we're actually fetching the user who logged in
// -> as well fetching a new session if the cookie is not present
export const handle: Handle = async ({ event, resolve }) => {
	if (!event.locals.user) {
		event.locals.user = {
			id: 1,
			email: "janedoe@email.com",
			photo: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82",
			first_name: "Jane",
			last_name: "Doe",
		}
	}

	const sessionName = import.meta.env.VITE_SESSION_NAME
	const cookies = cookie.parse(event.request.headers.get('cookie') || '')
	event.locals.session = cookies[sessionName]

	const response = await resolve(event)

	if (!event.locals.session) {
		// set cookie in the client
		response.headers.set(
			'set-cookie',
			cookie.serialize(import.meta.env.VITE_SESSION_NAME, "this-is-a-fake-session")
		)
	}

	return response
};

export async function getSession({ locals }) {
	return {
		user: locals.user,
	};
}
