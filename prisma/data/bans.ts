import type { Prisma } from '@prisma/client';
import { getChampionId } from './champions';
import { getPlayerGameId } from './playerGames';

type CreateBanObject = Omit<Prisma.BanUncheckedCreateInput, 'id'>;

export const bans = {
  '2t-BorekKB-pyther-1': {
    championId: getChampionId('ekko'),
    playerMatchId: getPlayerGameId('2t-BorekKB-pyther'),
  },
  '2t-BorekKB-pyther-2': {
    championId: getChampionId('graves'),
    playerMatchId: getPlayerGameId('2t-BorekKB-pyther'),
  },
  '2t-BorekKB-pyther-3': {
    championId: getChampionId('lee_sin'),
    playerMatchId: getPlayerGameId('2t-BorekKB-pyther'),
  },
  '2t-pyther-BorekKB-1': {
    championId: getChampionId('fiora'),
    playerMatchId: getPlayerGameId('2t-pyther-BorekKB'),
  },
  '2t-pyther-BorekKB-2': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('2t-pyther-BorekKB'),
  },
  '2t-pyther-BorekKB-3': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('2t-pyther-BorekKB'),
  },

  '2t-Kertoip-Kristron-1': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('2t-Kertoip-Kristron'),
  },
  '2t-Kertoip-Kristron-2': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('2t-Kertoip-Kristron'),
  },
  '2t-Kertoip-Kristron-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('2t-Kertoip-Kristron'),
  },
  '2t-Kristron-Kertoip-1': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('2t-Kristron-Kertoip'),
  },
  '2t-Kristron-Kertoip-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('2t-Kristron-Kertoip'),
  },
  '2t-Kristron-Kertoip-3': {
    championId: getChampionId('gangplank'),
    playerMatchId: getPlayerGameId('2t-Kristron-Kertoip'),
  },

  '2t-575vmvac-klucex14-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('2t-575vmvac-klucex14'),
  },
  '2t-575vmvac-klucex14-2': {
    championId: getChampionId('jinx'),
    playerMatchId: getPlayerGameId('2t-575vmvac-klucex14'),
  },
  '2t-575vmvac-klucex14-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('2t-575vmvac-klucex14'),
  },
  '2t-klucex14-575vmvac-1': {
    championId: getChampionId('vayne'),
    playerMatchId: getPlayerGameId('2t-klucex14-575vmvac'),
  },
  '2t-klucex14-575vmvac-2': {
    championId: getChampionId('diana'),
    playerMatchId: getPlayerGameId('2t-klucex14-575vmvac'),
  },
  '2t-klucex14-575vmvac-3': {
    championId: getChampionId('wukong'),
    playerMatchId: getPlayerGameId('2t-klucex14-575vmvac'),
  },

  '2t-Élenath-Dymitriad-1': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('2t-Élenath-Dymitriad'),
  },
  '2t-Élenath-Dymitriad-2': {
    championId: getChampionId('heimerdinger'),
    playerMatchId: getPlayerGameId('2t-Élenath-Dymitriad'),
  },
  '2t-Élenath-Dymitriad-3': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('2t-Élenath-Dymitriad'),
  },
  '2t-Dymitriad-Élenath-1': {
    championId: getChampionId('velkoz'),
    playerMatchId: getPlayerGameId('2t-Dymitriad-Élenath'),
  },
  '2t-Dymitriad-Élenath-2': {
    championId: getChampionId('diana'),
    playerMatchId: getPlayerGameId('2t-Dymitriad-Élenath'),
  },
  '2t-Dymitriad-Élenath-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('2t-Dymitriad-Élenath'),
  },

  '2t-Skomer-Fefurusek-1': {
    championId: getChampionId('sion'),
    playerMatchId: getPlayerGameId('2t-Skomer-Fefurusek'),
  },
  '2t-Skomer-Fefurusek-2': {
    championId: getChampionId('tryndamere'),
    playerMatchId: getPlayerGameId('2t-Skomer-Fefurusek'),
  },
  '2t-Skomer-Fefurusek-3': {
    championId: getChampionId('master_yi'),
    playerMatchId: getPlayerGameId('2t-Skomer-Fefurusek'),
  },
  '2t-Fefurusek-Skomer-1': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('2t-Fefurusek-Skomer'),
  },
  '2t-Fefurusek-Skomer-2': {
    championId: getChampionId('anivia'),
    playerMatchId: getPlayerGameId('2t-Fefurusek-Skomer'),
  },
  '2t-Fefurusek-Skomer-3': {
    championId: getChampionId('cassiopeia'),
    playerMatchId: getPlayerGameId('2t-Fefurusek-Skomer'),
  },

  '2t-Sznifferek-Aetren-1': {
    championId: getChampionId('quinn'),
    playerMatchId: getPlayerGameId('2t-Sznifferek-Aetren'),
  },
  '2t-Sznifferek-Aetren-2': {
    championId: getChampionId('corki'),
    playerMatchId: getPlayerGameId('2t-Sznifferek-Aetren'),
  },
  '2t-Sznifferek-Aetren-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('2t-Sznifferek-Aetren'),
  },
  '2t-Aetren-Sznifferek-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('2t-Aetren-Sznifferek'),
  },
  '2t-Aetren-Sznifferek-2': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('2t-Aetren-Sznifferek'),
  },
  '2t-Aetren-Sznifferek-3': {
    championId: getChampionId('vayne'),
    playerMatchId: getPlayerGameId('2t-Aetren-Sznifferek'),
  },

  '2t-BorekKB-Kertoip-1': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('2t-BorekKB-Kertoip'),
  },
  '2t-BorekKB-Kertoip-2': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('2t-BorekKB-Kertoip'),
  },
  '2t-BorekKB-Kertoip-3': {
    championId: getChampionId('volibear'),
    playerMatchId: getPlayerGameId('2t-BorekKB-Kertoip'),
  },
  '2t-Kertoip-BorekKB-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('2t-Kertoip-BorekKB'),
  },
  '2t-Kertoip-BorekKB-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('2t-Kertoip-BorekKB'),
  },
  '2t-Kertoip-BorekKB-3': {
    championId: getChampionId('vayne'),
    playerMatchId: getPlayerGameId('2t-Kertoip-BorekKB'),
  },

  '2t-575vmvac-Dymitriad-1': {
    championId: getChampionId('quinn'),
    playerMatchId: getPlayerGameId('2t-575vmvac-Dymitriad'),
  },
  '2t-575vmvac-Dymitriad-2': {
    championId: getChampionId('annie'),
    playerMatchId: getPlayerGameId('2t-575vmvac-Dymitriad'),
  },
  '2t-575vmvac-Dymitriad-3': {
    championId: getChampionId('jinx'),
    playerMatchId: getPlayerGameId('2t-575vmvac-Dymitriad'),
  },
  '2t-Dymitriad-575vmvac-1': {
    championId: getChampionId('nautilus'),
    playerMatchId: getPlayerGameId('2t-Dymitriad-575vmvac'),
  },
  '2t-Dymitriad-575vmvac-2': {
    championId: getChampionId('kassadin'),
    playerMatchId: getPlayerGameId('2t-Dymitriad-575vmvac'),
  },
  '2t-Dymitriad-575vmvac-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('2t-Dymitriad-575vmvac'),
  },

  '2t-iiri-Skomer-1': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('2t-iiri-Skomer'),
  },
  '2t-iiri-Skomer-2': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('2t-iiri-Skomer'),
  },
  '2t-iiri-Skomer-3': {
    championId: getChampionId('anivia'),
    playerMatchId: getPlayerGameId('2t-iiri-Skomer'),
  },
  '2t-Skomer-iiri-1': {
    championId: getChampionId('heimerdinger'),
    playerMatchId: getPlayerGameId('2t-Skomer-iiri'),
  },
  '2t-Skomer-iiri-2': {
    championId: getChampionId('graves'),
    playerMatchId: getPlayerGameId('2t-Skomer-iiri'),
  },
  '2t-Skomer-iiri-3': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('2t-Skomer-iiri'),
  },

  '2t-Sznifferek-Hauche-1': {
    championId: getChampionId('quinn'),
    playerMatchId: getPlayerGameId('2t-Sznifferek-Hauche'),
  },
  '2t-Sznifferek-Hauche-2': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('2t-Sznifferek-Hauche'),
  },
  '2t-Sznifferek-Hauche-3': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('2t-Sznifferek-Hauche'),
  },
  '2t-Hauche-Sznifferek-1': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('2t-Hauche-Sznifferek'),
  },
  '2t-Hauche-Sznifferek-2': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('2t-Hauche-Sznifferek'),
  },
  '2t-Hauche-Sznifferek-3': {
    championId: getChampionId('heimerdinger'),
    playerMatchId: getPlayerGameId('2t-Hauche-Sznifferek'),
  },

  '2t-575vmvac-Kertoip-1': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('2t-575vmvac-Kertoip'),
  },
  '2t-575vmvac-Kertoip-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('2t-575vmvac-Kertoip'),
  },
  '2t-575vmvac-Kertoip-3': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('2t-575vmvac-Kertoip'),
  },
  '2t-Kertoip-575vmvac-1': {
    championId: getChampionId('karma'),
    playerMatchId: getPlayerGameId('2t-Kertoip-575vmvac'),
  },
  '2t-Kertoip-575vmvac-2': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('2t-Kertoip-575vmvac'),
  },
  '2t-Kertoip-575vmvac-3': {
    championId: getChampionId('swain'),
    playerMatchId: getPlayerGameId('2t-Kertoip-575vmvac'),
  },

  '2t-Sznifferek-Skomer-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('2t-Sznifferek-Skomer'),
  },
  '2t-Sznifferek-Skomer-2': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('2t-Sznifferek-Skomer'),
  },
  '2t-Sznifferek-Skomer-3': {
    championId: getChampionId('quinn'),
    playerMatchId: getPlayerGameId('2t-Sznifferek-Skomer'),
  },
  '2t-Skomer-Sznifferek-1': {
    championId: getChampionId('azir'),
    playerMatchId: getPlayerGameId('2t-Skomer-Sznifferek'),
  },
  '2t-Skomer-Sznifferek-2': {
    championId: getChampionId('anivia'),
    playerMatchId: getPlayerGameId('2t-Skomer-Sznifferek'),
  },
  '2t-Skomer-Sznifferek-3': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('2t-Skomer-Sznifferek'),
  },

  '2t-Sznifferek-Kertoip-1': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('2t-Sznifferek-Kertoip'),
  },
  '2t-Sznifferek-Kertoip-2': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('2t-Sznifferek-Kertoip'),
  },
  '2t-Sznifferek-Kertoip-3': {
    championId: getChampionId('anivia'),
    playerMatchId: getPlayerGameId('2t-Sznifferek-Kertoip'),
  },
  '2t-Kertoip-Sznifferek-1': {
    championId: getChampionId('azir'),
    playerMatchId: getPlayerGameId('2t-Kertoip-Sznifferek'),
  },
  '2t-Kertoip-Sznifferek-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('2t-Kertoip-Sznifferek'),
  },
  '2t-Kertoip-Sznifferek-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('2t-Kertoip-Sznifferek'),
  },

  '2t-Skomer-575vmvac-1': {
    championId: getChampionId('anivia'),
    playerMatchId: getPlayerGameId('2t-Skomer-575vmvac'),
  },
  '2t-Skomer-575vmvac-2': {
    championId: getChampionId('kassadin'),
    playerMatchId: getPlayerGameId('2t-Skomer-575vmvac'),
  },
  '2t-Skomer-575vmvac-3': {
    championId: getChampionId('zyra'),
    playerMatchId: getPlayerGameId('2t-Skomer-575vmvac'),
  },
  '2t-575vmvac-Skomer-1': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('2t-575vmvac-Skomer'),
  },
  '2t-575vmvac-Skomer-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('2t-575vmvac-Skomer'),
  },
  '2t-575vmvac-Skomer-3': {
    championId: getChampionId('chogath'),
    playerMatchId: getPlayerGameId('2t-575vmvac-Skomer'),
  },

  '3t-Lunarm-Dymitriad-1': {
    championId: getChampionId('syndra'),
    playerMatchId: getPlayerGameId('3t-Lunarm-Dymitriad'),
  },
  '3t-Lunarm-Dymitriad-2': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('3t-Lunarm-Dymitriad'),
  },
  '3t-Lunarm-Dymitriad-3': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('3t-Lunarm-Dymitriad'),
  },
  '3t-Dymitriad-Lunarm-1': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('3t-Dymitriad-Lunarm'),
  },
  '3t-Dymitriad-Lunarm-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-Dymitriad-Lunarm'),
  },
  '3t-Dymitriad-Lunarm-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('3t-Dymitriad-Lunarm'),
  },

  '3t-Kszesiek-BCE Mopsik-1': {
    championId: getChampionId('teemo'),
    playerMatchId: getPlayerGameId('3t-Kszesiek-BCE Mopsik'),
  },
  '3t-Kszesiek-BCE Mopsik-2': {
    championId: getChampionId('ashe'),
    playerMatchId: getPlayerGameId('3t-Kszesiek-BCE Mopsik'),
  },
  '3t-Kszesiek-BCE Mopsik-3': {
    championId: getChampionId('gragas'),
    playerMatchId: getPlayerGameId('3t-Kszesiek-BCE Mopsik'),
  },
  '3t-BCE Mopsik-Kszesiek-1': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('3t-BCE Mopsik-Kszesiek'),
  },
  '3t-BCE Mopsik-Kszesiek-2': {
    championId: getChampionId('taric'),
    playerMatchId: getPlayerGameId('3t-BCE Mopsik-Kszesiek'),
  },
  '3t-BCE Mopsik-Kszesiek-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-BCE Mopsik-Kszesiek'),
  },

  '3t-ZielokXD-Sebix320-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('3t-ZielokXD-Sebix320'),
  },
  '3t-ZielokXD-Sebix320-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-ZielokXD-Sebix320'),
  },
  '3t-ZielokXD-Sebix320-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('3t-ZielokXD-Sebix320'),
  },
  '3t-Sebix320-ZielokXD-1': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('3t-Sebix320-ZielokXD'),
  },
  '3t-Sebix320-ZielokXD-2': {
    championId: getChampionId('ahri'),
    playerMatchId: getPlayerGameId('3t-Sebix320-ZielokXD'),
  },
  '3t-Sebix320-ZielokXD-3': {
    championId: getChampionId('urgot'),
    playerMatchId: getPlayerGameId('3t-Sebix320-ZielokXD'),
  },

  '3t-BiXa21-szpikulec567-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('3t-BiXa21-szpikulec567'),
  },
  '3t-BiXa21-szpikulec567-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-BiXa21-szpikulec567'),
  },
  '3t-BiXa21-szpikulec567-3': {
    championId: getChampionId('jinx'),
    playerMatchId: getPlayerGameId('3t-BiXa21-szpikulec567'),
  },
  '3t-szpikulec567-BiXa21-1': {
    championId: getChampionId('urgot'),
    playerMatchId: getPlayerGameId('3t-szpikulec567-BiXa21'),
  },
  '3t-szpikulec567-BiXa21-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-szpikulec567-BiXa21'),
  },
  '3t-szpikulec567-BiXa21-3': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('3t-szpikulec567-BiXa21'),
  },

  '3t-oliwier85-pyther-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('3t-oliwier85-pyther'),
  },
  '3t-oliwier85-pyther-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-oliwier85-pyther'),
  },
  '3t-oliwier85-pyther-3': {
    championId: getChampionId('jinx'),
    playerMatchId: getPlayerGameId('3t-oliwier85-pyther'),
  },
  // '3t-ZombieMen-oliwier85-1': {
  //   championId: getChampionId('urgot'),
  //   playerMatchId: getPlayerMatchId('3t-ZombieMen-oliwier85'),
  // },
  // '3t-ZombieMen-oliwier85-2': {
  //   championId: getChampionId('zed'),
  //   playerMatchId: getPlayerMatchId('3t-ZombieMen-oliwier85'),
  // },
  // '3t-ZombieMen-oliwier85-3': {
  //   championId: getChampionId('fizz'),
  //   playerMatchId: getPlayerMatchId('3t-ZombieMen-oliwier85'),
  // },

  '3t-szym14w-GiveeMe-1': {
    championId: getChampionId('rengar'),
    playerMatchId: getPlayerGameId('3t-szym14w-GiveeMe'),
  },
  '3t-szym14w-GiveeMe-2': {
    championId: getChampionId('evelynn'),
    playerMatchId: getPlayerGameId('3t-szym14w-GiveeMe'),
  },
  '3t-szym14w-GiveeMe-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-szym14w-GiveeMe'),
  },
  '3t-GiveeMe-szym14w-1': {
    championId: getChampionId('ryze'),
    playerMatchId: getPlayerGameId('3t-GiveeMe-szym14w'),
  },
  '3t-GiveeMe-szym14w-2': {
    championId: getChampionId('ekko'),
    playerMatchId: getPlayerGameId('3t-GiveeMe-szym14w'),
  },
  '3t-GiveeMe-szym14w-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('3t-GiveeMe-szym14w'),
  },

  '3t-Fefurusek-Kyusuku-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('3t-Fefurusek-Kyusuku'),
  },
  '3t-Fefurusek-Kyusuku-2': {
    championId: getChampionId('heimerdinger'),
    playerMatchId: getPlayerGameId('3t-Fefurusek-Kyusuku'),
  },
  '3t-Fefurusek-Kyusuku-3': {
    championId: getChampionId('fiora'),
    playerMatchId: getPlayerGameId('3t-Fefurusek-Kyusuku'),
  },
  '3t-Kyusuku-Fefurusek-1': {
    championId: getChampionId('renekton'),
    playerMatchId: getPlayerGameId('3t-Kyusuku-Fefurusek'),
  },
  '3t-Kyusuku-Fefurusek-2': {
    championId: getChampionId('camille'),
    playerMatchId: getPlayerGameId('3t-Kyusuku-Fefurusek'),
  },
  '3t-Kyusuku-Fefurusek-3': {
    championId: getChampionId('fiora'),
    playerMatchId: getPlayerGameId('3t-Kyusuku-Fefurusek'),
  },

  '3t-Lunarm-Jarosław Oliwa-1': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('3t-Lunarm-Jarosław Oliwa'),
  },
  '3t-Lunarm-Jarosław Oliwa-2': {
    championId: getChampionId('ekko'),
    playerMatchId: getPlayerGameId('3t-Lunarm-Jarosław Oliwa'),
  },
  '3t-Lunarm-Jarosław Oliwa-3': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('3t-Lunarm-Jarosław Oliwa'),
  },
  '3t-Jarosław Oliwa-Lunarm-1': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('3t-Jarosław Oliwa-Lunarm'),
  },
  '3t-Jarosław Oliwa-Lunarm-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-Jarosław Oliwa-Lunarm'),
  },
  '3t-Jarosław Oliwa-Lunarm-3': {
    championId: getChampionId('annie'),
    playerMatchId: getPlayerGameId('3t-Jarosław Oliwa-Lunarm'),
  },

  '3t-aFINISZnaCYCE-Kyusuku-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-aFINISZnaCYCE-Kyusuku'),
  },
  '3t-aFINISZnaCYCE-Kyusuku-2': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('3t-aFINISZnaCYCE-Kyusuku'),
  },
  '3t-aFINISZnaCYCE-Kyusuku-3': {
    championId: getChampionId('ryze'),
    playerMatchId: getPlayerGameId('3t-aFINISZnaCYCE-Kyusuku'),
  },
  '3t-Kyusuku-aFINISZnaCYCE-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('3t-Kyusuku-aFINISZnaCYCE'),
  },
  '3t-Kyusuku-aFINISZnaCYCE-2': {
    championId: getChampionId('riven'),
    playerMatchId: getPlayerGameId('3t-Kyusuku-aFINISZnaCYCE'),
  },
  '3t-Kyusuku-aFINISZnaCYCE-3': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('3t-Kyusuku-aFINISZnaCYCE'),
  },

  '3t-PanAngar-Kszesiek-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('3t-PanAngar-Kszesiek'),
  },
  '3t-PanAngar-Kszesiek-2': {
    championId: getChampionId('irelia'),
    playerMatchId: getPlayerGameId('3t-PanAngar-Kszesiek'),
  },
  '3t-PanAngar-Kszesiek-3': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('3t-PanAngar-Kszesiek'),
  },
  '3t-Kszesiek-PanAngar-1': {
    championId: getChampionId('syndra'),
    playerMatchId: getPlayerGameId('3t-Kszesiek-PanAngar'),
  },
  '3t-Kszesiek-PanAngar-2': {
    championId: getChampionId('teemo'),
    playerMatchId: getPlayerGameId('3t-Kszesiek-PanAngar'),
  },
  '3t-Kszesiek-PanAngar-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('3t-Kszesiek-PanAngar'),
  },

  '3t-Sebix320-Hauche-1': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('3t-Sebix320-Hauche'),
  },
  '3t-Sebix320-Hauche-2': {
    championId: getChampionId('karma'),
    playerMatchId: getPlayerGameId('3t-Sebix320-Hauche'),
  },
  '3t-Sebix320-Hauche-3': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('3t-Sebix320-Hauche'),
  },
  '3t-Hauche-Sebix320-1': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('3t-Hauche-Sebix320'),
  },
  '3t-Hauche-Sebix320-2': {
    championId: getChampionId('syndra'),
    playerMatchId: getPlayerGameId('3t-Hauche-Sebix320'),
  },
  '3t-Hauche-Sebix320-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('3t-Hauche-Sebix320'),
  },

  '3t-BiXa21-Máthew-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('3t-BiXa21-Máthew'),
  },
  '3t-BiXa21-Máthew-2': {
    championId: getChampionId('vayne'),
    playerMatchId: getPlayerGameId('3t-BiXa21-Máthew'),
  },
  '3t-BiXa21-Máthew-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-BiXa21-Máthew'),
  },
  '3t-Máthew-BiXa21-1': {
    championId: getChampionId('heimerdinger'),
    playerMatchId: getPlayerGameId('3t-Máthew-BiXa21'),
  },
  '3t-Máthew-BiXa21-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('3t-Máthew-BiXa21'),
  },
  '3t-Máthew-BiXa21-3': {
    championId: getChampionId('veigar'),
    playerMatchId: getPlayerGameId('3t-Máthew-BiXa21'),
  },

  '3t-vViPp-Woozimu-1': {
    championId: getChampionId('janna'),
    playerMatchId: getPlayerGameId('3t-vViPp-Woozimu'),
  },
  '3t-vViPp-Woozimu-2': {
    championId: getChampionId('sona'),
    playerMatchId: getPlayerGameId('3t-vViPp-Woozimu'),
  },
  '3t-vViPp-Woozimu-3': {
    championId: getChampionId('lulu'),
    playerMatchId: getPlayerGameId('3t-vViPp-Woozimu'),
  },
  '3t-Woozimu-vViPp-1': {
    championId: getChampionId('riven'),
    playerMatchId: getPlayerGameId('3t-Woozimu-vViPp'),
  },
  '3t-Woozimu-vViPp-2': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('3t-Woozimu-vViPp'),
  },
  '3t-Woozimu-vViPp-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('3t-Woozimu-vViPp'),
  },

  '3t-oliwier85-ZombieMen-1': {
    championId: getChampionId('thresh'),
    playerMatchId: getPlayerGameId('3t-oliwier85-ZombieMen'),
  },
  '3t-oliwier85-ZombieMen-2': {
    championId: getChampionId('vayne'),
    playerMatchId: getPlayerGameId('3t-oliwier85-ZombieMen'),
  },
  '3t-oliwier85-ZombieMen-3': {
    championId: getChampionId('lulu'),
    playerMatchId: getPlayerGameId('3t-oliwier85-ZombieMen'),
  },
  '3t-ZombieMen-oliwier85-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('3t-ZombieMen-oliwier85'),
  },
  '3t-ZombieMen-oliwier85-2': {
    championId: getChampionId('ashe'),
    playerMatchId: getPlayerGameId('3t-ZombieMen-oliwier85'),
  },
  '3t-ZombieMen-oliwier85-3': {
    championId: getChampionId('teemo'),
    playerMatchId: getPlayerGameId('3t-ZombieMen-oliwier85'),
  },

  '3t-Élenath-GiveeMe-1': {
    championId: getChampionId('varus'),
    playerMatchId: getPlayerGameId('3t-Élenath-GiveeMe'),
  },
  '3t-Élenath-GiveeMe-2': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('3t-Élenath-GiveeMe'),
  },
  '3t-Élenath-GiveeMe-3': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('3t-Élenath-GiveeMe'),
  },
  '3t-GiveeMe-Élenath-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('3t-GiveeMe-Élenath'),
  },
  '3t-GiveeMe-Élenath-2': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('3t-GiveeMe-Élenath'),
  },
  '3t-GiveeMe-Élenath-3': {
    championId: getChampionId('ryze'),
    playerMatchId: getPlayerGameId('3t-GiveeMe-Élenath'),
  },

  '3t-aFINISZnaCYCE-Jarosław Oliwa-1': {
    championId: getChampionId('akali'),
    playerMatchId: getPlayerGameId('3t-aFINISZnaCYCE-Jarosław Oliwa'),
  },
  '3t-aFINISZnaCYCE-Jarosław Oliwa-2': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('3t-aFINISZnaCYCE-Jarosław Oliwa'),
  },
  '3t-aFINISZnaCYCE-Jarosław Oliwa-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-aFINISZnaCYCE-Jarosław Oliwa'),
  },
  '3t-Jarosław Oliwa-aFINISZnaCYCE-1': {
    championId: getChampionId('xayah'),
    playerMatchId: getPlayerGameId('3t-Jarosław Oliwa-aFINISZnaCYCE'),
  },
  '3t-Jarosław Oliwa-aFINISZnaCYCE-2': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('3t-Jarosław Oliwa-aFINISZnaCYCE'),
  },
  '3t-Jarosław Oliwa-aFINISZnaCYCE-3': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('3t-Jarosław Oliwa-aFINISZnaCYCE'),
  },

  '3t-Sebix320-PanAngar-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-Sebix320-PanAngar'),
  },
  '3t-Sebix320-PanAngar-2': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('3t-Sebix320-PanAngar'),
  },
  '3t-Sebix320-PanAngar-3': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('3t-Sebix320-PanAngar'),
  },
  '3t-PanAngar-Sebix320-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('3t-PanAngar-Sebix320'),
  },
  '3t-PanAngar-Sebix320-2': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('3t-PanAngar-Sebix320'),
  },
  '3t-PanAngar-Sebix320-3': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('3t-PanAngar-Sebix320'),
  },

  '3t-vViPp-Máthew-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('3t-vViPp-Máthew'),
  },
  '3t-vViPp-Máthew-2': {
    championId: getChampionId('janna'),
    playerMatchId: getPlayerGameId('3t-vViPp-Máthew'),
  },
  '3t-vViPp-Máthew-3': {
    championId: getChampionId('lulu'),
    playerMatchId: getPlayerGameId('3t-vViPp-Máthew'),
  },
  '3t-Máthew-vViPp-1': {
    championId: getChampionId('riven'),
    playerMatchId: getPlayerGameId('3t-Máthew-vViPp'),
  },
  '3t-Máthew-vViPp-2': {
    championId: getChampionId('gragas'),
    playerMatchId: getPlayerGameId('3t-Máthew-vViPp'),
  },
  '3t-Máthew-vViPp-3': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('3t-Máthew-vViPp'),
  },

  '3t-ZombieMen-Élenath-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-ZombieMen-Élenath'),
  },
  '3t-ZombieMen-Élenath-2': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('3t-ZombieMen-Élenath'),
  },
  '3t-ZombieMen-Élenath-3': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('3t-ZombieMen-Élenath'),
  },
  '3t-Élenath-ZombieMen-1': {
    championId: getChampionId('lulu'),
    playerMatchId: getPlayerGameId('3t-Élenath-ZombieMen'),
  },
  '3t-Élenath-ZombieMen-2': {
    championId: getChampionId('gragas'),
    playerMatchId: getPlayerGameId('3t-Élenath-ZombieMen'),
  },
  '3t-Élenath-ZombieMen-3': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('3t-Élenath-ZombieMen'),
  },

  '3t-aFINISZnaCYCE-PanAngar-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('3t-aFINISZnaCYCE-PanAngar'),
  },
  '3t-aFINISZnaCYCE-PanAngar-2': {
    championId: getChampionId('galio'),
    playerMatchId: getPlayerGameId('3t-aFINISZnaCYCE-PanAngar'),
  },
  '3t-aFINISZnaCYCE-PanAngar-3': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('3t-aFINISZnaCYCE-PanAngar'),
  },
  '3t-PanAngar-aFINISZnaCYCE-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('3t-PanAngar-aFINISZnaCYCE'),
  },
  '3t-PanAngar-aFINISZnaCYCE-2': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('3t-PanAngar-aFINISZnaCYCE'),
  },
  '3t-PanAngar-aFINISZnaCYCE-3': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('3t-PanAngar-aFINISZnaCYCE'),
  },

  '3t-Élenath-vViPp-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-Élenath-vViPp'),
  },
  '3t-Élenath-vViPp-2': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('3t-Élenath-vViPp'),
  },
  '3t-Élenath-vViPp-3': {
    championId: getChampionId('gragas'),
    playerMatchId: getPlayerGameId('3t-Élenath-vViPp'),
  },
  '3t-vViPp-Élenath-1': {
    championId: getChampionId('sona'),
    playerMatchId: getPlayerGameId('3t-vViPp-Élenath'),
  },
  '3t-vViPp-Élenath-2': {
    championId: getChampionId('janna'),
    playerMatchId: getPlayerGameId('3t-vViPp-Élenath'),
  },
  '3t-vViPp-Élenath-3': {
    championId: getChampionId('lulu'),
    playerMatchId: getPlayerGameId('3t-vViPp-Élenath'),
  },

  '3t-Élenath-PanAngar-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-Élenath-PanAngar'),
  },
  '3t-Élenath-PanAngar-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('3t-Élenath-PanAngar'),
  },
  '3t-Élenath-PanAngar-3': {
    championId: getChampionId('gragas'),
    playerMatchId: getPlayerGameId('3t-Élenath-PanAngar'),
  },
  '3t-PanAngar-Élenath-1': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('3t-PanAngar-Élenath'),
  },
  '3t-PanAngar-Élenath-2': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('3t-PanAngar-Élenath'),
  },
  '3t-PanAngar-Élenath-3': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('3t-PanAngar-Élenath'),
  },

  '3t-vViPp-aFINISZnaCYCE-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('3t-vViPp-aFINISZnaCYCE'),
  },
  '3t-vViPp-aFINISZnaCYCE-2': {
    championId: getChampionId('ahri'),
    playerMatchId: getPlayerGameId('3t-vViPp-aFINISZnaCYCE'),
  },
  '3t-vViPp-aFINISZnaCYCE-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t-vViPp-aFINISZnaCYCE'),
  },
  '3t-aFINISZnaCYCE-vViPp-1': {
    championId: getChampionId('galio'),
    playerMatchId: getPlayerGameId('3t-aFINISZnaCYCE-vViPp'),
  },
  '3t-aFINISZnaCYCE-vViPp-2': {
    championId: getChampionId('gragas'),
    playerMatchId: getPlayerGameId('3t-aFINISZnaCYCE-vViPp'),
  },
  '3t-aFINISZnaCYCE-vViPp-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('3t-aFINISZnaCYCE-vViPp'),
  },

  '3t2-vViPp-aFINISZnaCYCE-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('3t2-vViPp-aFINISZnaCYCE'),
  },
  '3t2-vViPp-aFINISZnaCYCE-2': {
    championId: getChampionId('soraka'),
    playerMatchId: getPlayerGameId('3t2-vViPp-aFINISZnaCYCE'),
  },
  '3t2-vViPp-aFINISZnaCYCE-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('3t2-vViPp-aFINISZnaCYCE'),
  },
  '3t2-aFINISZnaCYCE-vViPp-1': {
    championId: getChampionId('galio'),
    playerMatchId: getPlayerGameId('3t2-aFINISZnaCYCE-vViPp'),
  },
  '3t2-aFINISZnaCYCE-vViPp-2': {
    championId: getChampionId('gragas'),
    playerMatchId: getPlayerGameId('3t2-aFINISZnaCYCE-vViPp'),
  },
  '3t2-aFINISZnaCYCE-vViPp-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('3t2-aFINISZnaCYCE-vViPp'),
  },

  '4t-Pyther-Rully-1': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('4t-Pyther-Rully'),
  },
  '4t-Pyther-Rully-2': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-Pyther-Rully'),
  },
  '4t-Pyther-Rully-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-Pyther-Rully'),
  },
  '4t-Rully-Pyther-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-Rully-Pyther'),
  },
  '4t-Rully-Pyther-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-Rully-Pyther'),
  },
  '4t-Rully-Pyther-3': {
    championId: getChampionId('varus'),
    playerMatchId: getPlayerGameId('4t-Rully-Pyther'),
  },

  '4t-Kup se dzieci-Rully-1': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-Kup se dzieci-Rully'),
  },
  '4t-Kup se dzieci-Rully-2': {
    championId: getChampionId('talon'),
    playerMatchId: getPlayerGameId('4t-Kup se dzieci-Rully'),
  },
  '4t-Kup se dzieci-Rully-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-Kup se dzieci-Rully'),
  },
  '4t-Rully-Kup se dzieci-1': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-Rully-Kup se dzieci'),
  },
  '4t-Rully-Kup se dzieci-2': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-Rully-Kup se dzieci'),
  },
  '4t-Rully-Kup se dzieci-3': {
    championId: getChampionId('diana'),
    playerMatchId: getPlayerGameId('4t-Rully-Kup se dzieci'),
  },

  '4t-Kup se dzieci-Pyther-1': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-Kup se dzieci-Pyther'),
  },
  '4t-Kup se dzieci-Pyther-2': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('4t-Kup se dzieci-Pyther'),
  },
  '4t-Kup se dzieci-Pyther-3': {
    championId: getChampionId('heimerdinger'),
    playerMatchId: getPlayerGameId('4t-Kup se dzieci-Pyther'),
  },
  '4t-Pyther-Kup se dzieci-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-Pyther-Kup se dzieci'),
  },
  '4t-Pyther-Kup se dzieci-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-Pyther-Kup se dzieci'),
  },
  '4t-Pyther-Kup se dzieci-3': {
    championId: getChampionId('miss_fortune'),
    playerMatchId: getPlayerGameId('4t-Pyther-Kup se dzieci'),
  },

  '4t-2-Kup se dzieci-Pyther-1': {
    championId: getChampionId('urgot'),
    playerMatchId: getPlayerGameId('4t-2-Kup se dzieci-Pyther'),
  },
  '4t-2-Kup se dzieci-Pyther-2': {
    championId: getChampionId('talon'),
    playerMatchId: getPlayerGameId('4t-2-Kup se dzieci-Pyther'),
  },
  '4t-2-Kup se dzieci-Pyther-3': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-2-Kup se dzieci-Pyther'),
  },
  '4t-2-Pyther-Kup se dzieci-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-Pyther-Kup se dzieci'),
  },
  '4t-2-Pyther-Kup se dzieci-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-2-Pyther-Kup se dzieci'),
  },
  '4t-2-Pyther-Kup se dzieci-3': {
    championId: getChampionId('miss_fortune'),
    playerMatchId: getPlayerGameId('4t-2-Pyther-Kup se dzieci'),
  },

  '4t-2-Rully-Kup se dzieci-1': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-2-Rully-Kup se dzieci'),
  },
  '4t-2-Rully-Kup se dzieci-2': {
    championId: getChampionId('diana'),
    playerMatchId: getPlayerGameId('4t-2-Rully-Kup se dzieci'),
  },
  '4t-2-Rully-Kup se dzieci-3': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-2-Rully-Kup se dzieci'),
  },
  '4t-2-Kup se dzieci-Rully-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-Kup se dzieci-Rully'),
  },
  '4t-2-Kup se dzieci-Rully-2': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-2-Kup se dzieci-Rully'),
  },
  '4t-2-Kup se dzieci-Rully-3': {
    championId: getChampionId('talon'),
    playerMatchId: getPlayerGameId('4t-2-Kup se dzieci-Rully'),
  },

  '4t-2-Rully-Pyther-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-Rully-Pyther'),
  },
  '4t-2-Rully-Pyther-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-2-Rully-Pyther'),
  },
  '4t-2-Rully-Pyther-3': {
    championId: getChampionId('varus'),
    playerMatchId: getPlayerGameId('4t-2-Rully-Pyther'),
  },
  '4t-2-Pyther-Rully-1': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-2-Pyther-Rully'),
  },
  '4t-2-Pyther-Rully-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-Pyther-Rully'),
  },
  '4t-2-Pyther-Rully-3': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('4t-2-Pyther-Rully'),
  },

  '4t-Matimen-Paweł-1': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('4t-Matimen-Paweł'),
  },
  '4t-Matimen-Paweł-2': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('4t-Matimen-Paweł'),
  },
  '4t-Matimen-Paweł-3': {
    championId: getChampionId('gangplank'),
    playerMatchId: getPlayerGameId('4t-Matimen-Paweł'),
  },
  '4t-Paweł-Matimen-1': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-Paweł-Matimen'),
  },
  '4t-Paweł-Matimen-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-Paweł-Matimen'),
  },
  '4t-Paweł-Matimen-3': {
    championId: getChampionId('jhin'),
    playerMatchId: getPlayerGameId('4t-Paweł-Matimen'),
  },

  '4t-Matimen-Stella-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-Matimen-Stella'),
  },
  '4t-Matimen-Stella-2': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('4t-Matimen-Stella'),
  },
  '4t-Matimen-Stella-3': {
    championId: getChampionId('ornn'),
    playerMatchId: getPlayerGameId('4t-Matimen-Stella'),
  },
  '4t-Stella-Matimen-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-Stella-Matimen'),
  },
  '4t-Stella-Matimen-2': {
    championId: getChampionId('quinn'),
    playerMatchId: getPlayerGameId('4t-Stella-Matimen'),
  },
  '4t-Stella-Matimen-3': {
    championId: getChampionId('ahri'),
    playerMatchId: getPlayerGameId('4t-Stella-Matimen'),
  },

  '4t-2-Matimen-Stella-1': {
    championId: getChampionId('ahri'),
    playerMatchId: getPlayerGameId('4t-2-Matimen-Stella'),
  },
  '4t-2-Matimen-Stella-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-2-Matimen-Stella'),
  },
  '4t-2-Matimen-Stella-3': {
    championId: getChampionId('jinx'),
    playerMatchId: getPlayerGameId('4t-2-Matimen-Stella'),
  },
  '4t-2-Stella-Matimen-1': {
    championId: getChampionId('akali'),
    playerMatchId: getPlayerGameId('4t-2-Stella-Matimen'),
  },
  '4t-2-Stella-Matimen-2': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-2-Stella-Matimen'),
  },
  '4t-2-Stella-Matimen-3': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('4t-2-Stella-Matimen'),
  },

  '4t-2-Paweł-Matimen-1': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('4t-2-Paweł-Matimen'),
  },
  '4t-2-Paweł-Matimen-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-2-Paweł-Matimen'),
  },
  '4t-2-Paweł-Matimen-3': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-2-Paweł-Matimen'),
  },
  '4t-2-Matimen-Paweł-1': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('4t-2-Matimen-Paweł'),
  },
  '4t-2-Matimen-Paweł-2': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('4t-2-Matimen-Paweł'),
  },
  '4t-2-Matimen-Paweł-3': {
    championId: getChampionId('gangplank'),
    playerMatchId: getPlayerGameId('4t-2-Matimen-Paweł'),
  },

  '4t-2-Paweł-Stella-1': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-2-Paweł-Stella'),
  },
  '4t-2-Paweł-Stella-2': {
    championId: getChampionId('gnar'),
    playerMatchId: getPlayerGameId('4t-2-Paweł-Stella'),
  },
  '4t-2-Paweł-Stella-3': {
    championId: getChampionId('ahri'),
    playerMatchId: getPlayerGameId('4t-2-Paweł-Stella'),
  },
  '4t-2-Stella-Paweł-1': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('4t-2-Stella-Paweł'),
  },
  '4t-2-Stella-Paweł-2': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('4t-2-Stella-Paweł'),
  },
  '4t-2-Stella-Paweł-3': {
    championId: getChampionId('kassadin'),
    playerMatchId: getPlayerGameId('4t-2-Stella-Paweł'),
  },

  '4t-Fefurusek-oliwier85-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-Fefurusek-oliwier85'),
  },
  '4t-Fefurusek-oliwier85-2': {
    championId: getChampionId('akali'),
    playerMatchId: getPlayerGameId('4t-Fefurusek-oliwier85'),
  },
  '4t-Fefurusek-oliwier85-3': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-Fefurusek-oliwier85'),
  },
  '4t-oliwier85-Fefurusek-1': {
    championId: getChampionId('ornn'),
    playerMatchId: getPlayerGameId('4t-oliwier85-Fefurusek'),
  },
  '4t-oliwier85-Fefurusek-2': {
    championId: getChampionId('camille'),
    playerMatchId: getPlayerGameId('4t-oliwier85-Fefurusek'),
  },
  '4t-oliwier85-Fefurusek-3': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('4t-oliwier85-Fefurusek'),
  },

  '4t-Kertoip-Dawcio1289-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-Kertoip-Dawcio1289'),
  },
  '4t-Kertoip-Dawcio1289-2': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('4t-Kertoip-Dawcio1289'),
  },
  '4t-Kertoip-Dawcio1289-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-Kertoip-Dawcio1289'),
  },
  '4t-Dawcio1289-Kertoip-1': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-Dawcio1289-Kertoip'),
  },
  '4t-Dawcio1289-Kertoip-2': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('4t-Dawcio1289-Kertoip'),
  },
  '4t-Dawcio1289-Kertoip-3': {
    championId: getChampionId('syndra'),
    playerMatchId: getPlayerGameId('4t-Dawcio1289-Kertoip'),
  },

  '4t-Fefurusek-Dawcio1289-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-Fefurusek-Dawcio1289'),
  },
  '4t-Fefurusek-Dawcio1289-2': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-Fefurusek-Dawcio1289'),
  },
  '4t-Fefurusek-Dawcio1289-3': {
    championId: getChampionId('ahri'),
    playerMatchId: getPlayerGameId('4t-Fefurusek-Dawcio1289'),
  },
  '4t-Dawcio1289-Fefurusek-1': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('4t-Dawcio1289-Fefurusek'),
  },
  '4t-Dawcio1289-Fefurusek-2': {
    championId: getChampionId('renekton'),
    playerMatchId: getPlayerGameId('4t-Dawcio1289-Fefurusek'),
  },
  '4t-Dawcio1289-Fefurusek-3': {
    championId: getChampionId('camille'),
    playerMatchId: getPlayerGameId('4t-Dawcio1289-Fefurusek'),
  },

  '4t-oliwier85-Kertoip-1': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-oliwier85-Kertoip'),
  },
  '4t-oliwier85-Kertoip-2': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('4t-oliwier85-Kertoip'),
  },
  '4t-oliwier85-Kertoip-3': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('4t-oliwier85-Kertoip'),
  },
  '4t-Kertoip-oliwier85-1': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-Kertoip-oliwier85'),
  },
  '4t-Kertoip-oliwier85-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-Kertoip-oliwier85'),
  },
  '4t-Kertoip-oliwier85-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-Kertoip-oliwier85'),
  },

  '4t-Fefurusek-Kertoip-1': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-Fefurusek-Kertoip'),
  },
  '4t-Fefurusek-Kertoip-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-Fefurusek-Kertoip'),
  },
  '4t-Fefurusek-Kertoip-3': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-Fefurusek-Kertoip'),
  },
  '4t-Kertoip-Fefurusek-1': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('4t-Kertoip-Fefurusek'),
  },
  '4t-Kertoip-Fefurusek-2': {
    championId: getChampionId('renekton'),
    playerMatchId: getPlayerGameId('4t-Kertoip-Fefurusek'),
  },
  '4t-Kertoip-Fefurusek-3': {
    championId: getChampionId('camille'),
    playerMatchId: getPlayerGameId('4t-Kertoip-Fefurusek'),
  },

  '4t-Dawcio1289-oliwier85-1': {
    championId: getChampionId('akali'),
    playerMatchId: getPlayerGameId('4t-Dawcio1289-oliwier85'),
  },
  '4t-Dawcio1289-oliwier85-2': {
    championId: getChampionId('teemo'),
    playerMatchId: getPlayerGameId('4t-Dawcio1289-oliwier85'),
  },
  '4t-Dawcio1289-oliwier85-3': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-Dawcio1289-oliwier85'),
  },
  '4t-oliwier85-Dawcio1289-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-oliwier85-Dawcio1289'),
  },
  '4t-oliwier85-Dawcio1289-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-oliwier85-Dawcio1289'),
  },
  '4t-oliwier85-Dawcio1289-3': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-oliwier85-Dawcio1289'),
  },

  '4t-2-Dawcio1289-oliwier85-1': {
    championId: getChampionId('akali'),
    playerMatchId: getPlayerGameId('4t-2-Dawcio1289-oliwier85'),
  },
  '4t-2-Dawcio1289-oliwier85-2': {
    championId: getChampionId('syndra'),
    playerMatchId: getPlayerGameId('4t-2-Dawcio1289-oliwier85'),
  },
  '4t-2-Dawcio1289-oliwier85-3': {
    championId: getChampionId('teemo'),
    playerMatchId: getPlayerGameId('4t-2-Dawcio1289-oliwier85'),
  },
  '4t-2-oliwier85-Dawcio1289-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-oliwier85-Dawcio1289'),
  },
  '4t-2-oliwier85-Dawcio1289-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-oliwier85-Dawcio1289'),
  },
  '4t-2-oliwier85-Dawcio1289-3': {
    championId: getChampionId('kassadin'),
    playerMatchId: getPlayerGameId('4t-2-oliwier85-Dawcio1289'),
  },

  '4t-2-Kertoip-Fefurusek-1': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('4t-2-Kertoip-Fefurusek'),
  },
  '4t-2-Kertoip-Fefurusek-2': {
    championId: getChampionId('ornn'),
    playerMatchId: getPlayerGameId('4t-2-Kertoip-Fefurusek'),
  },
  '4t-2-Kertoip-Fefurusek-3': {
    championId: getChampionId('renekton'),
    playerMatchId: getPlayerGameId('4t-2-Kertoip-Fefurusek'),
  },
  '4t-2-Fefurusek-Kertoip-1': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-2-Fefurusek-Kertoip'),
  },
  '4t-2-Fefurusek-Kertoip-2': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-2-Fefurusek-Kertoip'),
  },
  '4t-2-Fefurusek-Kertoip-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-2-Fefurusek-Kertoip'),
  },

  '4t-2-Kertoip-oliwier85-1': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-2-Kertoip-oliwier85'),
  },
  '4t-2-Kertoip-oliwier85-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-Kertoip-oliwier85'),
  },
  '4t-2-Kertoip-oliwier85-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-2-Kertoip-oliwier85'),
  },
  '4t-2-oliwier85-Kertoip-1': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('4t-2-oliwier85-Kertoip'),
  },
  '4t-2-oliwier85-Kertoip-2': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('4t-2-oliwier85-Kertoip'),
  },
  '4t-2-oliwier85-Kertoip-3': {
    championId: getChampionId('teemo'),
    playerMatchId: getPlayerGameId('4t-2-oliwier85-Kertoip'),
  },

  '4t-2-Dawcio1289-Kertoip-1': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-2-Dawcio1289-Kertoip'),
  },
  '4t-2-Dawcio1289-Kertoip-2': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('4t-2-Dawcio1289-Kertoip'),
  },
  '4t-2-Dawcio1289-Kertoip-3': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('4t-2-Dawcio1289-Kertoip'),
  },
  '4t-2-Kertoip-Dawcio1289-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-Kertoip-Dawcio1289'),
  },
  '4t-2-Kertoip-Dawcio1289-2': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('4t-2-Kertoip-Dawcio1289'),
  },
  '4t-2-Kertoip-Dawcio1289-3': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-2-Kertoip-Dawcio1289'),
  },

  '4t-2-oliwier85-Fefurusek-1': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('4t-2-oliwier85-Fefurusek'),
  },
  '4t-2-oliwier85-Fefurusek-2': {
    championId: getChampionId('camille'),
    playerMatchId: getPlayerGameId('4t-2-oliwier85-Fefurusek'),
  },
  '4t-2-oliwier85-Fefurusek-3': {
    championId: getChampionId('renekton'),
    playerMatchId: getPlayerGameId('4t-2-oliwier85-Fefurusek'),
  },
  '4t-2-Fefurusek-oliwier85-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-2-Fefurusek-oliwier85'),
  },
  '4t-2-Fefurusek-oliwier85-2': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-2-Fefurusek-oliwier85'),
  },
  '4t-2-Fefurusek-oliwier85-3': {
    championId: getChampionId('akali'),
    playerMatchId: getPlayerGameId('4t-2-Fefurusek-oliwier85'),
  },

  '4t-XlikeX666-B00MEK221-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-XlikeX666-B00MEK221'),
  },
  '4t-XlikeX666-B00MEK221-2': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-XlikeX666-B00MEK221'),
  },
  '4t-XlikeX666-B00MEK221-3': {
    championId: getChampionId('lee_sin'),
    playerMatchId: getPlayerGameId('4t-XlikeX666-B00MEK221'),
  },
  '4t-B00MEK221-XlikeX666-1': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('4t-B00MEK221-XlikeX666'),
  },
  '4t-B00MEK221-XlikeX666-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-B00MEK221-XlikeX666'),
  },
  '4t-B00MEK221-XlikeX666-3': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('4t-B00MEK221-XlikeX666'),
  },

  '4t-Woozzu-B00MEK221-1': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-Woozzu-B00MEK221'),
  },
  '4t-Woozzu-B00MEK221-2': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-Woozzu-B00MEK221'),
  },
  '4t-Woozzu-B00MEK221-3': {
    championId: getChampionId('jhin'),
    playerMatchId: getPlayerGameId('4t-Woozzu-B00MEK221'),
  },
  '4t-B00MEK221-Woozzu-1': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('4t-B00MEK221-Woozzu'),
  },
  '4t-B00MEK221-Woozzu-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-B00MEK221-Woozzu'),
  },
  '4t-B00MEK221-Woozzu-3': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('4t-B00MEK221-Woozzu'),
  },

  '4t-XlikeX666-Woozzu-1': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-XlikeX666-Woozzu'),
  },
  '4t-XlikeX666-Woozzu-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-XlikeX666-Woozzu'),
  },
  '4t-XlikeX666-Woozzu-3': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('4t-XlikeX666-Woozzu'),
  },
  '4t-Woozzu-XlikeX666-1': {
    championId: getChampionId('jhin'),
    playerMatchId: getPlayerGameId('4t-Woozzu-XlikeX666'),
  },
  '4t-Woozzu-XlikeX666-2': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-Woozzu-XlikeX666'),
  },
  '4t-Woozzu-XlikeX666-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-Woozzu-XlikeX666'),
  },

  '4t-B00MEK221-Dzeys336-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-B00MEK221-Dzeys336'),
  },
  '4t-B00MEK221-Dzeys336-2': {
    championId: getChampionId('teemo'),
    playerMatchId: getPlayerGameId('4t-B00MEK221-Dzeys336'),
  },
  '4t-B00MEK221-Dzeys336-3': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('4t-B00MEK221-Dzeys336'),
  },
  '4t-Dzeys336-B00MEK221-1': {
    championId: getChampionId('fiora'),
    playerMatchId: getPlayerGameId('4t-Dzeys336-B00MEK221'),
  },
  '4t-Dzeys336-B00MEK221-2': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('4t-Dzeys336-B00MEK221'),
  },
  '4t-Dzeys336-B00MEK221-3': {
    championId: getChampionId('jax'),
    playerMatchId: getPlayerGameId('4t-Dzeys336-B00MEK221'),
  },

  '4t-2-XlikeX666-Woozzu-1': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-2-XlikeX666-Woozzu'),
  },
  '4t-2-XlikeX666-Woozzu-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-XlikeX666-Woozzu'),
  },
  '4t-2-XlikeX666-Woozzu-3': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-2-XlikeX666-Woozzu'),
  },
  '4t-2-Woozzu-XlikeX666-1': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('4t-2-Woozzu-XlikeX666'),
  },
  '4t-2-Woozzu-XlikeX666-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-2-Woozzu-XlikeX666'),
  },
  '4t-2-Woozzu-XlikeX666-3': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-2-Woozzu-XlikeX666'),
  },

  '4t-2-B00MEK221-Woozzu-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-2-B00MEK221-Woozzu'),
  },
  '4t-2-B00MEK221-Woozzu-2': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('4t-2-B00MEK221-Woozzu'),
  },
  '4t-2-B00MEK221-Woozzu-3': {
    championId: getChampionId('lee_sin'),
    playerMatchId: getPlayerGameId('4t-2-B00MEK221-Woozzu'),
  },
  '4t-2-Woozzu-B00MEK221-1': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-2-Woozzu-B00MEK221'),
  },
  '4t-2-Woozzu-B00MEK221-2': {
    championId: getChampionId('jhin'),
    playerMatchId: getPlayerGameId('4t-2-Woozzu-B00MEK221'),
  },
  '4t-2-Woozzu-B00MEK221-3': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-2-Woozzu-B00MEK221'),
  },

  '4t-2-B00MEK221-XlikeX666-1': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('4t-2-B00MEK221-XlikeX666'),
  },
  '4t-2-B00MEK221-XlikeX666-2': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-2-B00MEK221-XlikeX666'),
  },
  '4t-2-B00MEK221-XlikeX666-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-B00MEK221-XlikeX666'),
  },
  '4t-2-XlikeX666-B00MEK221-1': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('4t-2-XlikeX666-B00MEK221'),
  },
  '4t-2-XlikeX666-B00MEK221-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-XlikeX666-B00MEK221'),
  },
  '4t-2-XlikeX666-B00MEK221-3': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-2-XlikeX666-B00MEK221'),
  },

  '4t-Gabryjiel-Tyrion-1': {
    championId: getChampionId('miss_fortune'),
    playerMatchId: getPlayerGameId('4t-Gabryjiel-Tyrion'),
  },
  '4t-Gabryjiel-Tyrion-2': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('4t-Gabryjiel-Tyrion'),
  },
  '4t-Gabryjiel-Tyrion-3': {
    championId: getChampionId('annie'),
    playerMatchId: getPlayerGameId('4t-Gabryjiel-Tyrion'),
  },
  '4t-Tyrion-Gabryjiel-1': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('4t-Tyrion-Gabryjiel'),
  },
  '4t-Tyrion-Gabryjiel-2': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-Tyrion-Gabryjiel'),
  },
  '4t-Tyrion-Gabryjiel-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-Tyrion-Gabryjiel'),
  },

  '4t-Kszesiek-Zielook-1': {
    championId: getChampionId('zilean'),
    playerMatchId: getPlayerGameId('4t-Kszesiek-Zielook'),
  },
  '4t-Kszesiek-Zielook-2': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-Kszesiek-Zielook'),
  },
  '4t-Kszesiek-Zielook-3': {
    championId: getChampionId('blitzcrank'),
    playerMatchId: getPlayerGameId('4t-Kszesiek-Zielook'),
  },
  '4t-Zielook-Kszesiek-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-Zielook-Kszesiek'),
  },
  '4t-Zielook-Kszesiek-2': {
    championId: getChampionId('gragas'),
    playerMatchId: getPlayerGameId('4t-Zielook-Kszesiek'),
  },
  '4t-Zielook-Kszesiek-3': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('4t-Zielook-Kszesiek'),
  },

  '4t-Gabryjiel-Zielook-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-Gabryjiel-Zielook'),
  },
  '4t-Gabryjiel-Zielook-2': {
    championId: getChampionId('karma'),
    playerMatchId: getPlayerGameId('4t-Gabryjiel-Zielook'),
  },
  '4t-Gabryjiel-Zielook-3': {
    championId: getChampionId('miss_fortune'),
    playerMatchId: getPlayerGameId('4t-Gabryjiel-Zielook'),
  },
  '4t-Zielook-Gabryjiel-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-Zielook-Gabryjiel'),
  },
  '4t-Zielook-Gabryjiel-2': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('4t-Zielook-Gabryjiel'),
  },
  '4t-Zielook-Gabryjiel-3': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-Zielook-Gabryjiel'),
  },

  '4t-Tyrion-Kszesiek-1': {
    championId: getChampionId('gragas'),
    playerMatchId: getPlayerGameId('4t-Tyrion-Kszesiek'),
  },
  '4t-Tyrion-Kszesiek-2': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('4t-Tyrion-Kszesiek'),
  },
  '4t-Tyrion-Kszesiek-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-Tyrion-Kszesiek'),
  },
  '4t-Kszesiek-Tyrion-1': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('4t-Kszesiek-Tyrion'),
  },
  '4t-Kszesiek-Tyrion-2': {
    championId: getChampionId('varus'),
    playerMatchId: getPlayerGameId('4t-Kszesiek-Tyrion'),
  },
  '4t-Kszesiek-Tyrion-3': {
    championId: getChampionId('vayne'),
    playerMatchId: getPlayerGameId('4t-Kszesiek-Tyrion'),
  },

  '4t-Gabryjiel-Kszesiek-1': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('4t-Gabryjiel-Kszesiek'),
  },
  '4t-Gabryjiel-Kszesiek-2': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-Gabryjiel-Kszesiek'),
  },
  '4t-Gabryjiel-Kszesiek-3': {
    championId: getChampionId('karma'),
    playerMatchId: getPlayerGameId('4t-Gabryjiel-Kszesiek'),
  },
  '4t-Kszesiek-Gabryjiel-1': {
    championId: getChampionId('syndra'),
    playerMatchId: getPlayerGameId('4t-Kszesiek-Gabryjiel'),
  },
  '4t-Kszesiek-Gabryjiel-2': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-Kszesiek-Gabryjiel'),
  },
  '4t-Kszesiek-Gabryjiel-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-Kszesiek-Gabryjiel'),
  },

  '4t-Zielook-Tyrion-1': {
    championId: getChampionId('miss_fortune'),
    playerMatchId: getPlayerGameId('4t-Zielook-Tyrion'),
  },
  '4t-Zielook-Tyrion-2': {
    championId: getChampionId('varus'),
    playerMatchId: getPlayerGameId('4t-Zielook-Tyrion'),
  },
  '4t-Zielook-Tyrion-3': {
    championId: getChampionId('vayne'),
    playerMatchId: getPlayerGameId('4t-Zielook-Tyrion'),
  },
  '4t-Tyrion-Zielook-1': {
    championId: getChampionId('karma'),
    playerMatchId: getPlayerGameId('4t-Tyrion-Zielook'),
  },
  '4t-Tyrion-Zielook-2': {
    championId: getChampionId('zilean'),
    playerMatchId: getPlayerGameId('4t-Tyrion-Zielook'),
  },
  '4t-Tyrion-Zielook-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-Tyrion-Zielook'),
  },

  '4t-2-Tyrion-Zielook-1': {
    championId: getChampionId('zilean'),
    playerMatchId: getPlayerGameId('4t-2-Tyrion-Zielook'),
  },
  '4t-2-Tyrion-Zielook-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-Tyrion-Zielook'),
  },
  '4t-2-Tyrion-Zielook-3': {
    championId: getChampionId('sona'),
    playerMatchId: getPlayerGameId('4t-2-Tyrion-Zielook'),
  },
  '4t-2-Zielook-Tyrion-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-Zielook-Tyrion'),
  },
  '4t-2-Zielook-Tyrion-2': {
    championId: getChampionId('miss_fortune'),
    playerMatchId: getPlayerGameId('4t-2-Zielook-Tyrion'),
  },
  '4t-2-Zielook-Tyrion-3': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('4t-2-Zielook-Tyrion'),
  },

  '4t-2-Kszesiek-Gabryjiel-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-2-Kszesiek-Gabryjiel'),
  },
  '4t-2-Kszesiek-Gabryjiel-2': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('4t-2-Kszesiek-Gabryjiel'),
  },
  '4t-2-Kszesiek-Gabryjiel-3': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-2-Kszesiek-Gabryjiel'),
  },
  '4t-2-Gabryjiel-Kszesiek-1': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('4t-2-Gabryjiel-Kszesiek'),
  },
  '4t-2-Gabryjiel-Kszesiek-2': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-2-Gabryjiel-Kszesiek'),
  },
  '4t-2-Gabryjiel-Kszesiek-3': {
    championId: getChampionId('gragas'),
    playerMatchId: getPlayerGameId('4t-2-Gabryjiel-Kszesiek'),
  },

  '4t-2-Kszesiek-Tyrion-1': {
    championId: getChampionId('jinx'),
    playerMatchId: getPlayerGameId('4t-2-Kszesiek-Tyrion'),
  },
  '4t-2-Kszesiek-Tyrion-2': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('4t-2-Kszesiek-Tyrion'),
  },
  '4t-2-Kszesiek-Tyrion-3': {
    championId: getChampionId('miss_fortune'),
    playerMatchId: getPlayerGameId('4t-2-Kszesiek-Tyrion'),
  },
  '4t-2-Tyrion-Kszesiek-1': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('4t-2-Tyrion-Kszesiek'),
  },
  '4t-2-Tyrion-Kszesiek-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-Tyrion-Kszesiek'),
  },
  '4t-2-Tyrion-Kszesiek-3': {
    championId: getChampionId('karma'),
    playerMatchId: getPlayerGameId('4t-2-Tyrion-Kszesiek'),
  },

  '4t-2-Zielook-Gabryjiel-1': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('4t-2-Zielook-Gabryjiel'),
  },
  '4t-2-Zielook-Gabryjiel-2': {
    championId: getChampionId('lulu'),
    playerMatchId: getPlayerGameId('4t-2-Zielook-Gabryjiel'),
  },
  '4t-2-Zielook-Gabryjiel-3': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-2-Zielook-Gabryjiel'),
  },
  '4t-2-Gabryjiel-Zielook-1': {
    championId: getChampionId('karma'),
    playerMatchId: getPlayerGameId('4t-2-Gabryjiel-Zielook'),
  },
  '4t-2-Gabryjiel-Zielook-2': {
    championId: getChampionId('zilean'),
    playerMatchId: getPlayerGameId('4t-2-Gabryjiel-Zielook'),
  },
  '4t-2-Gabryjiel-Zielook-3': {
    championId: getChampionId('miss_fortune'),
    playerMatchId: getPlayerGameId('4t-2-Gabryjiel-Zielook'),
  },

  '4t-2-Zielook-Kszesiek-1': {
    championId: getChampionId('gragas'),
    playerMatchId: getPlayerGameId('4t-2-Zielook-Kszesiek'),
  },
  '4t-2-Zielook-Kszesiek-2': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('4t-2-Zielook-Kszesiek'),
  },
  '4t-2-Zielook-Kszesiek-3': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-2-Zielook-Kszesiek'),
  },
  '4t-2-Kszesiek-Zielook-1': {
    championId: getChampionId('zilean'),
    playerMatchId: getPlayerGameId('4t-2-Kszesiek-Zielook'),
  },
  '4t-2-Kszesiek-Zielook-2': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-2-Kszesiek-Zielook'),
  },
  '4t-2-Kszesiek-Zielook-3': {
    championId: getChampionId('karma'),
    playerMatchId: getPlayerGameId('4t-2-Kszesiek-Zielook'),
  },

  '4t-2-Tyrion-Gabryjiel-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-2-Tyrion-Gabryjiel'),
  },
  '4t-2-Tyrion-Gabryjiel-2': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('4t-2-Tyrion-Gabryjiel'),
  },
  '4t-2-Tyrion-Gabryjiel-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-Tyrion-Gabryjiel'),
  },
  '4t-2-Gabryjiel-Tyrion-1': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('4t-2-Gabryjiel-Tyrion'),
  },
  '4t-2-Gabryjiel-Tyrion-2': {
    championId: getChampionId('miss_fortune'),
    playerMatchId: getPlayerGameId('4t-2-Gabryjiel-Tyrion'),
  },
  '4t-2-Gabryjiel-Tyrion-3': {
    championId: getChampionId('varus'),
    playerMatchId: getPlayerGameId('4t-2-Gabryjiel-Tyrion'),
  },

  '4t-elenath-szym14w-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-elenath-szym14w'),
  },
  '4t-elenath-szym14w-2': {
    championId: getChampionId('heimerdinger'),
    playerMatchId: getPlayerGameId('4t-elenath-szym14w'),
  },
  '4t-elenath-szym14w-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-elenath-szym14w'),
  },
  '4t-szym14w-elenath-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-szym14w-elenath'),
  },
  '4t-szym14w-elenath-2': {
    championId: getChampionId('annie'),
    playerMatchId: getPlayerGameId('4t-szym14w-elenath'),
  },
  '4t-szym14w-elenath-3': {
    championId: getChampionId('talon'),
    playerMatchId: getPlayerGameId('4t-szym14w-elenath'),
  },

  '4t-elenath-LerioN-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-elenath-LerioN'),
  },
  '4t-elenath-LerioN-2': {
    championId: getChampionId('heimerdinger'),
    playerMatchId: getPlayerGameId('4t-elenath-LerioN'),
  },
  '4t-elenath-LerioN-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-elenath-LerioN'),
  },
  '4t-LerioN-elenath-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-LerioN-elenath'),
  },
  '4t-LerioN-elenath-2': {
    championId: getChampionId('annie'),
    playerMatchId: getPlayerGameId('4t-LerioN-elenath'),
  },
  '4t-LerioN-elenath-3': {
    championId: getChampionId('talon'),
    playerMatchId: getPlayerGameId('4t-LerioN-elenath'),
  },

  '4t-2-Sebix320-elenath-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-Sebix320-elenath'),
  },
  '4t-2-Sebix320-elenath-2': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-2-Sebix320-elenath'),
  },
  '4t-2-Sebix320-elenath-3': {
    championId: getChampionId('jax'),
    playerMatchId: getPlayerGameId('4t-2-Sebix320-elenath'),
  },
  '4t-2-elenath-Sebix320-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-elenath-Sebix320'),
  },
  '4t-2-elenath-Sebix320-2': {
    championId: getChampionId('jhin'),
    playerMatchId: getPlayerGameId('4t-2-elenath-Sebix320'),
  },
  '4t-2-elenath-Sebix320-3': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('4t-2-elenath-Sebix320'),
  },

  '4t-2-LerioN-elenath-1': {
    championId: getChampionId('miss_fortune'),
    playerMatchId: getPlayerGameId('4t-2-LerioN-elenath'),
  },
  '4t-2-LerioN-elenath-2': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-2-LerioN-elenath'),
  },
  '4t-2-LerioN-elenath-3': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-2-LerioN-elenath'),
  },
  '4t-2-elenath-LerioN-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-elenath-LerioN'),
  },
  '4t-2-elenath-LerioN-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-elenath-LerioN'),
  },
  '4t-2-elenath-LerioN-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-2-elenath-LerioN'),
  },

  '4t-2-szym14w-elenath-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-szym14w-elenath'),
  },
  '4t-2-szym14w-elenath-2': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-2-szym14w-elenath'),
  },
  '4t-2-szym14w-elenath-3': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('4t-2-szym14w-elenath'),
  },
  '4t-2-elenath-szym14w-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-elenath-szym14w'),
  },
  '4t-2-elenath-szym14w-2': {
    championId: getChampionId('heimerdinger'),
    playerMatchId: getPlayerGameId('4t-2-elenath-szym14w'),
  },
  '4t-2-elenath-szym14w-3': {
    championId: getChampionId('varus'),
    playerMatchId: getPlayerGameId('4t-2-elenath-szym14w'),
  },

  '4t-Carafuro-ElGrande-1': {
    championId: getChampionId('gnar'),
    playerMatchId: getPlayerGameId('4t-Carafuro-ElGrande'),
  },
  '4t-Carafuro-ElGrande-2': {
    championId: getChampionId('lee_sin'),
    playerMatchId: getPlayerGameId('4t-Carafuro-ElGrande'),
  },
  '4t-Carafuro-ElGrande-3': {
    championId: getChampionId('kled'),
    playerMatchId: getPlayerGameId('4t-Carafuro-ElGrande'),
  },
  '4t-ElGrande-Carafuro-1': {
    championId: getChampionId('gangplank'),
    playerMatchId: getPlayerGameId('4t-ElGrande-Carafuro'),
  },
  '4t-ElGrande-Carafuro-2': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('4t-ElGrande-Carafuro'),
  },
  '4t-ElGrande-Carafuro-3': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('4t-ElGrande-Carafuro'),
  },

  '4t-JarosławOliwa-borekkb-1': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('4t-JarosławOliwa-borekkb'),
  },
  '4t-JarosławOliwa-borekkb-2': {
    championId: getChampionId('syndra'),
    playerMatchId: getPlayerGameId('4t-JarosławOliwa-borekkb'),
  },
  '4t-JarosławOliwa-borekkb-3': {
    championId: getChampionId('talon'),
    playerMatchId: getPlayerGameId('4t-JarosławOliwa-borekkb'),
  },
  '4t-borekkb-JarosławOliwa-1': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-borekkb-JarosławOliwa'),
  },
  '4t-borekkb-JarosławOliwa-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-borekkb-JarosławOliwa'),
  },
  '4t-borekkb-JarosławOliwa-3': {
    championId: getChampionId('gnar'),
    playerMatchId: getPlayerGameId('4t-borekkb-JarosławOliwa'),
  },

  '4t-Carafuro-borekkb-1': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-Carafuro-borekkb'),
  },
  '4t-Carafuro-borekkb-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-Carafuro-borekkb'),
  },
  '4t-Carafuro-borekkb-3': {
    championId: getChampionId('vayne'),
    playerMatchId: getPlayerGameId('4t-Carafuro-borekkb'),
  },
  '4t-borekkb-Carafuro-1': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('4t-borekkb-Carafuro'),
  },
  '4t-borekkb-Carafuro-2': {
    championId: getChampionId('graves'),
    playerMatchId: getPlayerGameId('4t-borekkb-Carafuro'),
  },
  '4t-borekkb-Carafuro-3': {
    championId: getChampionId('fiora'),
    playerMatchId: getPlayerGameId('4t-borekkb-Carafuro'),
  },

  '4t-JarosławOliwa-ElGrande-1': {
    championId: getChampionId('teemo'),
    playerMatchId: getPlayerGameId('4t-JarosławOliwa-ElGrande'),
  },
  '4t-JarosławOliwa-ElGrande-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-JarosławOliwa-ElGrande'),
  },
  '4t-JarosławOliwa-ElGrande-3': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-JarosławOliwa-ElGrande'),
  },
  '4t-ElGrande-JarosławOliwa-1': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('4t-ElGrande-JarosławOliwa'),
  },
  '4t-ElGrande-JarosławOliwa-2': {
    championId: getChampionId('kled'),
    playerMatchId: getPlayerGameId('4t-ElGrande-JarosławOliwa'),
  },
  '4t-ElGrande-JarosławOliwa-3': {
    championId: getChampionId('lee_sin'),
    playerMatchId: getPlayerGameId('4t-ElGrande-JarosławOliwa'),
  },

  '4t-Carafuro-JarosławOliwa-1': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('4t-Carafuro-JarosławOliwa'),
  },
  '4t-Carafuro-JarosławOliwa-2': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-Carafuro-JarosławOliwa'),
  },
  '4t-Carafuro-JarosławOliwa-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-Carafuro-JarosławOliwa'),
  },
  '4t-JarosławOliwa-Carafuro-1': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('4t-JarosławOliwa-Carafuro'),
  },
  '4t-JarosławOliwa-Carafuro-2': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('4t-JarosławOliwa-Carafuro'),
  },
  '4t-JarosławOliwa-Carafuro-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-JarosławOliwa-Carafuro'),
  },

  '4t-borekkb-ElGrande-1': {
    championId: getChampionId('gnar'),
    playerMatchId: getPlayerGameId('4t-borekkb-ElGrande'),
  },
  '4t-borekkb-ElGrande-2': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-borekkb-ElGrande'),
  },
  '4t-borekkb-ElGrande-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-borekkb-ElGrande'),
  },
  '4t-ElGrande-borekkb-1': {
    championId: getChampionId('kayn'),
    playerMatchId: getPlayerGameId('4t-ElGrande-borekkb'),
  },
  '4t-ElGrande-borekkb-2': {
    championId: getChampionId('vayne'),
    playerMatchId: getPlayerGameId('4t-ElGrande-borekkb'),
  },
  '4t-ElGrande-borekkb-3': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-ElGrande-borekkb'),
  },

  '4t-2-borekkb-ElGrande-1': {
    championId: getChampionId('gnar'),
    playerMatchId: getPlayerGameId('4t-2-borekkb-ElGrande'),
  },
  '4t-2-borekkb-ElGrande-2': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-2-borekkb-ElGrande'),
  },
  '4t-2-borekkb-ElGrande-3': {
    championId: getChampionId('kayn'),
    playerMatchId: getPlayerGameId('4t-2-borekkb-ElGrande'),
  },
  '4t-2-ElGrande-borekkb-1': {
    championId: getChampionId('kayn'),
    playerMatchId: getPlayerGameId('4t-2-ElGrande-borekkb'),
  },
  '4t-2-ElGrande-borekkb-2': {
    championId: getChampionId('vayne'),
    playerMatchId: getPlayerGameId('4t-2-ElGrande-borekkb'),
  },
  '4t-2-ElGrande-borekkb-3': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-2-ElGrande-borekkb'),
  },

  '4t-2-JarosławOliwa-Carafuro-1': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('4t-2-JarosławOliwa-Carafuro'),
  },
  '4t-2-JarosławOliwa-Carafuro-2': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('4t-2-JarosławOliwa-Carafuro'),
  },
  '4t-2-JarosławOliwa-Carafuro-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-JarosławOliwa-Carafuro'),
  },
  '4t-2-Carafuro-JarosławOliwa-1': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('4t-2-Carafuro-JarosławOliwa'),
  },
  '4t-2-Carafuro-JarosławOliwa-2': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-2-Carafuro-JarosławOliwa'),
  },
  '4t-2-Carafuro-JarosławOliwa-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-Carafuro-JarosławOliwa'),
  },

  '4t-2-JarosławOliwa-ElGrande-1': {
    championId: getChampionId('leona'),
    playerMatchId: getPlayerGameId('4t-2-JarosławOliwa-ElGrande'),
  },
  '4t-2-JarosławOliwa-ElGrande-2': {
    championId: getChampionId('teemo'),
    playerMatchId: getPlayerGameId('4t-2-JarosławOliwa-ElGrande'),
  },
  '4t-2-JarosławOliwa-ElGrande-3': {
    championId: getChampionId('vi'),
    playerMatchId: getPlayerGameId('4t-2-JarosławOliwa-ElGrande'),
  },
  '4t-2-ElGrande-JarosławOliwa-1': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('4t-2-ElGrande-JarosławOliwa'),
  },
  '4t-2-ElGrande-JarosławOliwa-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-ElGrande-JarosławOliwa'),
  },
  '4t-2-ElGrande-JarosławOliwa-3': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('4t-2-ElGrande-JarosławOliwa'),
  },

  '4t-2-borekkb-Carafuro-1': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('4t-2-borekkb-Carafuro'),
  },
  '4t-2-borekkb-Carafuro-2': {
    championId: getChampionId('graves'),
    playerMatchId: getPlayerGameId('4t-2-borekkb-Carafuro'),
  },
  '4t-2-borekkb-Carafuro-3': {
    championId: getChampionId('fiora'),
    playerMatchId: getPlayerGameId('4t-2-borekkb-Carafuro'),
  },
  '4t-2-Carafuro-borekkb-1': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-2-Carafuro-borekkb'),
  },
  '4t-2-Carafuro-borekkb-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-Carafuro-borekkb'),
  },
  '4t-2-Carafuro-borekkb-3': {
    championId: getChampionId('vayne'),
    playerMatchId: getPlayerGameId('4t-2-Carafuro-borekkb'),
  },

  '4t-2-borekkb-JarosławOliwa-1': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-2-borekkb-JarosławOliwa'),
  },
  '4t-2-borekkb-JarosławOliwa-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-borekkb-JarosławOliwa'),
  },
  '4t-2-borekkb-JarosławOliwa-3': {
    championId: getChampionId('gnar'),
    playerMatchId: getPlayerGameId('4t-2-borekkb-JarosławOliwa'),
  },
  '4t-2-JarosławOliwa-borekkb-1': {
    championId: getChampionId('xayah'),
    playerMatchId: getPlayerGameId('4t-2-JarosławOliwa-borekkb'),
  },
  '4t-2-JarosławOliwa-borekkb-2': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('4t-2-JarosławOliwa-borekkb'),
  },
  '4t-2-JarosławOliwa-borekkb-3': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('4t-2-JarosławOliwa-borekkb'),
  },

  '4t-2-Carafuro-ElGrande-1': {
    championId: getChampionId('gnar'),
    playerMatchId: getPlayerGameId('4t-2-Carafuro-ElGrande'),
  },
  '4t-2-Carafuro-ElGrande-2': {
    championId: getChampionId('lee_sin'),
    playerMatchId: getPlayerGameId('4t-2-Carafuro-ElGrande'),
  },
  '4t-2-Carafuro-ElGrande-3': {
    championId: getChampionId('kled'),
    playerMatchId: getPlayerGameId('4t-2-Carafuro-ElGrande'),
  },
  '4t-2-ElGrande-Carafuro-1': {
    championId: getChampionId('gangplank'),
    playerMatchId: getPlayerGameId('4t-2-ElGrande-Carafuro'),
  },
  '4t-2-ElGrande-Carafuro-2': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('4t-2-ElGrande-Carafuro'),
  },
  '4t-2-ElGrande-Carafuro-3': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('4t-2-ElGrande-Carafuro'),
  },

  '4t-PanAngar-HezikPL-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-PanAngar-HezikPL'),
  },
  '4t-PanAngar-HezikPL-2': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-PanAngar-HezikPL'),
  },
  '4t-PanAngar-HezikPL-3': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('4t-PanAngar-HezikPL'),
  },
  '4t-HezikPL-PanAngar-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-HezikPL-PanAngar'),
  },
  '4t-HezikPL-PanAngar-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-HezikPL-PanAngar'),
  },
  '4t-HezikPL-PanAngar-3': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('4t-HezikPL-PanAngar'),
  },

  '4t-Dyszka-iiri-1': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-Dyszka-iiri'),
  },
  '4t-Dyszka-iiri-2': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('4t-Dyszka-iiri'),
  },
  '4t-Dyszka-iiri-3': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-Dyszka-iiri'),
  },
  '4t-iiri-Dyszka-1': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-iiri-Dyszka'),
  },
  '4t-iiri-Dyszka-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-iiri-Dyszka'),
  },
  '4t-iiri-Dyszka-3': {
    championId: getChampionId('xayah'),
    playerMatchId: getPlayerGameId('4t-iiri-Dyszka'),
  },

  '4t-PanAngar-iiri-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-PanAngar-iiri'),
  },
  '4t-PanAngar-iiri-2': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-PanAngar-iiri'),
  },
  '4t-PanAngar-iiri-3': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-PanAngar-iiri'),
  },
  '4t-iiri-PanAngar-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-iiri-PanAngar'),
  },
  '4t-iiri-PanAngar-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-iiri-PanAngar'),
  },

  '4t-HezikPL-Dyszka-1': {
    championId: getChampionId('urgot'),
    playerMatchId: getPlayerGameId('4t-HezikPL-Dyszka'),
  },
  '4t-HezikPL-Dyszka-2': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-HezikPL-Dyszka'),
  },
  '4t-HezikPL-Dyszka-3': {
    championId: getChampionId('sion'),
    playerMatchId: getPlayerGameId('4t-HezikPL-Dyszka'),
  },
  '4t-Dyszka-HezikPL-1': {
    championId: getChampionId('annie'),
    playerMatchId: getPlayerGameId('4t-Dyszka-HezikPL'),
  },
  '4t-Dyszka-HezikPL-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-Dyszka-HezikPL'),
  },
  '4t-Dyszka-HezikPL-3': {
    championId: getChampionId('sion'),
    playerMatchId: getPlayerGameId('4t-Dyszka-HezikPL'),
  },

  '4t-PanAngar-Dyszka-1': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-PanAngar-Dyszka'),
  },
  '4t-PanAngar-Dyszka-2': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-PanAngar-Dyszka'),
  },
  '4t-PanAngar-Dyszka-3': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-PanAngar-Dyszka'),
  },
  '4t-Dyszka-PanAngar-1': {
    championId: getChampionId('urgot'),
    playerMatchId: getPlayerGameId('4t-Dyszka-PanAngar'),
  },
  '4t-Dyszka-PanAngar-2': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-Dyszka-PanAngar'),
  },
  '4t-Dyszka-PanAngar-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-Dyszka-PanAngar'),
  },

  '4t-iiri-HezikPL-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-iiri-HezikPL'),
  },
  '4t-iiri-HezikPL-2': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-iiri-HezikPL'),
  },
  '4t-iiri-HezikPL-3': {
    championId: getChampionId('cassiopeia'),
    playerMatchId: getPlayerGameId('4t-iiri-HezikPL'),
  },
  '4t-HezikPL-iiri-1': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-HezikPL-iiri'),
  },
  '4t-HezikPL-iiri-2': {
    championId: getChampionId('teemo'),
    playerMatchId: getPlayerGameId('4t-HezikPL-iiri'),
  },
  '4t-HezikPL-iiri-3': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-HezikPL-iiri'),
  },

  '4t-2-iiri-HezikPL-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-iiri-HezikPL'),
  },
  '4t-2-iiri-HezikPL-2': {
    championId: getChampionId('cassiopeia'),
    playerMatchId: getPlayerGameId('4t-2-iiri-HezikPL'),
  },
  '4t-2-iiri-HezikPL-3': {
    championId: getChampionId('teemo'),
    playerMatchId: getPlayerGameId('4t-2-iiri-HezikPL'),
  },
  '4t-2-HezikPL-iiri-1': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-2-HezikPL-iiri'),
  },
  '4t-2-HezikPL-iiri-2': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-2-HezikPL-iiri'),
  },
  '4t-2-HezikPL-iiri-3': {
    championId: getChampionId('malphite'),
    playerMatchId: getPlayerGameId('4t-2-HezikPL-iiri'),
  },

  '4t-2-Dyszka-PanAngar-1': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-2-Dyszka-PanAngar'),
  },
  '4t-2-Dyszka-PanAngar-2': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('4t-2-Dyszka-PanAngar'),
  },
  '4t-2-Dyszka-PanAngar-3': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-2-Dyszka-PanAngar'),
  },
  '4t-2-PanAngar-Dyszka-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-2-PanAngar-Dyszka'),
  },
  '4t-2-PanAngar-Dyszka-2': {
    championId: getChampionId('urgot'),
    playerMatchId: getPlayerGameId('4t-2-PanAngar-Dyszka'),
  },
  '4t-2-PanAngar-Dyszka-3': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-2-PanAngar-Dyszka'),
  },

  '4t-2-Dyszka-HezikPL-1': {
    championId: getChampionId('gnar'),
    playerMatchId: getPlayerGameId('4t-2-Dyszka-HezikPL'),
  },
  '4t-2-Dyszka-HezikPL-2': {
    championId: getChampionId('jinx'),
    playerMatchId: getPlayerGameId('4t-2-Dyszka-HezikPL'),
  },
  '4t-2-Dyszka-HezikPL-3': {
    championId: getChampionId('vayne'),
    playerMatchId: getPlayerGameId('4t-2-Dyszka-HezikPL'),
  },
  '4t-2-HezikPL-Dyszka-1': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-2-HezikPL-Dyszka'),
  },
  '4t-2-HezikPL-Dyszka-2': {
    championId: getChampionId('cassiopeia'),
    playerMatchId: getPlayerGameId('4t-2-HezikPL-Dyszka'),
  },
  '4t-2-HezikPL-Dyszka-3': {
    championId: getChampionId('annie'),
    playerMatchId: getPlayerGameId('4t-2-HezikPL-Dyszka'),
  },

  '4t-2-iiri-PanAngar-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-iiri-PanAngar'),
  },
  '4t-2-iiri-PanAngar-2': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-2-iiri-PanAngar'),
  },
  '4t-2-iiri-PanAngar-3': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-2-iiri-PanAngar'),
  },
  '4t-2-PanAngar-iiri-1': {
    championId: getChampionId('heimerdinger'),
    playerMatchId: getPlayerGameId('4t-2-PanAngar-iiri'),
  },
  '4t-2-PanAngar-iiri-2': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-2-PanAngar-iiri'),
  },
  '4t-2-PanAngar-iiri-3': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-2-PanAngar-iiri'),
  },

  '4t-2-iiri-Dyszka-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-iiri-Dyszka'),
  },
  '4t-2-iiri-Dyszka-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-iiri-Dyszka'),
  },
  '4t-2-iiri-Dyszka-3': {
    championId: getChampionId('xayah'),
    playerMatchId: getPlayerGameId('4t-2-iiri-Dyszka'),
  },
  '4t-2-Dyszka-iiri-1': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('4t-2-Dyszka-iiri'),
  },
  '4t-2-Dyszka-iiri-2': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-2-Dyszka-iiri'),
  },
  '4t-2-Dyszka-iiri-3': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-2-Dyszka-iiri'),
  },

  '4t-2-HezikPL-PanAngar-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-2-HezikPL-PanAngar'),
  },
  '4t-2-HezikPL-PanAngar-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-2-HezikPL-PanAngar'),
  },
  '4t-2-HezikPL-PanAngar-3': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-2-HezikPL-PanAngar'),
  },
  '4t-2-PanAngar-HezikPL-1': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-2-PanAngar-HezikPL'),
  },
  '4t-2-PanAngar-HezikPL-2': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-2-PanAngar-HezikPL'),
  },
  '4t-2-PanAngar-HezikPL-3': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-2-PanAngar-HezikPL'),
  },

  '4t-1/8-Kup se dzieci-Paweł-1': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('4t-1/8-Kup se dzieci-Paweł'),
  },
  '4t-1/8-Kup se dzieci-Paweł-2': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('4t-1/8-Kup se dzieci-Paweł'),
  },
  '4t-1/8-Kup se dzieci-Paweł-3': {
    championId: getChampionId('urgot'),
    playerMatchId: getPlayerGameId('4t-1/8-Kup se dzieci-Paweł'),
  },
  '4t-1/8-Paweł-Kup se dzieci-1': {
    championId: getChampionId('diana'),
    playerMatchId: getPlayerGameId('4t-1/8-Paweł-Kup se dzieci'),
  },
  '4t-1/8-Paweł-Kup se dzieci-2': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-1/8-Paweł-Kup se dzieci'),
  },
  '4t-1/8-Paweł-Kup se dzieci-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-1/8-Paweł-Kup se dzieci'),
  },

  '4t-1/8-PanAngar-LerioN-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-1/8-PanAngar-LerioN'),
  },
  '4t-1/8-PanAngar-LerioN-2': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-1/8-PanAngar-LerioN'),
  },
  '4t-1/8-PanAngar-LerioN-3': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-1/8-PanAngar-LerioN'),
  },
  '4t-1/8-LerioN-PanAngar-1': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('4t-1/8-LerioN-PanAngar'),
  },
  '4t-1/8-LerioN-PanAngar-2': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('4t-1/8-LerioN-PanAngar'),
  },
  '4t-1/8-LerioN-PanAngar-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-1/8-LerioN-PanAngar'),
  },

  '4t-1/8-2-PanAngar-LerioN-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-1/8-2-PanAngar-LerioN'),
  },
  '4t-1/8-2-PanAngar-LerioN-2': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-1/8-2-PanAngar-LerioN'),
  },
  '4t-1/8-2-PanAngar-LerioN-3': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-1/8-2-PanAngar-LerioN'),
  },
  '4t-1/8-2-LerioN-PanAngar-1': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('4t-1/8-2-LerioN-PanAngar'),
  },
  '4t-1/8-2-LerioN-PanAngar-2': {
    championId: getChampionId('miss_fortune'),
    playerMatchId: getPlayerGameId('4t-1/8-2-LerioN-PanAngar'),
  },
  '4t-1/8-2-LerioN-PanAngar-3': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-1/8-2-LerioN-PanAngar'),
  },

  '4t-1/8-Gabryjiel-Dawcio1289-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-1/8-Gabryjiel-Dawcio1289'),
  },
  '4t-1/8-Gabryjiel-Dawcio1289-2': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('4t-1/8-Gabryjiel-Dawcio1289'),
  },
  '4t-1/8-Gabryjiel-Dawcio1289-3': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-1/8-Gabryjiel-Dawcio1289'),
  },
  '4t-1/8-Dawcio1289-Gabryjiel-1': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('4t-1/8-Dawcio1289-Gabryjiel'),
  },
  '4t-1/8-Dawcio1289-Gabryjiel-2': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-1/8-Dawcio1289-Gabryjiel'),
  },
  '4t-1/8-Dawcio1289-Gabryjiel-3': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-1/8-Dawcio1289-Gabryjiel'),
  },

  '4t-1/8-2-Gabryjiel-Dawcio1289-1': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Gabryjiel-Dawcio1289'),
  },
  '4t-1/8-2-Gabryjiel-Dawcio1289-2': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Gabryjiel-Dawcio1289'),
  },
  '4t-1/8-2-Gabryjiel-Dawcio1289-3': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Gabryjiel-Dawcio1289'),
  },
  '4t-1/8-2-Dawcio1289-Gabryjiel-1': {
    championId: getChampionId('lulu'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Dawcio1289-Gabryjiel'),
  },
  '4t-1/8-2-Dawcio1289-Gabryjiel-2': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Dawcio1289-Gabryjiel'),
  },
  '4t-1/8-2-Dawcio1289-Gabryjiel-3': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Dawcio1289-Gabryjiel'),
  },

  '4t-1/8-Carafuro-Tyrion-1': {
    championId: getChampionId('jax'),
    playerMatchId: getPlayerGameId('4t-1/8-Carafuro-Tyrion'),
  },
  '4t-1/8-Carafuro-Tyrion-2': {
    championId: getChampionId('warwick'),
    playerMatchId: getPlayerGameId('4t-1/8-Carafuro-Tyrion'),
  },
  '4t-1/8-Carafuro-Tyrion-3': {
    championId: getChampionId('jinx'),
    playerMatchId: getPlayerGameId('4t-1/8-Carafuro-Tyrion'),
  },
  '4t-1/8-Tyrion-Carafuro-1': {
    championId: getChampionId('ornn'),
    playerMatchId: getPlayerGameId('4t-1/8-Tyrion-Carafuro'),
  },
  '4t-1/8-Tyrion-Carafuro-2': {
    championId: getChampionId('graves'),
    playerMatchId: getPlayerGameId('4t-1/8-Tyrion-Carafuro'),
  },
  '4t-1/8-Tyrion-Carafuro-3': {
    championId: getChampionId('lulu'),
    playerMatchId: getPlayerGameId('4t-1/8-Tyrion-Carafuro'),
  },

  '4t-1/8-2-Carafuro-Tyrion-1': {
    championId: getChampionId('jax'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Carafuro-Tyrion'),
  },
  '4t-1/8-2-Carafuro-Tyrion-2': {
    championId: getChampionId('warwick'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Carafuro-Tyrion'),
  },
  '4t-1/8-2-Carafuro-Tyrion-3': {
    championId: getChampionId('jinx'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Carafuro-Tyrion'),
  },
  '4t-1/8-2-Tyrion-Carafuro-1': {
    championId: getChampionId('ornn'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Tyrion-Carafuro'),
  },
  '4t-1/8-2-Tyrion-Carafuro-2': {
    championId: getChampionId('graves'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Tyrion-Carafuro'),
  },
  '4t-1/8-2-Tyrion-Carafuro-3': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Tyrion-Carafuro'),
  },

  '4t-1/8-Fefurusek-B00MEK221-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-1/8-Fefurusek-B00MEK221'),
  },
  '4t-1/8-Fefurusek-B00MEK221-2': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-1/8-Fefurusek-B00MEK221'),
  },
  '4t-1/8-Fefurusek-B00MEK221-3': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-1/8-Fefurusek-B00MEK221'),
  },
  '4t-1/8-B00MEK221-Fefurusek-1': {
    championId: getChampionId('renekton'),
    playerMatchId: getPlayerGameId('4t-1/8-B00MEK221-Fefurusek'),
  },
  '4t-1/8-B00MEK221-Fefurusek-2': {
    championId: getChampionId('camille'),
    playerMatchId: getPlayerGameId('4t-1/8-B00MEK221-Fefurusek'),
  },
  '4t-1/8-B00MEK221-Fefurusek-3': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-1/8-B00MEK221-Fefurusek'),
  },

  '4t-1/8-2-Fefurusek-B00MEK221-1': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Fefurusek-B00MEK221'),
  },
  '4t-1/8-2-Fefurusek-B00MEK221-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Fefurusek-B00MEK221'),
  },
  '4t-1/8-2-Fefurusek-B00MEK221-3': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Fefurusek-B00MEK221'),
  },
  '4t-1/8-2-B00MEK221-Fefurusek-1': {
    championId: getChampionId('ornn'),
    playerMatchId: getPlayerGameId('4t-1/8-2-B00MEK221-Fefurusek'),
  },
  '4t-1/8-2-B00MEK221-Fefurusek-2': {
    championId: getChampionId('renekton'),
    playerMatchId: getPlayerGameId('4t-1/8-2-B00MEK221-Fefurusek'),
  },
  '4t-1/8-2-B00MEK221-Fefurusek-3': {
    championId: getChampionId('camille'),
    playerMatchId: getPlayerGameId('4t-1/8-2-B00MEK221-Fefurusek'),
  },

  '4t-1/8-elenath-Pyther-1': {
    championId: getChampionId('gragas'),
    playerMatchId: getPlayerGameId('4t-1/8-elenath-Pyther'),
  },
  '4t-1/8-elenath-Pyther-2': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('4t-1/8-elenath-Pyther'),
  },
  '4t-1/8-elenath-Pyther-3': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('4t-1/8-elenath-Pyther'),
  },
  '4t-1/8-Pyther-elenath-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-1/8-Pyther-elenath'),
  },
  '4t-1/8-Pyther-elenath-2': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('4t-1/8-Pyther-elenath'),
  },
  '4t-1/8-Pyther-elenath-3': {
    championId: getChampionId('miss_fortune'),
    playerMatchId: getPlayerGameId('4t-1/8-Pyther-elenath'),
  },

  '4t-1/8-2-elenath-Pyther-1': {
    championId: getChampionId('urgot'),
    playerMatchId: getPlayerGameId('4t-1/8-2-elenath-Pyther'),
  },
  '4t-1/8-2-elenath-Pyther-2': {
    championId: getChampionId('gragas'),
    playerMatchId: getPlayerGameId('4t-1/8-2-elenath-Pyther'),
  },
  '4t-1/8-2-elenath-Pyther-3': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('4t-1/8-2-elenath-Pyther'),
  },
  '4t-1/8-2-Pyther-elenath-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Pyther-elenath'),
  },
  '4t-1/8-2-Pyther-elenath-2': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Pyther-elenath'),
  },
  '4t-1/8-2-Pyther-elenath-3': {
    championId: getChampionId('syndra'),
    playerMatchId: getPlayerGameId('4t-1/8-2-Pyther-elenath'),
  },

  '4t-1/4-Kup se dzieci-PanAngar-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-1/4-Kup se dzieci-PanAngar'),
  },
  '4t-1/4-Kup se dzieci-PanAngar-2': {
    championId: getChampionId('talon'),
    playerMatchId: getPlayerGameId('4t-1/4-Kup se dzieci-PanAngar'),
  },
  '4t-1/4-Kup se dzieci-PanAngar-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-1/4-Kup se dzieci-PanAngar'),
  },
  '4t-1/4-PanAngar-Kup se dzieci-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-1/4-PanAngar-Kup se dzieci'),
  },
  '4t-1/4-PanAngar-Kup se dzieci-2': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-1/4-PanAngar-Kup se dzieci'),
  },
  '4t-1/4-PanAngar-Kup se dzieci-3': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-1/4-PanAngar-Kup se dzieci'),
  },

  '4t-1/4-2-Kup se dzieci-PanAngar-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-1/4-2-Kup se dzieci-PanAngar'),
  },
  '4t-1/4-2-Kup se dzieci-PanAngar-2': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-1/4-2-Kup se dzieci-PanAngar'),
  },
  '4t-1/4-2-Kup se dzieci-PanAngar-3': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-1/4-2-Kup se dzieci-PanAngar'),
  },
  '4t-1/4-2-PanAngar-Kup se dzieci-1': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-1/4-2-PanAngar-Kup se dzieci'),
  },
  '4t-1/4-2-PanAngar-Kup se dzieci-2': {
    championId: getChampionId('talon'),
    playerMatchId: getPlayerGameId('4t-1/4-2-PanAngar-Kup se dzieci'),
  },
  '4t-1/4-2-PanAngar-Kup se dzieci-3': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-1/4-2-PanAngar-Kup se dzieci'),
  },

  '4t-1/4-JarosławOliwa-Gabryjiel-1': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('4t-1/4-JarosławOliwa-Gabryjiel'),
  },
  '4t-1/4-JarosławOliwa-Gabryjiel-2': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-1/4-JarosławOliwa-Gabryjiel'),
  },
  '4t-1/4-JarosławOliwa-Gabryjiel-3': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-1/4-JarosławOliwa-Gabryjiel'),
  },
  '4t-1/4-Gabryjiel-JarosławOliwa-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-1/4-Gabryjiel-JarosławOliwa'),
  },
  '4t-1/4-Gabryjiel-JarosławOliwa-2': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-1/4-Gabryjiel-JarosławOliwa'),
  },
  '4t-1/4-Gabryjiel-JarosławOliwa-3': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-1/4-Gabryjiel-JarosławOliwa'),
  },

  '4t-1/4-2-JarosławOliwa-Gabryjiel-1': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-1/4-2-JarosławOliwa-Gabryjiel'),
  },
  '4t-1/4-2-JarosławOliwa-Gabryjiel-2': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-1/4-2-JarosławOliwa-Gabryjiel'),
  },
  '4t-1/4-2-JarosławOliwa-Gabryjiel-3': {
    championId: getChampionId('varus'),
    playerMatchId: getPlayerGameId('4t-1/4-2-JarosławOliwa-Gabryjiel'),
  },
  '4t-1/4-2-Gabryjiel-JarosławOliwa-1': {
    championId: getChampionId('katarina'),
    playerMatchId: getPlayerGameId('4t-1/4-2-Gabryjiel-JarosławOliwa'),
  },
  '4t-1/4-2-Gabryjiel-JarosławOliwa-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-1/4-2-Gabryjiel-JarosławOliwa'),
  },
  '4t-1/4-2-Gabryjiel-JarosławOliwa-3': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('4t-1/4-2-Gabryjiel-JarosławOliwa'),
  },

  '4t-1/4-Fefurusek-elenath-1': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('4t-1/4-Fefurusek-elenath'),
  },
  '4t-1/4-Fefurusek-elenath-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-1/4-Fefurusek-elenath'),
  },
  '4t-1/4-Fefurusek-elenath-3': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-1/4-Fefurusek-elenath'),
  },
  '4t-1/4-elenath-Fefurusek-1': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('4t-1/4-elenath-Fefurusek'),
  },
  '4t-1/4-elenath-Fefurusek-2': {
    championId: getChampionId('renekton'),
    playerMatchId: getPlayerGameId('4t-1/4-elenath-Fefurusek'),
  },
  '4t-1/4-elenath-Fefurusek-3': {
    championId: getChampionId('camille'),
    playerMatchId: getPlayerGameId('4t-1/4-elenath-Fefurusek'),
  },
  '4t-1/4-2-Fefurusek-elenath-1': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('4t-1/4-2-Fefurusek-elenath'),
  },
  '4t-1/4-2-Fefurusek-elenath-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-1/4-2-Fefurusek-elenath'),
  },
  '4t-1/4-2-Fefurusek-elenath-3': {
    championId: getChampionId('heimerdinger'),
    playerMatchId: getPlayerGameId('4t-1/4-2-Fefurusek-elenath'),
  },
  '4t-1/4-2-elenath-Fefurusek-1': {
    championId: getChampionId('camille'),
    playerMatchId: getPlayerGameId('4t-1/4-2-elenath-Fefurusek'),
  },
  '4t-1/4-2-elenath-Fefurusek-2': {
    championId: getChampionId('renekton'),
    playerMatchId: getPlayerGameId('4t-1/4-2-elenath-Fefurusek'),
  },
  '4t-1/4-2-elenath-Fefurusek-3': {
    championId: getChampionId('ornn'),
    playerMatchId: getPlayerGameId('4t-1/4-2-elenath-Fefurusek'),
  },

  '4t-1/2-PanAngar-Gabryjiel-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('4t-1/2-PanAngar-Gabryjiel'),
  },
  '4t-1/2-PanAngar-Gabryjiel-2': {
    championId: getChampionId('lulu'),
    playerMatchId: getPlayerGameId('4t-1/2-PanAngar-Gabryjiel'),
  },
  '4t-1/2-PanAngar-Gabryjiel-3': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('4t-1/2-PanAngar-Gabryjiel'),
  },
  '4t-1/2-Gabryjiel-PanAngar-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-1/2-Gabryjiel-PanAngar'),
  },
  '4t-1/2-Gabryjiel-PanAngar-2': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-1/2-Gabryjiel-PanAngar'),
  },
  '4t-1/2-Gabryjiel-PanAngar-3': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('4t-1/2-Gabryjiel-PanAngar'),
  },
  '4t-1/2-2-PanAngar-Gabryjiel-1': {
    championId: getChampionId('yorick'),
    playerMatchId: getPlayerGameId('4t-1/2-2-PanAngar-Gabryjiel'),
  },
  '4t-1/2-2-PanAngar-Gabryjiel-2': {
    championId: getChampionId('vi'),
    playerMatchId: getPlayerGameId('4t-1/2-2-PanAngar-Gabryjiel'),
  },
  '4t-1/2-2-PanAngar-Gabryjiel-3': {
    championId: getChampionId('malphite'),
    playerMatchId: getPlayerGameId('4t-1/2-2-PanAngar-Gabryjiel'),
  },
  '4t-1/2-2-Gabryjiel-PanAngar-1': {
    championId: getChampionId('fiddlesticks'),
    playerMatchId: getPlayerGameId('4t-1/2-2-Gabryjiel-PanAngar'),
  },
  '4t-1/2-2-Gabryjiel-PanAngar-2': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-1/2-2-Gabryjiel-PanAngar'),
  },
  '4t-1/2-2-Gabryjiel-PanAngar-3': {
    championId: getChampionId('udyr'),
    playerMatchId: getPlayerGameId('4t-1/2-2-Gabryjiel-PanAngar'),
  },

  '4t-3rd-Fefurusek-PanAngar-1': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('4t-3rd-Fefurusek-PanAngar'),
  },
  '4t-3rd-Fefurusek-PanAngar-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('4t-3rd-Fefurusek-PanAngar'),
  },
  '4t-3rd-Fefurusek-PanAngar-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-3rd-Fefurusek-PanAngar'),
  },
  '4t-3rd-PanAngar-Fefurusek-1': {
    championId: getChampionId('camille'),
    playerMatchId: getPlayerGameId('4t-3rd-PanAngar-Fefurusek'),
  },
  '4t-3rd-PanAngar-Fefurusek-2': {
    championId: getChampionId('dr_mundo'),
    playerMatchId: getPlayerGameId('4t-3rd-PanAngar-Fefurusek'),
  },
  '4t-3rd-PanAngar-Fefurusek-3': {
    championId: getChampionId('renekton'),
    playerMatchId: getPlayerGameId('4t-3rd-PanAngar-Fefurusek'),
  },
  '4t-3rd-2-Fefurusek-PanAngar-1': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-3rd-2-Fefurusek-PanAngar'),
  },
  '4t-3rd-2-Fefurusek-PanAngar-2': {
    championId: getChampionId('varus'),
    playerMatchId: getPlayerGameId('4t-3rd-2-Fefurusek-PanAngar'),
  },
  '4t-3rd-2-Fefurusek-PanAngar-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-3rd-2-Fefurusek-PanAngar'),
  },
  '4t-3rd-2-PanAngar-Fefurusek-1': {
    championId: getChampionId('camille'),
    playerMatchId: getPlayerGameId('4t-3rd-2-PanAngar-Fefurusek'),
  },
  '4t-3rd-2-PanAngar-Fefurusek-2': {
    championId: getChampionId('dr_mundo'),
    playerMatchId: getPlayerGameId('4t-3rd-2-PanAngar-Fefurusek'),
  },
  '4t-3rd-2-PanAngar-Fefurusek-3': {
    championId: getChampionId('renekton'),
    playerMatchId: getPlayerGameId('4t-3rd-2-PanAngar-Fefurusek'),
  },
  '4t-3rd-3-Fefurusek-PanAngar-1': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-3rd-3-Fefurusek-PanAngar'),
  },
  '4t-3rd-3-Fefurusek-PanAngar-2': {
    championId: getChampionId('varus'),
    playerMatchId: getPlayerGameId('4t-3rd-3-Fefurusek-PanAngar'),
  },
  '4t-3rd-3-Fefurusek-PanAngar-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('4t-3rd-3-Fefurusek-PanAngar'),
  },
  '4t-3rd-3-PanAngar-Fefurusek-1': {
    championId: getChampionId('renekton'),
    playerMatchId: getPlayerGameId('4t-3rd-3-PanAngar-Fefurusek'),
  },
  '4t-3rd-3-PanAngar-Fefurusek-2': {
    championId: getChampionId('camille'),
    playerMatchId: getPlayerGameId('4t-3rd-3-PanAngar-Fefurusek'),
  },
  '4t-3rd-3-PanAngar-Fefurusek-3': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-3rd-3-PanAngar-Fefurusek'),
  },

  '4t-final-Gabryjiel-Carafuro-1': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-final-Gabryjiel-Carafuro'),
  },
  '4t-final-Gabryjiel-Carafuro-2': {
    championId: getChampionId('gangplank'),
    playerMatchId: getPlayerGameId('4t-final-Gabryjiel-Carafuro'),
  },
  '4t-final-Gabryjiel-Carafuro-3': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('4t-final-Gabryjiel-Carafuro'),
  },
  '4t-final-Carafuro-Gabryjiel-1': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('4t-final-Carafuro-Gabryjiel'),
  },
  '4t-final-Carafuro-Gabryjiel-2': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-final-Carafuro-Gabryjiel'),
  },
  '4t-final-Carafuro-Gabryjiel-3': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('4t-final-Carafuro-Gabryjiel'),
  },
  '4t-final-2-Gabryjiel-Carafuro-1': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-final-2-Gabryjiel-Carafuro'),
  },
  '4t-final-2-Gabryjiel-Carafuro-2': {
    championId: getChampionId('gangplank'),
    playerMatchId: getPlayerGameId('4t-final-2-Gabryjiel-Carafuro'),
  },
  '4t-final-2-Gabryjiel-Carafuro-3': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('4t-final-2-Gabryjiel-Carafuro'),
  },
  '4t-final-2-Carafuro-Gabryjiel-1': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('4t-final-2-Carafuro-Gabryjiel'),
  },
  '4t-final-2-Carafuro-Gabryjiel-2': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-final-2-Carafuro-Gabryjiel'),
  },
  '4t-final-2-Carafuro-Gabryjiel-3': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('4t-final-2-Carafuro-Gabryjiel'),
  },
  '4t-final-3-Gabryjiel-Carafuro-1': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('4t-final-3-Gabryjiel-Carafuro'),
  },
  '4t-final-3-Gabryjiel-Carafuro-2': {
    championId: getChampionId('gangplank'),
    playerMatchId: getPlayerGameId('4t-final-3-Gabryjiel-Carafuro'),
  },
  '4t-final-3-Gabryjiel-Carafuro-3': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('4t-final-3-Gabryjiel-Carafuro'),
  },
  '4t-final-3-Carafuro-Gabryjiel-1': {
    championId: getChampionId('jayce'),
    playerMatchId: getPlayerGameId('4t-final-3-Carafuro-Gabryjiel'),
  },
  '4t-final-3-Carafuro-Gabryjiel-2': {
    championId: getChampionId('ezreal'),
    playerMatchId: getPlayerGameId('4t-final-3-Carafuro-Gabryjiel'),
  },
  '4t-final-3-Carafuro-Gabryjiel-3': {
    championId: getChampionId('leblanc'),
    playerMatchId: getPlayerGameId('4t-final-3-Carafuro-Gabryjiel'),
  },

  '5t-borekkb-PSKrzysiek-1': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('5t-borekkb-PSKrzysiek'),
  },
  '5t-borekkb-PSKrzysiek-2': {
    championId: getChampionId('renekton'),
    playerMatchId: getPlayerGameId('5t-borekkb-PSKrzysiek'),
  },
  '5t-borekkb-PSKrzysiek-3': {
    championId: getChampionId('galio'),
    playerMatchId: getPlayerGameId('5t-borekkb-PSKrzysiek'),
  },
  '5t-PSKrzysiek-borekkb-1': {
    championId: getChampionId('fiora'),
    playerMatchId: getPlayerGameId('5t-PSKrzysiek-borekkb'),
  },
  '5t-PSKrzysiek-borekkb-2': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('5t-PSKrzysiek-borekkb'),
  },
  '5t-PSKrzysiek-borekkb-3': {
    championId: getChampionId('senna'),
    playerMatchId: getPlayerGameId('5t-PSKrzysiek-borekkb'),
  },

  '5t-elenath-iraD-1': {
    championId: getChampionId('nautilus'),
    playerMatchId: getPlayerGameId('5t-elenath-iraD'),
  },
  '5t-elenath-iraD-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('5t-elenath-iraD'),
  },
  '5t-elenath-iraD-3': {
    championId: getChampionId('vladimir'),
    playerMatchId: getPlayerGameId('5t-elenath-iraD'),
  },
  '5t-iraD-elenath-1': {
    championId: getChampionId('zyra'),
    playerMatchId: getPlayerGameId('5t-iraD-elenath'),
  },
  '5t-iraD-elenath-2': {
    championId: getChampionId('heimerdinger'),
    playerMatchId: getPlayerGameId('5t-iraD-elenath'),
  },
  '5t-iraD-elenath-3': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('5t-iraD-elenath'),
  },

  '5t-XlikeX666-BlackArata-1': {
    championId: getChampionId('irelia'),
    playerMatchId: getPlayerGameId('5t-XlikeX666-BlackArata'),
  },
  '5t-XlikeX666-BlackArata-2': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('5t-XlikeX666-BlackArata'),
  },
  '5t-XlikeX666-BlackArata-3': {
    championId: getChampionId('sett'),
    playerMatchId: getPlayerGameId('5t-XlikeX666-BlackArata'),
  },
  '5t-BlackArata-XlikeX666-1': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('5t-BlackArata-XlikeX666'),
  },
  '5t-BlackArata-XlikeX666-2': {
    championId: getChampionId('karma'),
    playerMatchId: getPlayerGameId('5t-BlackArata-XlikeX666'),
  },
  '5t-BlackArata-XlikeX666-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('5t-BlackArata-XlikeX666'),
  },

  '5t-borekkb-iiri-1': {
    championId: getChampionId('zed'),
    playerMatchId: getPlayerGameId('5t-borekkb-iiri'),
  },
  '5t-borekkb-iiri-2': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('5t-borekkb-iiri'),
  },
  '5t-borekkb-iiri-3': {
    championId: getChampionId('zyra'),
    playerMatchId: getPlayerGameId('5t-borekkb-iiri'),
  },
  '5t-iiri-borekkb-1': {
    championId: getChampionId('ashe'),
    playerMatchId: getPlayerGameId('5t-iiri-borekkb'),
  },
  '5t-iiri-borekkb-2': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('5t-iiri-borekkb'),
  },
  '5t-iiri-borekkb-3': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('5t-iiri-borekkb'),
  },

  '5t-PSKrzysiek-iraD-1': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('5t-PSKrzysiek-iraD'),
  },
  '5t-PSKrzysiek-iraD-2': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('5t-PSKrzysiek-iraD'),
  },
  '5t-PSKrzysiek-iraD-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('5t-PSKrzysiek-iraD'),
  },
  '5t-iraD-PSKrzysiek-1': {
    championId: getChampionId('irelia'),
    playerMatchId: getPlayerGameId('5t-iraD-PSKrzysiek'),
  },
  '5t-iraD-PSKrzysiek-2': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('5t-iraD-PSKrzysiek'),
  },
  '5t-iraD-PSKrzysiek-3': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('5t-iraD-PSKrzysiek'),
  },

  '5t-Gabryjiel-Pyther-1': {
    championId: getChampionId('karma'),
    playerMatchId: getPlayerGameId('5t-Gabryjiel-Pyther'),
  },
  '5t-Gabryjiel-Pyther-2': {
    championId: getChampionId('sion'),
    playerMatchId: getPlayerGameId('5t-Gabryjiel-Pyther'),
  },
  '5t-Gabryjiel-Pyther-3': {
    championId: getChampionId('urgot'),
    playerMatchId: getPlayerGameId('5t-Gabryjiel-Pyther'),
  },
  '5t-Pyther-Gabryjiel-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('5t-Pyther-Gabryjiel'),
  },
  '5t-Pyther-Gabryjiel-2': {
    championId: getChampionId('taliyah'),
    playerMatchId: getPlayerGameId('5t-Pyther-Gabryjiel'),
  },
  '5t-Pyther-Gabryjiel-3': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('5t-Pyther-Gabryjiel'),
  },

  '5t-borekkb-iraD-1': {
    championId: getChampionId('zyra'),
    playerMatchId: getPlayerGameId('5t-borekkb-iraD'),
  },
  '5t-borekkb-iraD-2': {
    championId: getChampionId('brand'),
    playerMatchId: getPlayerGameId('5t-borekkb-iraD'),
  },
  '5t-borekkb-iraD-3': {
    championId: getChampionId('graves'),
    playerMatchId: getPlayerGameId('5t-borekkb-iraD'),
  },
  '5t-iraD-borekkb-1': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('5t-iraD-borekkb'),
  },
  '5t-iraD-borekkb-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('5t-iraD-borekkb'),
  },
  '5t-iraD-borekkb-3': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('5t-iraD-borekkb'),
  },

  '5t-BlackArata-Pyther-1': {
    championId: getChampionId('lux'),
    playerMatchId: getPlayerGameId('5t-BlackArata-Pyther'),
  },
  '5t-BlackArata-Pyther-2': {
    championId: getChampionId('warwick'),
    playerMatchId: getPlayerGameId('5t-BlackArata-Pyther'),
  },
  '5t-BlackArata-Pyther-3': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('5t-BlackArata-Pyther'),
  },
  '5t-Pyther-BlackArata-1': {
    championId: getChampionId('gnar'),
    playerMatchId: getPlayerGameId('5t-Pyther-BlackArata'),
  },
  '5t-Pyther-BlackArata-2': {
    championId: getChampionId('pantheon'),
    playerMatchId: getPlayerGameId('5t-Pyther-BlackArata'),
  },
  '5t-Pyther-BlackArata-3': {
    championId: getChampionId('fiora'),
    playerMatchId: getPlayerGameId('5t-Pyther-BlackArata'),
  },

  '5t-elenath-PSKrzysiek-1': {
    championId: getChampionId('teemo'),
    playerMatchId: getPlayerGameId('5t-elenath-PSKrzysiek'),
  },
  '5t-elenath-PSKrzysiek-2': {
    championId: getChampionId('malzahar'),
    playerMatchId: getPlayerGameId('5t-elenath-PSKrzysiek'),
  },
  '5t-elenath-PSKrzysiek-3': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('5t-elenath-PSKrzysiek'),
  },

  '5t-iraD-iiri-1': {
    championId: getChampionId('heimerdinger'),
    playerMatchId: getPlayerGameId('5t-iraD-iiri'),
  },
  '5t-iraD-iiri-2': {
    championId: getChampionId('caitlyn'),
    playerMatchId: getPlayerGameId('5t-iraD-iiri'),
  },
  '5t-iraD-iiri-3': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('5t-iraD-iiri'),
  },
  '5t-iiri-iraD-1': {
    championId: getChampionId('irelia'),
    playerMatchId: getPlayerGameId('5t-iiri-iraD'),
  },
  '5t-iiri-iraD-2': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('5t-iiri-iraD'),
  },
  '5t-iiri-iraD-3': {
    championId: getChampionId('darius'),
    playerMatchId: getPlayerGameId('5t-iiri-iraD'),
  },

  '5t-borekkb-elenath-1': {
    championId: getChampionId('swain'),
    playerMatchId: getPlayerGameId('5t-borekkb-elenath'),
  },
  '5t-borekkb-elenath-2': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('5t-borekkb-elenath'),
  },
  '5t-borekkb-elenath-3': {
    championId: getChampionId('nautilus'),
    playerMatchId: getPlayerGameId('5t-borekkb-elenath'),
  },
  '5t-elenath-borekkb-1': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('5t-elenath-borekkb'),
  },
  '5t-elenath-borekkb-2': {
    championId: getChampionId('senna'),
    playerMatchId: getPlayerGameId('5t-elenath-borekkb'),
  },
  '5t-elenath-borekkb-3': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('5t-elenath-borekkb'),
  },

  '5t-elenath-iiri-1': {
    championId: getChampionId('swain'),
    playerMatchId: getPlayerGameId('5t-elenath-iiri'),
  },
  '5t-elenath-iiri-2': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('5t-elenath-iiri'),
  },
  '5t-elenath-iiri-3': {
    championId: getChampionId('nautilus'),
    playerMatchId: getPlayerGameId('5t-elenath-iiri'),
  },
  '5t-iiri-elenath-1': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('5t-iiri-elenath'),
  },
  '5t-iiri-elenath-2': {
    championId: getChampionId('senna'),
    playerMatchId: getPlayerGameId('5t-iiri-elenath'),
  },
  '5t-iiri-elenath-3': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('5t-iiri-elenath'),
  },

  '5t-XlikeX666-Gabryjiel-1': {
    championId: getChampionId('irelia'),
    playerMatchId: getPlayerGameId('5t-XlikeX666-Gabryjiel'),
  },
  '5t-XlikeX666-Gabryjiel-2': {
    championId: getChampionId('galio'),
    playerMatchId: getPlayerGameId('5t-XlikeX666-Gabryjiel'),
  },
  '5t-XlikeX666-Gabryjiel-3': {
    championId: getChampionId('zoe'),
    playerMatchId: getPlayerGameId('5t-XlikeX666-Gabryjiel'),
  },
  '5t-Gabryjiel-XlikeX666-1': {
    championId: getChampionId('neeko'),
    playerMatchId: getPlayerGameId('5t-Gabryjiel-XlikeX666'),
  },
  '5t-Gabryjiel-XlikeX666-2': {
    championId: getChampionId('syndra'),
    playerMatchId: getPlayerGameId('5t-Gabryjiel-XlikeX666'),
  },
  '5t-Gabryjiel-XlikeX666-3': {
    championId: getChampionId('morgana'),
    playerMatchId: getPlayerGameId('5t-Gabryjiel-XlikeX666'),
  },

  '5t-Gabryjiel-BlackArata-1': {
    championId: getChampionId('shen'),
    playerMatchId: getPlayerGameId('5t-Gabryjiel-BlackArata'),
  },
  '5t-Gabryjiel-BlackArata-2': {
    championId: getChampionId('kindred'),
    playerMatchId: getPlayerGameId('5t-Gabryjiel-BlackArata'),
  },
  '5t-Gabryjiel-BlackArata-3': {
    championId: getChampionId('karma'),
    playerMatchId: getPlayerGameId('5t-Gabryjiel-BlackArata'),
  },
  '5t-BlackArata-Gabryjiel-1': {
    championId: getChampionId('akali'),
    playerMatchId: getPlayerGameId('5t-BlackArata-Gabryjiel'),
  },
  '5t-BlackArata-Gabryjiel-2': {
    championId: getChampionId('yasuo'),
    playerMatchId: getPlayerGameId('5t-BlackArata-Gabryjiel'),
  },
  '5t-BlackArata-Gabryjiel-3': {
    championId: getChampionId('irelia'),
    playerMatchId: getPlayerGameId('5t-BlackArata-Gabryjiel'),
  },

  '5t-1/2-BlackArata-borekkb-1': {
    championId: getChampionId('vayne'),
    playerMatchId: getPlayerGameId('5t-1/2-BlackArata-borekkb'),
  },
  '5t-1/2-BlackArata-borekkb-2': {
    championId: getChampionId('senna'),
    playerMatchId: getPlayerGameId('5t-1/2-BlackArata-borekkb'),
  },
  '5t-1/2-BlackArata-borekkb-3': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('5t-1/2-BlackArata-borekkb'),
  },
  '5t-1/2-borekkb-BlackArata-1': {
    championId: getChampionId('kennen'),
    playerMatchId: getPlayerGameId('5t-1/2-borekkb-BlackArata'),
  },
  '5t-1/2-borekkb-BlackArata-2': {
    championId: getChampionId('gnar'),
    playerMatchId: getPlayerGameId('5t-1/2-borekkb-BlackArata'),
  },
  '5t-1/2-borekkb-BlackArata-3': {
    championId: getChampionId('sett'),
    playerMatchId: getPlayerGameId('5t-1/2-borekkb-BlackArata'),
  },
  '5t-1/2-2-BlackArata-borekkb-1': {
    championId: getChampionId('vayne'),
    playerMatchId: getPlayerGameId('5t-1/2-2-BlackArata-borekkb'),
  },
  '5t-1/2-2-BlackArata-borekkb-2': {
    championId: getChampionId('senna'),
    playerMatchId: getPlayerGameId('5t-1/2-2-BlackArata-borekkb'),
  },
  '5t-1/2-2-BlackArata-borekkb-3': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('5t-1/2-2-BlackArata-borekkb'),
  },
  '5t-1/2-2-borekkb-BlackArata-1': {
    championId: getChampionId('kennen'),
    playerMatchId: getPlayerGameId('5t-1/2-2-borekkb-BlackArata'),
  },
  '5t-1/2-2-borekkb-BlackArata-2': {
    championId: getChampionId('gnar'),
    playerMatchId: getPlayerGameId('5t-1/2-2-borekkb-BlackArata'),
  },
  '5t-1/2-2-borekkb-BlackArata-3': {
    championId: getChampionId('sett'),
    playerMatchId: getPlayerGameId('5t-1/2-2-borekkb-BlackArata'),
  },

  '5t-1/2-Gabryjiel-elenath-1': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('5t-1/2-Gabryjiel-elenath'),
  },
  '5t-1/2-Gabryjiel-elenath-2': {
    championId: getChampionId('nautilus'),
    playerMatchId: getPlayerGameId('5t-1/2-Gabryjiel-elenath'),
  },
  '5t-1/2-Gabryjiel-elenath-3': {
    championId: getChampionId('velkoz'),
    playerMatchId: getPlayerGameId('5t-1/2-Gabryjiel-elenath'),
  },
  '5t-1/2-elenath-Gabryjiel-1': {
    championId: getChampionId('irelia'),
    playerMatchId: getPlayerGameId('5t-1/2-elenath-Gabryjiel'),
  },
  '5t-1/2-elenath-Gabryjiel-2': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('5t-1/2-elenath-Gabryjiel'),
  },
  '5t-1/2-elenath-Gabryjiel-3': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('5t-1/2-elenath-Gabryjiel'),
  },
  '5t-1/2-2-Gabryjiel-elenath-1': {
    championId: getChampionId('ziggs'),
    playerMatchId: getPlayerGameId('5t-1/2-2-Gabryjiel-elenath'),
  },
  '5t-1/2-2-Gabryjiel-elenath-2': {
    championId: getChampionId('nautilus'),
    playerMatchId: getPlayerGameId('5t-1/2-2-Gabryjiel-elenath'),
  },
  '5t-1/2-2-Gabryjiel-elenath-3': {
    championId: getChampionId('velkoz'),
    playerMatchId: getPlayerGameId('5t-1/2-2-Gabryjiel-elenath'),
  },
  '5t-1/2-2-elenath-Gabryjiel-1': {
    championId: getChampionId('irelia'),
    playerMatchId: getPlayerGameId('5t-1/2-2-elenath-Gabryjiel'),
  },
  '5t-1/2-2-elenath-Gabryjiel-2': {
    championId: getChampionId('lucian'),
    playerMatchId: getPlayerGameId('5t-1/2-2-elenath-Gabryjiel'),
  },
  '5t-1/2-2-elenath-Gabryjiel-3': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('5t-1/2-2-elenath-Gabryjiel'),
  },

  '5t-final-borekkb-Gabryjiel-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('5t-final-borekkb-Gabryjiel'),
  },
  '5t-final-borekkb-Gabryjiel-2': {
    championId: getChampionId('akali'),
    playerMatchId: getPlayerGameId('5t-final-borekkb-Gabryjiel'),
  },
  '5t-final-borekkb-Gabryjiel-3': {
    championId: getChampionId('syndra'),
    playerMatchId: getPlayerGameId('5t-final-borekkb-Gabryjiel'),
  },
  '5t-final-Gabryjiel-borekkb-1': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('5t-final-Gabryjiel-borekkb'),
  },
  '5t-final-Gabryjiel-borekkb-2': {
    championId: getChampionId('senna'),
    playerMatchId: getPlayerGameId('5t-final-Gabryjiel-borekkb'),
  },
  '5t-final-Gabryjiel-borekkb-3': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('5t-final-Gabryjiel-borekkb'),
  },
  '5t-final-2-borekkb-Gabryjiel-1': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('5t-final-2-borekkb-Gabryjiel'),
  },
  '5t-final-2-borekkb-Gabryjiel-2': {
    championId: getChampionId('akali'),
    playerMatchId: getPlayerGameId('5t-final-2-borekkb-Gabryjiel'),
  },
  '5t-final-2-borekkb-Gabryjiel-3': {
    championId: getChampionId('syndra'),
    playerMatchId: getPlayerGameId('5t-final-2-borekkb-Gabryjiel'),
  },
  '5t-final-2-Gabryjiel-borekkb-1': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('5t-final-2-Gabryjiel-borekkb'),
  },
  '5t-final-2-Gabryjiel-borekkb-2': {
    championId: getChampionId('senna'),
    playerMatchId: getPlayerGameId('5t-final-2-Gabryjiel-borekkb'),
  },
  '5t-final-2-Gabryjiel-borekkb-3': {
    championId: getChampionId('orianna'),
    playerMatchId: getPlayerGameId('5t-final-2-Gabryjiel-borekkb'),
  },
  '5t-final-3-borekkb-Gabryjiel-1': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('5t-final-3-borekkb-Gabryjiel'),
  },
  '5t-final-3-borekkb-Gabryjiel-2': {
    championId: getChampionId('akali'),
    playerMatchId: getPlayerGameId('5t-final-3-borekkb-Gabryjiel'),
  },
  '5t-final-3-borekkb-Gabryjiel-3': {
    championId: getChampionId('syndra'),
    playerMatchId: getPlayerGameId('5t-final-3-borekkb-Gabryjiel'),
  },
  '5t-final-3-Gabryjiel-borekkb-1': {
    championId: getChampionId('fizz'),
    playerMatchId: getPlayerGameId('5t-final-3-Gabryjiel-borekkb'),
  },
  '5t-final-3-Gabryjiel-borekkb-2': {
    championId: getChampionId('senna'),
    playerMatchId: getPlayerGameId('5t-final-3-Gabryjiel-borekkb'),
  },
  '5t-final-3-Gabryjiel-borekkb-3': {
    championId: getChampionId('draven'),
    playerMatchId: getPlayerGameId('5t-final-3-Gabryjiel-borekkb'),
  },
} satisfies Record<string, CreateBanObject>;
