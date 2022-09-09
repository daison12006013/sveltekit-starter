import type { RequestEvent } from "@sveltejs/kit";

interface ApiParams {
	method: string;
	event?: RequestEvent;
	resource?: string;
	data?: Record<string, unknown> | null;
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
			'cookie': params?.event?.request?.headers?.get('cookie') as string,
		},
		body: params.data && JSON.stringify(params.data),
	})

	return response;
}
