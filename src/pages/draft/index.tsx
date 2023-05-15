import DraftContainer, { DraftType } from '@/components/DraftContainer';
import DraftSession from '@/types/DraftSession';
import { SocketContext } from '@/context/socket';
import { setDraftSessionState } from '@/store/draftSessionSlice';
import { TeamEnum } from '@/types/Team';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function IndividualDraft() {

  const socket = useContext(SocketContext)
  const dispatch = useDispatch()

  useEffect(() => {
    if (socket) {
      socket.emit('enter-draft', {
        sessionId: uuidv4(),
        viewType: TeamEnum.TEAM1,
        draftType: DraftType.INDIVIDUAL,
        id: socket.id
      })
      socket.on("draft-update", (draftSessionSocket: DraftSession) => {
        dispatch(setDraftSessionState(draftSessionSocket))
      })
      socket.on("draft-connecting", (msg: string) => {
        // console.log("draft-connecting message", {msg})
      })
    }
  }, [socket])

  return <DraftContainer type={DraftType.INDIVIDUAL} selectedTeam={TeamEnum.TEAM1} />
}
