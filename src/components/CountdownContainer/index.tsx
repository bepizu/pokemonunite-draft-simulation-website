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

type CountdownContainerProps = {
  currentTeam: string,
  connectedTeam?: TeamEnum,
  draftType: DraftType
}

export default function CountdownContainer (props: CountdownContainerProps) {
  const { currentTeam, connectedTeam, draftType } = props
  const draftSessionState = useSelector(selectDraftSessionState);
  const countdownState = useSelector(selectCountdownState);

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
    <div id='countdown-timer-container' style={getCountdownTimeContainer(currentTeam)}>

      {(countdownState.draftStatus === DraftStatus.NotStarted) && (
        <div>
          <div style={styles.titleCountdown}>Boas-vindas ao Draft Simulator!</div>
          <Button style={styles.buttonStyle} onClick={() => {
            if (connectedTeam === TeamEnum.TEAM1) {
              startDraft()
            } else {
              alert(`Somente o time ${draftSessionState.team1.name} pode iniciar o draft`)
            }
          }}>Start Draft</Button>
        </div>
      )}

      {(countdownState.draftStatus === DraftStatus.Started) && (
        <div>
          <div style={{fontSize: "24px", lineHeight: "32px", fontFamily: "PT Sans", fontWeight: "400", color: "#220A3D"}}>Time {currentTeam} escolhendo</div>
          <div style={styles.countdownStyle}>{countdownState.countdown}</div>
        </div>
      )}

      {countdownState.draftStatus === DraftStatus.Finished && (
        <div>
          <div style={styles.titleCountdown}>Draft completo!</div>
          <Button style={styles.buttonStyle} onClick={() => {
            if (draftType === DraftType.INDIVIDUAL) {
              router.reload()
            } else {
              router.push("/")
            }
          }}>Restart Draft</Button>
        </div>
      )}
      
    </div>
  ) : <></>
}