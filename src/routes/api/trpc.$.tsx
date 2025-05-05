import { createAPIFileRoute } from "@tanstack/react-start/api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { trpcRouter } from "~/trpc/index";
import { createContext } from "~/trpc/trpc";

function handler({ request }: { request: Request }) {
	return fetchRequestHandler({
		req: request,
		router: trpcRouter,
		endpoint: "/api/trpc",
		createContext: async (opts) => {
			return createContext({
				...opts,
				req: request,
				res: undefined,
			});
		},
	});
}

export const APIRoute = createAPIFileRoute("/api/trpc/$")({
	GET: handler,
	POST: handler,
});
