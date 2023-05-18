import { useContext, useEffect } from 'react'
import { Button } from "@material-tailwind/react";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from '@/context/socket'
import { selectDraftSessionState } from "@/store/draftSessionSlice";
import { TeamEnum } from '@/types/Team';
import { selectCountdownState, setCountdownState } from '@/store/countdownSlice';
import { DraftStatus } from '@/types/DraftStatus';
import { DraftType } from '../DraftContainer';
import { getCountdownTimeContainer, styles } from './styles'
import PickTurn from '@/types/PickTurn';
import useMediaQueries from '@/hooks/useMediaQueries';

type CountdownContainerProps = {
  pickTurn: PickTurn,
  currentTeam: string,
  connectedTeam?: TeamEnum,
  draftType: DraftType
}

export default function CountdownContainer(props: CountdownContainerProps) {
  const { pickTurn, currentTeam, connectedTeam, draftType } = props
  const draftSessionState = useSelector(selectDraftSessionState);
  const countdownState = useSelector(selectCountdownState);
  const screenSize = useMediaQueries()

  const router = useRouter()
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket) {
      socket.on("update-draft-countdown", (msg: { draftStatus: DraftStatus, countdown: number }) => {
        dispatch(setCountdownState(msg))
      })
    }
  }, [socket])

  function startDraft() {
    if (socket) {
      socket
        .emit("update-status-draft", {
          sessionId: draftSessionState._id,
          draftStatus: DraftStatus.Started,
          pickTurnTeam: TeamEnum.TEAM1
        })
    }
  }

  return (countdownState) ? (
    <div id='countdown-timer-container' style={getCountdownTimeContainer(pickTurn, screenSize)}>

      {(countdownState.draftStatus === DraftStatus.NotStarted) && (
        <div>
          <div style={styles(screenSize).titleCountdown}>Bem-vindo ao Draft Simulator!</div>

          {(connectedTeam === TeamEnum.TEAM1) ? (
            <Button style={styles(screenSize).buttonStyle} onClick={() => startDraft()}>Start Draft</Button>
          ) : <p><em>Aguardando o time {draftSessionState.team1.name} iniciar o draft</em></p>}
        </div>
      )}

      {(countdownState.draftStatus === DraftStatus.Started) && (
        <div>
          <div style={styles(screenSize).titleCountdown}>Time {currentTeam} escolhendo</div>
          <div style={styles(screenSize).countdownStyle}>{countdownState.countdown}</div>
        </div>
      )}

      {countdownState.draftStatus === DraftStatus.Finished && (
        <div>
          <div style={styles(screenSize).titleCountdown}>Draft completo!</div>

          {draftType === DraftType.INDIVIDUAL && (
            <Button style={styles(screenSize).buttonStyle} onClick={() => {
              if (draftType === DraftType.INDIVIDUAL) {
                router.reload()
              } else {
                router.push("/")
              }
            }}>Restart Draft</Button>
          )}
        </div>
      )}

    </div>
  ) : <></>
}