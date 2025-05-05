import type { QueryClient } from "@tanstack/react-query";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";
import { auth } from "~/lib/auth";
import { authClient } from "~/lib/auth-client";

export const getSession = createIsomorphicFn()
	.client(async (queryCLient: QueryClient) => {
		const { data: session } = await queryCLient.ensureQueryData({
			queryFn: () => authClient.getSession(),
			queryKey: ["auth", "session"],
			staleTime: 60_000,
			revalidateIfStale: true, // fetch in background when stale
		});

		return {
			session,
		};
	})
	.server(async (_) => {
		const request = getWebRequest();

		const session = await auth.api.getSession({
			headers: (request?.headers as Headers) ?? {},
		});

		return {
			session,
		};
	});
