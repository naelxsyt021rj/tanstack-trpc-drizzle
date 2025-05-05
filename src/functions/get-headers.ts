import { createIsomorphicFn } from "@tanstack/react-start";

export const getIsomorphicHeaders = createIsomorphicFn()
	.server(async () => {
		const { getHeaders } = await import("@tanstack/react-start/server");
		const headers = getHeaders();

		return headers;
	})
	.client(async () => {
		// we return an empty headers object on the client
		// we already include cookies on the client
		return {} as Headers;
	});
