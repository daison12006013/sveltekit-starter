import { api } from '$src/routes/_api';
import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie'

export const get: RequestHandler = async (event) => {
	const response = await api({
		method: 'get',
		resource: 'logout',
		data: null,
		event,
	});

	if (response.status === 404) {
		return {
			body: []
		};
	}

	if (response.status >= 200 && response.status <= 299) {
		return {
			status: 302,
			headers: {
				location: import.meta.env.VITE_LOGIN_PATH,
				'set-cookie': cookie.serialize(import.meta.env.VITE_SESSION_NAME, '', {
					path: "/",
					maxAge: -1,
				}),
			},
		};
	}

	return {
		status: response.status,
	};
};
