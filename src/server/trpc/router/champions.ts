import { z } from "zod";
import { getIcon, getLoading } from "../../../utils/image-urls";
import {
  getChampion,
  groupPlayerGames,
  sorting1,
  sorting2,
} from "../../common/champions/get-champion";
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

  getChampion: publicProcedure
    .input(z.object({ championId: z.number().positive() }))
    .query(async ({ ctx, input }) => {
      const champion = await getChampion(ctx.prisma, input.championId);

      if (!champion) {
        throw new Error(`Champion with id ${input.championId} not found`);
      }

      const playersBanning = await ctx.prisma.player.groupBy({
        by: ["name"],
        _count: {
          _all: true,
        },
        where: {
          playerGames: {
            some: {
              bans: {
                some: {
                  championId: input.championId,
                },
              },
            },
          },
        },
      });

      const { myPlayerGamesGrouped, opponentPlayerGamesGrouped } =
        groupPlayerGames(champion);

      playersBanning.sort(sorting1);
      myPlayerGamesGrouped.sort(sorting2);
      opponentPlayerGamesGrouped.sort(sorting2);

      return {
        ...champion,
        playersBanning,
        myPlayerGamesGrouped,
        opponentPlayerGamesGrouped,
        iconUrl: getIcon(champion.name),
        loadingUrl: getLoading(champion.name),
      };
    }),
});
