import type { Prisma, PrismaClient } from "@prisma/client";

export async function getChampion(prisma: PrismaClient, championId: number) {
  return prisma.champion.findFirst({
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
      playerGames: {
        include: {
          player: true,
          game: {
            include: {
              playerGames: true,
            },
          },
        },
      },
    },
    where: {
      id: championId,
    },
  });
}

type CustomChampion = NonNullable<Awaited<ReturnType<typeof getChampion>>>;

export function groupPlayerGames(playerGames: CustomChampion) {
  const { myPlayerGames, opponentPlayerGames } = playerGames.playerGames.reduce(
    (all, cur) => {
      if (cur.game.playerGames[0]?.playerId === cur.playerId) {
        return { ...all, myPlayerGames: all.myPlayerGames.concat([cur]) };
      } else {
        return {
          ...all,
          opponentPlayerGames: all.opponentPlayerGames.concat([cur]),
        };
      }
    },
    {
      myPlayerGames: new Array<CustomChampion["playerGames"][number]>(),
      opponentPlayerGames: new Array<CustomChampion["playerGames"][number]>(),
    }
  );

  const myPlayerGamesGrouped = Object.values(
    myPlayerGames.reduce((all, cur) => {
      if (!cur.player.name) {
        return all;
      }

      return {
        ...all,
        [cur.player.name]: {
          name: cur.player.name,
          count: (all[cur.player.name]?.count ?? 0) + 1,
        },
      };
    }, {} as Record<string, { name: string; count: number }>)
  ).sort(sorting2);

  const opponentPlayerGamesGrouped = Object.values(
    opponentPlayerGames.reduce((all, cur) => {
      if (!cur.player.name) {
        return all;
      }

      return {
        ...all,
        [cur.player.name]: {
          name: cur.player.name,
          count: (all[cur.player.name]?.count ?? 0) + 1,
        },
      };
    }, {} as Record<string, { name: string; count: number }>)
  ).sort(sorting2);

  return { myPlayerGamesGrouped, opponentPlayerGamesGrouped };
}

type SortPlayers = Prisma.PickArray<
  Prisma.PlayerGroupByOutputType,
  "name"[]
> & {
  _count: {
    _all: number;
  };
};

type SortPlayers2 = {
  name: string;
  count: number;
};

export function sorting1(a: SortPlayers, b: SortPlayers) {
  return a._count._all === b._count._all
    ? (a.name ?? "") > (b.name ?? "")
      ? 1
      : -1
    : a._count._all < b._count._all
    ? 1
    : -1;
}

export function sorting2(a: SortPlayers2, b: SortPlayers2) {
  return a.count === b.count
    ? (a.name ?? "") > (b.name ?? "")
      ? 1
      : -1
    : a.count < b.count
    ? 1
    : -1;
}

export function getProperties(champion: CustomChampion) {
  const picks = champion.playerGames.length;
  const bans = champion.bans.length;
  const wins = champion.playerGames.filter(
    (pg) => pg.side === pg.game.winside
  ).length;
  const loses = champion.playerGames.filter(
    (pg) => pg.side !== pg.game.winside
  ).length;
  const winratio = ((wins * 100) / picks).toFixed(2) + " %";
  const avgCs = champion.playerGames
    .filter((pg) => pg.cs)
    .reduce(
      (all, cur, _idx, array) => (cur.cs ? all + cur.cs / array.length : all),
      0
    )
    .toFixed(2);

  const blueSide = {
    picks: champion.playerGames.filter((pg) => pg.side === "BLUE").length,
    wins: champion.playerGames.filter(
      (pg) => pg.side === "BLUE" && pg.side === pg.game.winside
    ).length,
    loses: champion.playerGames.filter(
      (pg) => pg.side === "BLUE" && pg.side !== pg.game.winside
    ).length,
  };

  const redSide = {
    picks: champion.playerGames.filter((pg) => pg.side === "RED").length,
    wins: champion.playerGames.filter(
      (pg) => pg.side === "RED" && pg.side === pg.game.winside
    ).length,
    loses: champion.playerGames.filter(
      (pg) => pg.side === "RED" && pg.side !== pg.game.winside
    ).length,
  };

  return {
    general: {
      picks,
      bans,
      wins,
      loses,
      winratio,
      avgCs,
    },
    blueSide,
    redSide,
  };
}
