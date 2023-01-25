import { z } from "zod";
import { getIcon, getLoading } from "../../../utils/image-urls";
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
      const champion = await ctx.prisma.champion.findFirst({
        include: {
          bans: {
            include: {
              playerMatch: {
                include: {
                  player: true,
                },
              },
            },
          },
          playerGames: true,
        },
        where: {
          id: input.championId,
        },
      });

      if (!champion) {
        return null;
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

      const playersPlaying = await ctx.prisma.player.groupBy({
        by: ["name"],
        _count: {
          _all: true,
        },
        where: {
          playerGames: {
            some: {
              championId: input.championId,
            },
          },
        },
      });

      playersBanning.sort((a, b) =>
        a._count._all === b._count._all
          ? (a.name ?? "") > (b.name ?? "")
            ? 1
            : -1
          : a._count._all < b._count._all
          ? 1
          : -1
      );
      playersPlaying.sort((a, b) =>
        a._count._all === b._count._all
          ? (a.name ?? "") > (b.name ?? "")
            ? 1
            : -1
          : a._count._all < b._count._all
          ? 1
          : -1
      );

      return {
        ...champion,
        playersBanning,
        playersPlaying,
        iconUrl: getIcon(champion.name),
        loadingUrl: getLoading(champion.name),
      };
    }),
});
