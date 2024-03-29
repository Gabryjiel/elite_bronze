import type { Side, Waywin } from "@prisma/client";

import CsSrc from "./../../public/100.png";
import TowerSrc from "./../../public/big-towers.png";
import FlagSrc from "./../../public/flag.png";
import SwordSrc from "./../../public/sword.png";

function mapName(championName: string) {
  switch (championName) {
    case "Wukong":
      return "MonkeyKing";
    case "Jarvan IV":
      return "JarvanIV";
    case "Rek'Sai":
      return "RekSai";
    case "Kog'Maw":
      return "KogMaw";
    case "Fiddlesticks":
      return "FiddleSticks";
    default:
      return championName
        .toLowerCase()
        .replace(/'/g, "")
        .replace(/\w{2,}/g, (match) =>
          match.replace(/\w/, (m) => m.toUpperCase())
        )
        .replace(" ", "");
  }
}

export function getSplash(championName?: string) {
  if (!championName) {
    return "http://placehold.jp/000000/00ff00/1280x720.jpg?text=?";
  }

  return `http://ddragon.leagueoflegends.com/cdn/img/champion/centered/${mapName(
    championName
  )}_0.jpg`;
}

export function getLoading(championName?: string) {
  if (!championName) {
    return "http://placehold.jp/000000/00ff00/308x560.jpg?text=404";
  }

  return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${mapName(
    championName
  )}_0.jpg`;
}

export function getIcon(championName?: string, side?: Side) {
  if (!championName) {
    return side === "BLUE"
      ? "http://placehold.jp/64/000000/0000ff/150x150.jpg?text=%3F"
      : "http://placehold.jp/64/000000/ff0000/150x150.jpg?text=%3F";
  }

  return `http://ddragon.leagueoflegends.com/cdn/12.3.1/img/champion/${mapName(
    championName
  )}.png`;
}

export function getWaywinIcon(waywin: Waywin) {
  switch (waywin) {
    case "CS":
      return CsSrc;
    case "TOWER":
      return TowerSrc;
    case "SURRENDER":
      return FlagSrc;
    case "KILL":
    default:
      return SwordSrc;
  }
}
