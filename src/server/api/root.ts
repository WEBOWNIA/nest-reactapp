import { homeRouter } from "Y/server/api/routers/editusers";
import { homeTRPCRouter } from "Y/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = homeTRPCRouter({
  home: homeRouter,
});


// export type definition of API
export type AppRouter = typeof appRouter;

export type editusersRouter = typeof appRouter;
