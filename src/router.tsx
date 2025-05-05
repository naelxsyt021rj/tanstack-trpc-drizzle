import type { QueryClient } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query";
import { ErrorPage } from "~/components/error-page";
import { NotFound } from "~/components/not-found";
import {
	getContext as getTanstackQueryContext,
	Provider as TanstackQueryProvider,
} from "~/integrations/tanstack-query/root-provider";
import { routeTree } from "~/routeTree.gen";
import type { TRPCRouter } from "~/trpc";

export interface AppContext {
	queryClient: QueryClient;
	trpc: TRPCOptionsProxy<TRPCRouter>;
}

export function createRouter() {
	const tanstackQueryContext = getTanstackQueryContext();

	const router = routerWithQueryClient(
		createTanStackRouter({
			routeTree,
			context: {
				...tanstackQueryContext,
			},
			defaultErrorComponent: ErrorPage,
			defaultNotFoundComponent: NotFound,
			scrollRestoration: true,
			defaultPreloadStaleTime: 0,
			Wrap: (props: { children: React.ReactNode }) => {
				return <TanstackQueryProvider>{props.children}</TanstackQueryProvider>;
			},
		}),
		tanstackQueryContext.queryClient,
	);

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}
