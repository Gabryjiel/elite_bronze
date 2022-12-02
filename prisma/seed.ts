import { tournaments } from './data/tournaments';
import { champions } from './data/champions';
import { users } from './data/users';
import { matches } from './data/matches';
import { playerGames } from './data/playerGames';
import { players } from './data/players';
import { bans } from './data/bans';
import { PrismaClient } from '@prisma/client';
import { games } from './data/games';

const prisma = new PrismaClient();

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });

async function main() {
  // await resetDb();

  await prisma.tournament.createMany({
    data: Object.values(tournaments).map((tournament) => {
      return {
        name: tournament.name,
        description: null,
        startDate: tournament.startDate,
        endDate: tournament.endDate,
      };
    }),
  });

  await prisma.champion.createMany({
    data: Object.values(champions),
  });

  await prisma.user.createMany({
    data: Object.values(users),
  });

  await prisma.player.createMany({
    data: Object.values(players),
  });

  await prisma.match.createMany({
    data: Object.values(matches),
  });

  await prisma.game.createMany({
    data: Object.values(games),
  })

  await prisma.playerGame.createMany({
    data: Object.values(playerGames),
  });

  await prisma.ban.createMany({
    data: Object.values(bans),
  });
}

// const Sequences = {
//   bans: 'bans_ban_id_seq',
//   champions: 'champions_cha_id_seq',
//   games: 'games_gam_id_seq',
//   matches: 'matches_mat_id_seq',
//   tournaments: 'tournaments_tou_id_seq',
//   playerMatches: 'players_games_plg_id_seq',
//   players: 'players_pla_id_seq',
//   users: 'users_usr_id_seq',
// };

// async function clearSequences() {
//   for (const name in Sequences) {
//     const key = name as keyof typeof Sequences;
//     const sequence = Sequences[key];

//     if (!sequence) {
//       return;
//     }

//     await prisma.$executeRawUnsafe(`ALTER SEQUENCE ${sequence} RESTART;`);
//   }
// }

// function deleteFromTable(tableName: string) {
//   return prisma.$executeRawUnsafe(`DELETE FROM ${tableName};`);
// }

// async function deleteRecords() {
//   const order = [
//     'bans',
//     'players_games',
//     'matches',
//     'games',
//     'champions',
//     'players',
//     'tournaments',
//     'users',
//   ];

//   for (const table of order) {
//     await deleteFromTable(table);
//   }
// }

// export async function resetDb() {
//   await deleteRecords();
//   await clearSequences();

//   return true;
// }
