import { api } from '$src/routes/api';
import cookie, { parse } from 'cookie';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (!event.locals.user) {
		const loggedIn = await api({
			method: 'get',
			resource: 'logged-in',
			event,
		});
		event.locals.user = (await loggedIn.json()).user
	}

	const sessionName = import.meta.env.VITE_SESSION_NAME
	const cookies = cookie.parse(event.request.headers.get('cookie') || '')
	event.locals.session = cookies[sessionName]

	const response = await resolve(event)

	if (!event.locals.session) {
		const sanctum = await api({
			method: 'get',
			resource: 'sanctum/csrf-cookie',
			event,
		});

		if (sanctum.status === 204) {
			// set cookie in the client
			response.headers.set(
				'set-cookie',
				sanctum.headers.get('set-cookie')
			)
		}
	}

	return response
};

export async function getSession({ locals }) {
	return {
		user: locals.user,
	};
}
