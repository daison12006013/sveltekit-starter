import { api } from '$src/routes/api';
import type { RequestHandler } from '@sveltejs/kit';
import cookie from 'cookie'

export const post: RequestHandler = async (event) => {
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
		return {
			status: 302,
			headers: {
				location: '/',
			},
		};
	}

	return {
		status: response.status
	};
};
