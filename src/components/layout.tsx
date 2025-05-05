import {
	Link,
	type LinkComponentProps,
	useRouter,
} from "@tanstack/react-router";
import type { User } from "better-auth";
import type { ComponentProps, Key } from "react";
import { authClient } from "~/lib/auth-client";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

type NavigationItem = {
	key: Key;
	label: string;
	link: LinkComponentProps;
};

const guestNavigation: Array<NavigationItem> = [
	{
		key: "home",
		label: "Home",
		link: {
			to: "/",
			activeProps: { "aria-current": "page", "data-active": true },
		},
	},
];

const authNavigation: Array<NavigationItem> = [
	{
		key: "home",
		label: "Home",
		link: {
			to: "/",
			activeProps: { "aria-current": "page", "data-active": true },
		},
	},
	{
		key: "account",
		label: "Account",
		link: {
			to: "/account",
			activeProps: { "aria-current": "page", "data-active": true },
		},
	},
];

export function Layout({
	children,
	className,
	user,
	...props
}: ComponentProps<"div"> & { user: User | undefined }) {
	const router = useRouter();
	const navigation = user ? authNavigation : guestNavigation;

	return (
		<div
			className={classNames("min-h-full flex flex-col", className ?? "")}
			{...props}
		>
			<nav className="bg-gray-800">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						<div className="flex items-center">
							<div className="shrink-0">
								<img
									alt="Your Company"
									src="https://tanstack.com/favicon-32x32.png"
									className="size-8"
								/>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									{navigation.map((item) => (
										<Link
											key={item.key}
											{...item.link}
											className={classNames(
												"text-gray-300 hover:bg-gray-700 hover:text-white",
												"data-[active=true]:bg-gray-900 data-[active=true]:text-white",
												"rounded-md px-3 py-2 text-sm font-medium",
											)}
										>
											{item.label}
										</Link>
									))}
								</div>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-4 flex items-center md:ml-6">
								{/* Profile dropdown */}
								<div className="relative ml-3">
									{user ? (
										<button
											type="button"
											className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
											onClick={async () => {
												await authClient.signOut();

												router.navigate({ to: "/", reloadDocument: true });
											}}
										>
											<span className="absolute -inset-1.5" />
											<span className="sr-only">Open user menu</span>
											{user.image ? (
												<img
													alt=""
													src={user.image}
													className="size-8 rounded-full"
												/>
											) : (
												user.name
											)}
										</button>
									) : (
										<button
											type="button"
											onClick={() =>
												authClient.signIn.social({ provider: "github" })
											}
											className={classNames(
												"text-gray-300 hover:bg-gray-700 hover:text-white",
												"rounded-md px-3 py-2 text-sm font-medium",
											)}
										>
											Sign in with Github
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
			{children}
		</div>
	);
}
