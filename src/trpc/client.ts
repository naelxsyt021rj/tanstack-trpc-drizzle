import { TRPCClientError } from "@trpc/client";
import { createTRPCContext } from "@trpc/tanstack-react-query";
import type { TRPCRouter } from "~/trpc";

export const { TRPCProvider, useTRPC } = createTRPCContext<TRPCRouter>();

export type ApiError = TRPCClientError<TRPCRouter>;

export function isTRPCClientError(cause: unknown): cause is ApiError {
	return cause instanceof TRPCClientError;
}
