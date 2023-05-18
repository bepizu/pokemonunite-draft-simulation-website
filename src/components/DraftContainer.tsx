import TeamPickContainer from '@/components/TeamPickContainer'
import PokemonContainer from '@/components/PokemonContainer'
import CountdownContainer from '@/components/CountdownContainer'
import { PICK_ORDER_ALTERNATE_BAN, PICK_ORDER_SIMULTANEOUSLY_BAN } from '@/constants'
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

const styles = {
  picksContainer: {
    justifyContent: 'center',
    display: 'flex',
  }
}

export default function DraftContainer(props: DraftContainerProps) {

  const { type, selectedTeam } = props
  const draftSessionState = useSelector(selectDraftSessionState);
  const [draftSession, setDraftSession] = useState<DraftSession | undefined>()

  useEffect(() => {
    if (draftSessionState) {
      setDraftSession(draftSessionState)
    }
  }, [draftSessionState])

  return (draftSession) ? (
    <div style={{ position: 'relative' }}>

      <CountdownContainer
        pickTurn={
          type !== DraftType.INDIVIDUAL ?
            PICK_ORDER_SIMULTANEOUSLY_BAN[draftSession.pickTurn] :
            PICK_ORDER_ALTERNATE_BAN[draftSession.pickTurn]
        }
        connectedTeam={selectedTeam}
        draftType={type} />

      <div id="picks-container" style={styles.picksContainer}>
        {draftSession.team1 && <TeamPickContainer team={draftSession.team1} side={"blue"} />}
        <PokemonContainer selectedTeam={selectedTeam} />
        {draftSession.team2 && <TeamPickContainer team={draftSession.team2} side={"red"} />}
      </div>

    </div>
  ) : <></>
}