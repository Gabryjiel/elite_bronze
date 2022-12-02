import type { Prisma } from '@prisma/client';
import { getTournamentId } from './tournaments';

type CreateGameObject = Omit<Prisma.MatchUncheckedCreateInput, 'id'>;

export function getMatchId(name: keyof typeof matches) {
  return Object.keys(matches).findIndex((key) => key === name) + 1;
}

export const matches = {
  '1t-pyther-KuroiWaru': {
    tournamentId: getTournamentId('Elite Bronze'),
    stage: 'ONE_8_FINAL'
  },
  '1t-Élenath-pyther': {
    tournamentId: getTournamentId('Elite Bronze'),
    stage: 'QUARTERFINAL'
  },
  '1t-iiri-Creifer': {
    tournamentId: getTournamentId('Elite Bronze'),
    stage: 'QUARTERFINAL'
  },
  '1t-IFC-Sznifferek': {
    tournamentId: getTournamentId('Elite Bronze'),
    stage: 'QUARTERFINAL'
  },
  '1t-TimeWinner-Hauche': {
    tournamentId: getTournamentId('Elite Bronze'),
    stage: 'QUARTERFINAL'
  },
  '1t-Élenath-iiri': {
    tournamentId: getTournamentId('Elite Bronze'),
    stage: 'SEMIFINAL'
  },
  '1t-IFC-TimeWinner': {
    tournamentId: getTournamentId('Elite Bronze'),
    stage: 'SEMIFINAL'
  },
  '1t-Élenath-TimeWinner': {
    tournamentId: getTournamentId('Elite Bronze'),
    stage: 'THIRD_PLACE_MATCH'
  },
  '1t-iiri-IFC': {
    tournamentId: getTournamentId('Elite Bronze'),
    stage: 'FINAL'
  },
  '2t-BorekKB-pyther': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'ONE_8_FINAL'
  },
  '2t-Kertoip-Kristron': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'ONE_8_FINAL'
  },
  '2t-575vmvac-klucex14': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'ONE_8_FINAL'
  },
  '2t-Élenath-Dymitriad': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'ONE_8_FINAL'
  },
  '2t-Skomer-Fefurusek': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'ONE_8_FINAL'
  },
  '2t-WhiteHayabusaLwG-iiri': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'ONE_8_FINAL'
  },
  '2t-Sznifferek-Aetren': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'ONE_8_FINAL'
  },
  '2t-Creifer-Hauche': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'ONE_8_FINAL'
  },
  '2t-BorekKB-Kertoip': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'QUARTERFINAL'
  },
  '2t-575vmvac-Dymitriad': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'QUARTERFINAL'
  },
  '2t-iiri-Skomer': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'QUARTERFINAL'
  },
  '2t-Sznifferek-Hauche': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'QUARTERFINAL'
  },
  '2t-575vmvac-Kertoip': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'SEMIFINAL'
  },
  '2t-Sznifferek-Skomer': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'SEMIFINAL'
  },
  '2t-Sznifferek-Kertoip': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'THIRD_PLACE_MATCH'
  },
  '2t-Skomer-575vmvac': {
    tournamentId: getTournamentId('Elite Bronze II'),
    stage: 'FINAL'
  },
  '3t-Lunarm-Dymitriad': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_16_FINAL'
  },
  '3t-Kszesiek-BCE Mopsik': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_16_FINAL'
  },
  '3t-ZielokXD-Sebix320': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_16_FINAL'
  },
  '3t-BiXa21-szpikulec567': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_16_FINAL'
  },
  '3t-oliwier85-pyther': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_16_FINAL'
  },
  '3t-szym14w-GiveeMe': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_16_FINAL'
  },
  '3t-Fefurusek-Kyusuku': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_16_FINAL'
  },
  '3t-Lunarm-Jarosław Oliwa': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_8_FINAL'
  },
  '3t-aFINISZnaCYCE-Kyusuku': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_8_FINAL'
  },
  '3t-PanAngar-Kszesiek': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_8_FINAL'
  },
  '3t-Sebix320-Hauche': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_8_FINAL'
  },
  '3t-BiXa21-Máthew': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_8_FINAL'
  },
  '3t-vViPp-Woozimu': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_8_FINAL'
  },
  '3t-oliwier85-ZombieMen': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_8_FINAL'
  },
  '3t-Élenath-GiveeMe': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'ONE_8_FINAL'
  },
  '3t-aFINISZnaCYCE-Jarosław Oliwa': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'QUARTERFINAL'
  },
  '3t-Sebix320-PanAngar': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'QUARTERFINAL'
  },
  '3t-vViPp-Máthew': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'QUARTERFINAL'
  },
  '3t-ZombieMen-Élenath': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'QUARTERFINAL'
  },
  '3t-aFINISZnaCYCE-PanAngar': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'SEMIFINAL'
  },
  '3t-Élenath-vViPp': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'SEMIFINAL'
  },
  '3t-Élenath-PanAngar': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'THIRD_PLACE_MATCH'
  },
  '3t-vViPp-aFINISZnaCYCE': {
    tournamentId: getTournamentId('Elite Bronze III'),
    stage: 'FINAL'
  },
  '4t-Kup se dzieci-Dudzik': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_A'
  },
  '4t-Pyther-Rully': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_A'
  },
  '4t-Kup se dzieci-Rully': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_A'
  },
  '4t-Dudzik-Pyther': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_A'
  },
  '4t-Kup se dzieci-Pyther': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_A'
  },
  '4t-Rully-Dudzik': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_A'
  },
  '4t-Dudzik-Rully': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_A'
  },
  '4t-Pyther-Kup se dzieci': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_A'
  },
  '4t-Pyther-Dudzik': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_A'
  },
  '4t-Rully-Kup se dzieci': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_A'
  },
  '4t-Rully-Pyther': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_A'
  },
  '4t-Dudzik-Kup se dzieci': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_A'
  },
  '4t-Matimen-ProQuigy': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_B',
  },
  '4t-Stella-Paweł': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_B',
  },
  '4t-Matimen-Paweł': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_B',
  },
  '4t-ProQuigy-Stella': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_B',
  },
  '4t-Matimen-Stella': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_B',
  },
  '4t-Paweł-ProQuigy': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_B',
  },
  '4t-ProQuigy-Paweł': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_B',
  },
  '4t-Stella-Matimen': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_B',
  },
  '4t-Stella-ProQuigy': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_B',
  },
  '4t-Paweł-Matimen': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_B',
  },
  '4t-Paweł-Stella': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_B',
  },
  '4t-ProQuigy-Matimen': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_B',
  },
  '4t-Fefurusek-oliwier85': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_C',
  },
  '4t-Kertoip-Dawcio1289': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_C',
  },
  '4t-Fefurusek-Dawcio1289': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_C',
  },
  '4t-oliwier85-Kertoip': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_C',
  },
  '4t-Fefurusek-Kertoip': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_C',
  },
  '4t-Dawcio1289-oliwier85': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_C',
  },
  '4t-oliwier85-Dawcio1289': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_C',
  },
  '4t-Kertoip-Fefurusek': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_C',
  },
  '4t-Kertoip-oliwier85': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_C',
  },
  '4t-Dawcio1289-Fefurusek': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_C',
  },
  '4t-Dawcio1289-Kertoip': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_C',
  },
  '4t-oliwier85-Fefurusek': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_C',
  },
  '4t-Woozzu-Dzeys336': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_D',
  },
  '4t-XlikeX666-B00MEK221': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_D',
  },
  '4t-Woozzu-B00MEK221': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_D',
  },
  '4t-Dzeys336-XlikeX666': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_D',
  },
  '4t-Woozzu-XlikeX666': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_D',
  },
  '4t-B00MEK221-Dzeys336': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_D',
  },
  '4t-Dzeys336-B00MEK221': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_D',
  },
  '4t-XlikeX666-Woozzu': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_D',
  },
  '4t-XlikeX666-Dzeys336': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_D',
  },
  '4t-B00MEK221-Woozzu': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_D',
  },
  '4t-B00MEK221-XlikeX666': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_D',
  },
  '4t-Dzeys336-Woozzu': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_D',
  },
  '4t-Gabryjiel-Tyrion': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_E',
  },
  '4t-Kszesiek-Zielook': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_E',
  },
  '4t-Gabryjiel-Zielook': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_E',
  },
  '4t-Tyrion-Kszesiek': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_E',
  },
  '4t-Gabryjiel-Kszesiek': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_E',
  },
  '4t-Zielook-Tyrion': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_E',
  },
  '4t-Tyrion-Zielook': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_E',
  },
  '4t-Kszesiek-Gabryjiel': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_E',
  },
  '4t-Kszesiek-Tyrion': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_E',
  },
  '4t-Zielook-Gabryjiel': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_E',
  },
  '4t-Zielook-Kszesiek': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_E',
  },
  '4t-Tyrion-Gabryjiel': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_E',
  },
  '4t-elenath-szym14w': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_F',
  },
  '4t-Sebix320-LerioN': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_F',
  },
  '4t-elenath-LerioN': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_F',
  },
  '4t-szym14w-Sebix320': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_F',
  },
  '4t-elenath-Sebix320': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_F',
  },
  '4t-LerioN-szym14w': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_F',
  },
  '4t-szym14w-LerioN': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_F',
  },
  '4t-Sebix320-elenath': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_F',
  },
  '4t-Sebix320-szym14w': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_F',
  },
  '4t-LerioN-elenath': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_F',
  },
  '4t-LerioN-Sebix320': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_F',
  },
  '4t-szym14w-elenath': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_F',
  },
  '4t-Carafuro-ElGrande': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_G',
  },
  '4t-JarosławOliwa-borekkb': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_G',
  },
  '4t-Carafuro-borekkb': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_G',
  },
  '4t-ElGrande-JarosławOliwa': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_G',
  },
  '4t-Carafuro-JarosławOliwa': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_G',
  },
  '4t-borekkb-ElGrande': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_G',
  },
  '4t-ElGrande-borekkb': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_G',
  },
  '4t-JarosławOliwa-Carafuro': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_G',
  },
  '4t-JarosławOliwa-ElGrande': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_G',
  },
  '4t-borekkb-Carafuro': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_G',
  },
  '4t-borekkb-JarosławOliwa': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_G',
  },
  '4t-ElGrande-Carafuro': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_G',
  },
  '4t-PanAngar-HezikPL': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_H',
  },
  '4t-Dyszka-iiri': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_H',
  },
  '4t-PanAngar-iiri': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_H',
  },
  '4t-HezikPL-Dyszka': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_H',
  },
  '4t-PanAngar-Dyszka': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_H',
  },
  '4t-iiri-HezikPL': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_H',
  },
  '4t-HezikPL-iiri': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_H',
  },
  '4t-Dyszka-PanAngar': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_H',
  },
  '4t-Dyszka-HezikPL': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_H',
  },
  '4t-iiri-PanAngar': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_H',
  },
  '4t-iiri-Dyszka': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_H',
  },
  '4t-HezikPL-PanAngar': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'GROUP_H',
  },
  '4t-Kup se dzieci-Paweł': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'ONE_8_FINAL'
  },
  '4t-PanAngar-LerioN': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'ONE_8_FINAL'
  },
  '4t-Woozzu-JarosławOliwa': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'ONE_8_FINAL'
  },
  '4t-Gabryjiel-Dawcio1289': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'ONE_8_FINAL'
  },
  '4t-Matimen-HezikPL': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'ONE_8_FINAL'
  },
  '4t-Carafuro-Tyrion': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'ONE_8_FINAL'
  },
  '4t-Fefurusek-B00MEK221': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'ONE_8_FINAL'
  },
  '4t-elenath-Pyther': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'ONE_8_FINAL'
  },
  '4t-Kup se dzieci-PanAngar': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'QUARTERFINAL'
  },
  '4t-JarosławOliwa-Gabryjiel': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'QUARTERFINAL'
  },
  '4t-Matimen-Carafuro': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'QUARTERFINAL'
  },
  '4t-Fefurusek-elenath': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'QUARTERFINAL'
  },
  '4t-PanAngar-Gabryjiel': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'SEMIFINAL'
  },
  '4t-Carafuro-Fefurusek': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'SEMIFINAL'
  },
  '4t-Fefurusek-PanAngar': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'THIRD_PLACE_MATCH'
  },
  '4t-Gabryjiel-Carafuro': {
    tournamentId: getTournamentId('Elite Bronze IV'),
    stage: 'FINAL'
  },
  '5t-elenath-iraD': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_A'
  },
  '5t-borekkb-iiri': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_A'
  },
  '5t-PSKrzysiek-iraD': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_A'
  },
  '5t-borekkb-elenath': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_A'
  },
  '5t-PSKrzysiek-iiri': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_A'
  },
  '5t-borekkb-iraD': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_A'
  },
  '5t-borekkb-PSKrzysiek': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_A'
  },
  '5t-elenath-iiri': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_A'
  },
  '5t-elenath-PSKrzysiek': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_A'
  },
  '5t-iiri-iraD': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_A'
  },
  '5t-XlikeX666-BlackArata': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_B',
  },
  '5t-Gabryjiel-Pyther': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_B',
  },
  '5t-BlackArata-Pyther': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_B',
  },
  '5t-XlikeX666-Gabryjiel': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_B',
  },
  '5t-Gabryjiel-BlackArata': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_B',
  },
  '5t-XlikeX666-Pyther': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'GROUP_B',
  },
  '5t-BlackArata-borekkb': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'SEMIFINAL'
  },
  '5t-Gabryjiel-elenath': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'SEMIFINAL'
  },
  '5t-elenath-BlackArata': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'THIRD_PLACE_MATCH'
  },
  '5t-borekkb-Gabryjiel': {
    tournamentId: getTournamentId('Elite Bronze V'),
    stage: 'FINAL'
  },
} satisfies Record<string, CreateGameObject>;
