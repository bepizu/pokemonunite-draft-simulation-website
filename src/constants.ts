import { TeamEnum } from './types/Team'

export const PICK_ORDER_ALTERNATE_BAN = [
  { turn: 0, team: TeamEnum.TEAM1, picks: ['ban1'] },
  { turn: 1, team: TeamEnum.TEAM2, picks: ['ban1'] },
  { turn: 2, team: TeamEnum.TEAM1, picks: ['pick1'] },
  { turn: 3, team: TeamEnum.TEAM2, picks: ['pick1', 'pick2'] },
  { turn: 4, team: TeamEnum.TEAM1, picks: ['pick2', 'pick3'] },
  { turn: 5, team: TeamEnum.TEAM2, picks: ['pick3', 'pick4'] },
  { turn: 6, team: TeamEnum.TEAM1, picks: ['pick4', 'pick5'] },
  { turn: 7, team: TeamEnum.TEAM2, picks: ['pick5'] }
]

export const PICK_ORDER_SIMULTANEOUSLY_BAN = [
  { turn: 0, team: TeamEnum.BOTH, picks: ['ban1'] },
  { turn: 1, team: TeamEnum.TEAM1, picks: ['pick1'] },
  { turn: 2, team: TeamEnum.TEAM2, picks: ['pick1', 'pick2'] },
  { turn: 3, team: TeamEnum.TEAM1, picks: ['pick2', 'pick3'] },
  { turn: 4, team: TeamEnum.TEAM2, picks: ['pick3', 'pick4'] },
  { turn: 5, team: TeamEnum.TEAM1, picks: ['pick4', 'pick5'] },
  { turn: 6, team: TeamEnum.TEAM2, picks: ['pick5'] }
]

export const MAX_COUNTDOWN_TIMER = 20