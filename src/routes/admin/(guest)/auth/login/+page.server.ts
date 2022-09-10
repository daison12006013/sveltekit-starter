import { api } from '$src/routes/api';
import { redirect, type RequestEvent } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	login: async (event: RequestEvent) => {
		const form = await event.request.formData();

		const response = await api({
			method: 'post',
			resource: 'login',
			data: {
				'email': form.has('email') ? form.get('email') : undefined,
				'password': form.has('password') ? form.get('password') : undefined,
			},
			event,
		});

		if (response.status === 404) {
			return {
				body: []
			};
		}

		if (response.status >= 200 && response.status <= 299) {
			throw redirect(302, '/')
		}

		return {
			status: response.status
		};
	},
}
