import { TeamEnum } from './Team'

type PickTurn = { 
  turn: number,
  team: TeamEnum,
  picks: string[]
}

export default PickTurn