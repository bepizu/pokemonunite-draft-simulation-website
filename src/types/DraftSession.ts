import { Team } from './Team';

type DraftSession = {
  _id?: string,
  lobbyId: string,
  team1: Team & Record<string, any>,
  team2: Team & Record<string, any>,
  spectator: Spectator,
  pickTurn: number
} & Record<string, any>

type Spectator = {
  active: boolean
}

export default DraftSession