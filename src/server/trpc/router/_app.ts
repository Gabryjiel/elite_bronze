import { router } from "../trpc";
import { authRouter } from "./auth";
import { championsRouter } from "./champions";
import { playersRouter } from "./players";
import { tournamentsRouter } from "./tournament";

export const appRouter = router({
  auth: authRouter,
  players: playersRouter,
  tournament: tournamentsRouter,
  champions: championsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
