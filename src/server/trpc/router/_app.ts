import { router } from "../trpc";
import { authRouter } from "./auth";
import { playersRouter } from "./players";
import { tournamentsRouter } from "./tournament";

export const appRouter = router({
  auth: authRouter,
  players: playersRouter,
  tournament: tournamentsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
