import { isTRPCClientError } from "~/trpc/client";

export function parseError(error: Error): {
	code: number;
	message?: string;
	title: string;
} {
	if (isTRPCClientError(error)) {
		switch (error.data?.code) {
			case "NOT_FOUND":
				return {
					code: 404,
					title: "Not Found",
				};
		}

		return {
			code: error.data?.httpStatus ?? 500,
			title: "Server Error",
		};
	}

	return {
		code: 500,
		message: "An unknown error occurred.",
		title: "Unknown Error",
	};
}
