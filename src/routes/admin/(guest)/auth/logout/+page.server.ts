import { api } from '$src/routes/api';
import { redirect, type RequestEvent } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import cookie from 'cookie'

export const actions: Actions = {
	logout: async (event: RequestEvent) => {
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
			event.cookies.delete(import.meta.env.VITE_SESSION_NAME)

			throw redirect(302, import.meta.env.VITE_LOGIN_PATH)

			// return {
			// 	status: 302,
			// 	headers: {
			// 		location: import.meta.env.VITE_LOGIN_PATH,
			// 		'set-cookie': cookie.serialize(import.meta.env.VITE_SESSION_NAME, '', {
			// 			path: "/",
			// 			maxAge: -1,
			// 		}),
			// 	},
			// };
		}

		return {
			status: response.status,
		};
	},
}
