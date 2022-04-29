import type { RequestEvent } from "@sveltejs/kit/types/internal";

interface ApiParams {
	method: string;
	event?: RequestEvent<Record<string, string>>;
	resource?: string;
	data?: Record<string, unknown>;
}

export async function api(params: ApiParams) {
	const base = import.meta.env.VITE_BASE_API
	let fullurl = base

	if (params.resource) {
		fullurl = `${base}/${params.resource}`
	}

	const response = await fetch(fullurl, {
		method: params.method,
		headers: {
			'content-type': 'application/json',
			'accept': 'application/json',
			'cookie': params.event.request.headers.get('cookie'),
		},
		body: params.data && JSON.stringify(params.data),
	})

	return response;
}
