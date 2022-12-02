import type { Prisma } from "@prisma/client";

export function getTournamentId(name: keyof typeof tournaments) {
  return Object.keys(tournaments).findIndex((key) => key === name) + 1;
}

export const tournaments = {
  'Elite Bronze': {
    name: 'Elite Bronze',
    startDate: new Date('2016-01-02'),
    endDate: new Date('2016-01-02'),
  },
  'Elite Bronze II': {
    name: 'Elite Bronze II',
    startDate: new Date('2016-01-24'),
    endDate: new Date('2016-01-24'),
  },
  'Elite Bronze III': {
    name: 'Elite Bronze III',
    startDate: new Date('2017-11-12'),
    endDate: new Date('2017-11-12'),
  },
  'Elite Bronze IV': {
    name: 'Elite Bronze IV',
    startDate: new Date('2017-12-09'),
    endDate: new Date('2018-01-12'),
  },
  'Elite Bronze V': {
    name: 'Elite Bronze V',
    startDate: new Date('2020-03-22'),
    endDate: new Date('2020-03-22'),
  },
} satisfies Record<string, Prisma.TournamentUncheckedCreateInput>;
