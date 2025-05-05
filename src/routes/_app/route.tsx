import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { Layout } from "~/components/layout";
import { getSession } from "~/functions/get-session";

export const Route = createFileRoute("/_app")({
	component: RouteComponent,
	beforeLoad: async ({ context, preload }) => {
		// if (preload) {
		// 	return;
		// }

		const { session } = await getSession(context.queryClient);

		if (!session) {
			throw redirect({
				to: "/",
			});
		}

		return {
			session,
		};
	},
});

function RouteComponent() {
	const { session } = Route.useRouteContext();

	return (
		<Layout user={session?.user}>
			<Outlet />
		</Layout>
	);
}
