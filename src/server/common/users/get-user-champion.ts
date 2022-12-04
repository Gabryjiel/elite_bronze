import type { PrismaClient } from "@prisma/client";

export async function getUserChampion(prisma: PrismaClient, userId: number) {
  const champions = await prisma.user.findFirstOrThrow({
    select: {
      players: {
        select: {
          playerGames: {
            select: {
              champion: true,
              side: true,
              game: true,
            },
          },
        },
      },
    },
    where: {
      id: userId,
    },
  });

  type ReducedItem = {
    count: number;
    items: typeof champions.players[number]["playerGames"][number][];
    name: string;
  };

  const mapped = champions?.players
    .flatMap((item) => item.playerGames)
    .reduce((all, cur) => {
      const index = all.findIndex(
        (item) => item.name === cur.champion?.name ?? ""
      );
      const element = all[index];

      if (index !== -1 && element) {
        return [
          ...all.slice(0, index),
          ...all.slice(index + 1),
          {
            count: element.count + 1,
            name: element.name,
            items: [...element.items, cur],
          },
        ];
      } else {
        return [
          ...all,
          {
            count: 1,
            name: cur.champion?.name ?? "",
            items: [cur],
          },
        ];
      }
    }, [] as ReducedItem[])
    .map((item) => {
      const score =
        item.count +
        item.items.reduce(
          (all, cur) => all + (cur.game.winside === cur.side ? 3 : 0),
          0
        );

      return {
        ...item,
        score,
      };
    })
    .sort((a, b) => (a.score < b.score ? 1 : -1))
    .filter((item) => item.name);

  const maxScore = mapped.reduce(
    (all, cur) => (all < cur.score ? cur.score : all),
    mapped[0]?.score ?? 0
  );
  const withMaxScore = mapped.filter((item) => item.score === maxScore);
  const random = Math.floor(Math.random() * withMaxScore.length);

  return {
    name: mapped[random]?.name ?? "",
  };
}
