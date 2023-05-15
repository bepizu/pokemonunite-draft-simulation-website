import TeamPickContainer from '@/components/TeamPickContainer'
import PokemonContainer from '@/components/PokemonContainer'
import CountdownContainer from '@/components/CountdownContainer'
import { PICK_ORDER } from '@/constants'
import { selectDraftSessionState } from "@/store/draftSessionSlice";
import { useSelector } from "react-redux";
import { TeamEnum } from '@/types/Team'
import { useEffect, useState } from 'react';
import DraftSession from '@/types/DraftSession';

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
  const [draftSession, setDraftSession] = useState<DraftSession | undefined>()

  useEffect(()=>{
    if (draftSessionState) {
      setDraftSession(draftSessionState)
    }
  }, [draftSessionState])

  return (draftSession) ? (
    <div style={{ position: 'relative' }}>

      <CountdownContainer
        pickTurn={PICK_ORDER[draftSession.pickTurn]}
        currentTeam={PICK_ORDER[draftSession.pickTurn].team === TeamEnum.TEAM1 ? draftSession.team1.name : draftSession.team2.name}
        connectedTeam={selectedTeam} 
        draftType={type} />

      {draftSession.team1 && <TeamPickContainer team={draftSession.team1} side={"blue"} />}
      {draftSession.team2 && <TeamPickContainer team={draftSession.team2} side={"red"} />}

      <PokemonContainer selectedTeam={selectedTeam} />

    </div>
  ) : <></>
}