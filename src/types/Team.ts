import { Pokemon } from './Pokemon';

export type Team = {
  name: string,
  ban1: Pokemon,
  pick1: Pokemon,
  pick2: Pokemon,
  pick3: Pokemon,
  pick4: Pokemon,
  pick5: Pokemon,
}

export enum TeamEnum {
  TEAM1 = "team1",
  TEAM2 = "team2",
  BOTH = "both"
}