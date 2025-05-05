import { postsRouter } from "~/trpc/routes/post";
import { createTRPCRouter } from "~/trpc/trpc";

export const trpcRouter = createTRPCRouter({
	post: postsRouter,
});

export type TRPCRouter = typeof trpcRouter;
