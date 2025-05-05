import {
	type ErrorComponentProps,
	Link,
	rootRouteId,
	useMatch,
	useRouter,
} from "@tanstack/react-router";
import { parseError } from "~/lib/errors";

export function ErrorPage({ error }: ErrorComponentProps) {
	const router = useRouter();
	const isRoot = useMatch({
		strict: false,
		select: (state) => state.id === rootRouteId,
	});

	const { code, message, title } = parseError(error);

	return (
		<main className="grid flex-1 place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div className="text-center">
				<p className="text-base font-semibold text-gray-600">{code}</p>
				<h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
					{title}
				</h1>
				<p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
					{message}
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					{isRoot ? (
						<Link to="/" className="text-sm font-semibold text-gray-900">
							<span aria-hidden="true">&larr;</span> Home
						</Link>
					) : (
						<Link
							to="/"
							className="text-sm font-semibold text-gray-900"
							onClick={(e) => {
								e.preventDefault();
								window.history.back();
							}}
						>
							<span aria-hidden="true">&larr;</span> Go Back
						</Link>
					)}
					<button
						onClick={() => {
							router.invalidate();
						}}
						type="button"
						className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
					>
						Retry
					</button>
				</div>
			</div>
		</main>
	);
}
