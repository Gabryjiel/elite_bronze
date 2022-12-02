import type { Prisma } from "@prisma/client";

type CreateChampionObject = Omit<Prisma.ChampionUncheckedCreateInput, 'id'>;

export function getChampionId(name: keyof typeof champions) {
  return Object.keys(champions).findIndex((key) => key === name) + 1;
}

export const champions = {
  aatrox: {
    name: 'Aatrox',
    slug: 'aatrox',
  },
  ahri: {
    name: 'Ahri',
    slug: 'ahri',
  },
  akali: {
    name: 'Akali',
    slug: 'akali',
  },
  alistar: {
    name: 'Alistar',
    slug: 'alistar',
  },
  amumu: {
    name: 'Amumu',
    slug: 'amumu',
  },
  anivia: {
    name: 'Anivia',
    slug: 'anivia',
  },
  annie: {
    name: 'Annie',
    slug: 'annie',
  },
  ashe: {
    name: 'Ashe',
    slug: 'ashe',
  },
  aurelion_sol: {
    name: 'Aurelion Sol',
    slug: 'aurelion_sol',
  },
  azir: {
    name: 'Azir',
    slug: 'azir',
  },
  bard: {
    name: 'Bard',
    slug: 'bard',
  },
  blitzcrank: {
    name: 'Blitzcrank',
    slug: 'blitzcrank',
  },
  brand: {
    name: 'Brand',
    slug: 'brand',
  },
  braum: {
    name: 'Braum',
    slug: 'braum',
  },
  caitlyn: {
    name: 'Caitlyn',
    slug: 'caitlyn',
  },
  camille: {
    name: 'Camille',
    slug: 'camille',
  },
  cassiopeia: {
    name: 'Cassiopeia',
    slug: 'cassiopeia',
  },
  chogath: {
    name: "Cho'Gath",
    slug: 'chogath',
  },
  corki: {
    name: 'Corki',
    slug: 'corki',
  },
  darius: {
    name: 'Darius',
    slug: 'darius',
  },
  diana: {
    name: 'Diana',
    slug: 'diana',
  },
  dr_mundo: {
    name: 'Dr Mundo',
    slug: 'dr_mundo',
  },
  draven: {
    name: 'Draven',
    slug: 'draven',
  },
  ekko: {
    name: 'Ekko',
    slug: 'ekko',
  },
  elise: {
    name: 'Elise',
    slug: 'elise',
  },
  evelynn: {
    name: 'Evelynn',
    slug: 'evelynn',
  },
  ezreal: {
    name: 'Ezreal',
    slug: 'ezreal',
  },
  fiddlesticks: {
    name: 'Fiddlesticks',
    slug: 'fiddlesticks',
  },
  fiora: {
    name: 'Fiora',
    slug: 'fiora',
  },
  fizz: {
    name: 'Fizz',
    slug: 'fizz',
  },
  galio: {
    name: 'Galio',
    slug: 'galio',
  },
  gangplank: {
    name: 'Gangplank',
    slug: 'gangplank',
  },
  garen: {
    name: 'Garen',
    slug: 'garen',
  },
  gnar: {
    name: 'Gnar',
    slug: 'gnar',
  },
  gragas: {
    name: 'Gragas',
    slug: 'gragas',
  },
  graves: {
    name: 'Graves',
    slug: 'graves',
  },
  hecarim: {
    name: 'Hecarim',
    slug: 'hecarim',
  },
  heimerdinger: {
    name: 'Heimerdinger',
    slug: 'heimerdinger',
  },
  illaoi: {
    name: 'Illaoi',
    slug: 'illaoi',
  },
  irelia: {
    name: 'Irelia',
    slug: 'irelia',
  },
  ivern: {
    name: 'Ivern',
    slug: 'ivern',
  },
  janna: {
    name: 'Janna',
    slug: 'janna',
  },
  jarvan_iv: {
    name: 'Jarvan IV',
    slug: 'jarvan_iv',
  },
  jax: {
    name: 'Jax',
    slug: 'jax',
  },
  jayce: {
    name: 'Jayce',
    slug: 'jayce',
  },
  jhin: {
    name: 'Jhin',
    slug: 'jhin',
  },
  jinx: {
    name: 'Jinx',
    slug: 'jinx',
  },
  kalista: {
    name: 'Kalista',
    slug: 'kalista',
  },
  karma: {
    name: 'Karma',
    slug: 'karma',
  },
  karthus: {
    name: 'Karthus',
    slug: 'karthus',
  },
  kassadin: {
    name: 'Kassadin',
    slug: 'kassadin',
  },
  katarina: {
    name: 'Katarina',
    slug: 'katarina',
  },
  kayle: {
    name: 'Kayle',
    slug: 'kayle',
  },
  kayn: {
    name: 'Kayn',
    slug: 'kayn',
  },
  kennen: {
    name: 'Kennen',
    slug: 'kennen',
  },
  khazix: {
    name: "Kha'Zix",
    slug: 'khazix',
  },
  malzahar: {
    name: 'Malzahar',
    slug: 'malzahar',
  },
  maokai: {
    name: 'Maokai',
    slug: 'maokai',
  },
  master_yi: {
    name: 'Master Yi',
    slug: 'master_yi',
  },
  miss_fortune: {
    name: 'Miss Fortune',
    slug: 'miss_fortune',
  },
  mordekaiser: {
    name: 'Mordekaiser',
    slug: 'mordekaiser',
  },
  morgana: {
    name: 'Morgana',
    slug: 'morgana',
  },
  nami: {
    name: 'Nami',
    slug: 'nami',
  },
  nasus: {
    name: 'Nasus',
    slug: 'nasus',
  },
  nautilus: {
    name: 'Nautilus',
    slug: 'nautilus',
  },
  nidalee: {
    name: 'Nidalee',
    slug: 'nidalee',
  },
  nocturne: {
    name: 'Nocturne',
    slug: 'nocturne',
  },
  nunu: {
    name: 'Nunu',
    slug: 'nunu',
  },
  olaf: {
    name: 'Olaf',
    slug: 'olaf',
  },
  orianna: {
    name: 'Orianna',
    slug: 'orianna',
  },
  ornn: {
    name: 'Ornn',
    slug: 'ornn',
  },
  pantheon: {
    name: 'Pantheon',
    slug: 'pantheon',
  },
  poppy: {
    name: 'Poppy',
    slug: 'poppy',
  },
  quinn: {
    name: 'Quinn',
    slug: 'quinn',
  },
  rakan: {
    name: 'Rakan',
    slug: 'rakan',
  },
  rammus: {
    name: 'Rammus',
    slug: 'rammus',
  },
  reksai: {
    name: "Rek'Sai",
    slug: 'reksai',
  },
  renekton: {
    name: 'Renekton',
    slug: 'renekton',
  },
  rengar: {
    name: 'Rengar',
    slug: 'rengar',
  },
  riven: {
    name: 'Riven',
    slug: 'riven',
  },
  rumble: {
    name: 'Rumble',
    slug: 'rumble',
  },
  ryze: {
    name: 'Ryze',
    slug: 'ryze',
  },
  sejuani: {
    name: 'Sejuani',
    slug: 'sejuani',
  },
  shaco: {
    name: 'Shaco',
    slug: 'shaco',
  },
  shen: {
    name: 'Shen',
    slug: 'shen',
  },
  shyvana: {
    name: 'Shyvana',
    slug: 'shyvana',
  },
  singed: {
    name: 'Singed',
    slug: 'singed',
  },
  sion: {
    name: 'Sion',
    slug: 'sion',
  },
  sivir: {
    name: 'Sivir',
    slug: 'sivir',
  },
  skarner: {
    name: 'Skarner',
    slug: 'skarner',
  },
  sona: {
    name: 'Sona',
    slug: 'sona',
  },
  soraka: {
    name: 'Soraka',
    slug: 'soraka',
  },
  swain: {
    name: 'Swain',
    slug: 'swain',
  },
  syndra: {
    name: 'Syndra',
    slug: 'syndra',
  },
  tahm_kench: {
    name: 'Tahm Kench',
    slug: 'tahm_kench',
  },
  taliyah: {
    name: 'Taliyah',
    slug: 'taliyah',
  },
  talon: {
    name: 'Talon',
    slug: 'talon',
  },
  taric: {
    name: 'Taric',
    slug: 'taric',
  },
  teemo: {
    name: 'Teemo',
    slug: 'teemo',
  },
  thresh: {
    name: 'Thresh',
    slug: 'thresh',
  },
  tristana: {
    name: 'Tristana',
    slug: 'tristana',
  },
  trundle: {
    name: 'Trundle',
    slug: 'trundle',
  },
  tryndamere: {
    name: 'Tryndamere',
    slug: 'tryndamere',
  },
  twisted_fate: {
    name: 'Twisted Fate',
    slug: 'twisted_fate',
  },
  twitch: {
    name: 'Twitch',
    slug: 'twitch',
  },
  udyr: {
    name: 'Udyr',
    slug: 'udyr',
  },
  urgot: {
    name: 'Urgot',
    slug: 'urgot',
  },
  varus: {
    name: 'Varus',
    slug: 'varus',
  },
  vayne: {
    name: 'Vayne',
    slug: 'vayne',
  },
  veigar: {
    name: 'Veigar',
    slug: 'veigar',
  },
  velkoz: {
    name: "Vel'Koz",
    slug: 'velkoz',
  },
  vi: {
    name: 'Vi',
    slug: 'vi',
  },
  viktor: {
    name: 'Viktor',
    slug: 'viktor',
  },
  vladimir: {
    name: 'Vladimir',
    slug: 'vladimir',
  },
  volibear: {
    name: 'Volibear',
    slug: 'volibear',
  },
  warwick: {
    name: 'Warwick',
    slug: 'warwick',
  },
  wukong: {
    name: 'Wukong',
    slug: 'wukong',
  },
  xayah: {
    name: 'Xayah',
    slug: 'xayah',
  },
  xerath: {
    name: 'Xerath',
    slug: 'xerath',
  },
  xin_zhao: {
    name: 'Xin Zhao',
    slug: 'xin_zhao',
  },
  yasuo: {
    name: 'Yasuo',
    slug: 'yasuo',
  },
  yorick: {
    name: 'Yorick',
    slug: 'yorick',
  },
  zac: {
    name: 'Zac',
    slug: 'zac',
  },
  zed: {
    name: 'Zed',
    slug: 'zed',
  },
  ziggs: {
    name: 'Ziggs',
    slug: 'ziggs',
  },
  zilean: {
    name: 'Zilean',
    slug: 'zilean',
  },
  zoe: {
    name: 'Zoe',
    slug: 'zoe',
  },
  zyra: {
    name: 'Zyra',
    slug: 'zyra',
  },
  kindred: {
    name: 'Kindred',
    slug: 'kindred',
  },
  kled: {
    name: 'Kled',
    slug: 'kled',
  },
  kogmaw: {
    name: "Kog'Maw",
    slug: 'kogmaw',
  },
  leblanc: {
    name: 'LeBlanc',
    slug: 'leblanc',
  },
  lee_sin: {
    name: 'Lee Sin',
    slug: 'lee_sin',
  },
  leona: {
    name: 'Leona',
    slug: 'leona',
  },
  lissandra: {
    name: 'Lissandra',
    slug: 'lissandra',
  },
  lucian: {
    name: 'Lucian',
    slug: 'lucian',
  },
  lulu: {
    name: 'Lulu',
    slug: 'lulu',
  },
  lux: {
    name: 'Lux',
    slug: 'lux',
  },
  malphite: {
    name: 'Malphite',
    slug: 'malphite',
  },
  kaisa: {
    name: "Kai'Sa",
    slug: 'kaisa',
  },
  pyke: {
    name: 'Pyke',
    slug: 'pyke',
  },
  neeko: {
    name: 'Neeko',
    slug: 'neeko',
  },
  sylas: {
    name: 'Sylas',
    slug: 'sylas',
  },
  yuumi: {
    name: 'Yuumi',
    slug: 'yuumi',
  },
  qiyana: {
    name: 'Qiyana',
    slug: 'qiyana',
  },
  senna: {
    name: 'Senna',
    slug: 'senna',
  },
  aphelios: {
    name: 'Aphelios',
    slug: 'aphelios',
  },
  sett: {
    name: 'Sett',
    slug: 'sett',
  },
} satisfies Record<string, CreateChampionObject>;
