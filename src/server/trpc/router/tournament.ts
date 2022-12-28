import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const tournamentsRouter = router({
  getTournament: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const tournament = await ctx.prisma.tournament.findFirst({
        where: {
          id: input.id,
        },
      });

      return tournament;
    }),
});
