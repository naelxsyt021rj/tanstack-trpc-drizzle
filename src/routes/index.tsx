import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "~/components/layout";
import { getSession } from "~/functions/get-session";
import { useTRPC } from "~/trpc/client";

export const Route = createFileRoute("/")({
	component: RouteComponent,
	loader: async ({ context }) => {
		const [{ session }] = await Promise.all([
			getSession(context.queryClient),
			context.queryClient.ensureQueryData(
				context.trpc.post.postList.queryOptions(),
			),
		]);

		return {
			session,
		};
	},
});

function RouteComponent() {
	const { session } = Route.useLoaderData();

	const trpc = useTRPC();
	const { data: posts } = useSuspenseQuery(trpc.post.postList.queryOptions());

	return (
		<Layout user={session?.user}>
			<header className="bg-white shadow-sm">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">
						Home
					</h1>
				</div>
			</header>
			<main>
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					<ul className="divide-y divide-gray-400 bg-white rounded overflow-hidden">
						{posts.map((post) => (
							<li
								key={post.id}
								className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 px-4 py-5 sm:flex-nowrap"
							>
								<div>
									<p className="text-sm/6 font-semibold text-gray-900">
										<Link
											to="/post/$postId"
											params={{ postId: post.id }}
											className="hover:underline"
										>
											{post.title}
										</Link>
									</p>
									<div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
										<p>
											{post.createdAt && (
												<time dateTime={post.createdAt}>{post.createdAt}</time>
											)}
										</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</main>
		</Layout>
	);
}
