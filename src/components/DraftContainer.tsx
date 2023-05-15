import TeamPickContainer from '@/components/TeamPickContainer'
import PokemonContainer from '@/components/PokemonContainer'
import CountdownContainer from '@/components/CountdownContainer'
import { PICK_ORDER } from '@/constants'
import { selectDraftSessionState } from "@/store/draftSessionSlice";
import { useSelector } from "react-redux";
import { TeamEnum } from '@/types/Team'

export enum DraftType {
  INDIVIDUAL = "individual",
  PROFESSIONAL = "professional",
  SPECTATOR = "spectator"
}

type DraftContainerProps = {
  type: DraftType,
  selectedTeam?: TeamEnum,
}

export default function DraftContainer(props: DraftContainerProps) {

  const { type, selectedTeam } = props
  const draftSessionState = useSelector(selectDraftSessionState);

  return (draftSessionState) ? (
    <div style={{ position: 'relative' }}>

      <CountdownContainer
        currentTeam={PICK_ORDER[draftSessionState.pickTurn].team === TeamEnum.TEAM1 ? draftSessionState.team1.name : draftSessionState.team2.name}
        connectedTeam={selectedTeam} 
        draftType={type} />

      {draftSessionState.team1 && <TeamPickContainer team={draftSessionState.team1} side={"blue"} />}
      {draftSessionState.team2 && <TeamPickContainer team={draftSessionState.team2} side={"red"} />}

      <PokemonContainer selectedTeam={selectedTeam} />

    </div>
  ) : <></>
}