import { Team } from './Team';

type DraftSession = {
  _id?: string,
  lobbyId: string,
  team1: Team,
  team2: Team,
  spectator: Spectator
}

type Spectator = {
  active: boolean
}

export default DraftSession