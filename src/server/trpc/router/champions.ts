import { z } from "zod";
import { getIcon } from "../../../utils/image-urls";
import { publicProcedure, router } from "../trpc";

export const championsRouter = router({
  getChampions: publicProcedure
    .input(z.object({ search: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      const champions = await ctx.prisma.champion.findMany({
        where: {
          name: {
            contains: input.search,
            mode: "insensitive",
          },
        },
        orderBy: {
          name: "asc",
        },
      });

      return champions.map((champion) => {
        return {
          ...champion,
          iconUrl: getIcon(champion.name),
        };
      });
    }),
});
