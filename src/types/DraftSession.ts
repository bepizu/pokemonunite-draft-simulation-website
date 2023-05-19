import { DraftType } from '@/components/DraftContainer';
import { Pokemon } from './Pokemon';
import { Team } from './Team';
import { DraftStatus } from './DraftStatus';

type DraftSession = {
  _id?: string,
  lobbyId: string,
  team1: Team & Record<string, any>,
  team2: Team & Record<string, any>,
  spectator: Spectator,
  pickTurn: number,
  draftType: DraftType,
  draftStatus?: DraftStatus,
  pokemons?: Pokemon[],
} & Record<string, any>

type Spectator = {
  active: boolean
}

export default DraftSession