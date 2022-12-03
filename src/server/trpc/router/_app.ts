import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { playersRouter } from "./players";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  players: playersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
