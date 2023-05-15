import DraftSession from '@/types/DraftSession';
import DraftContainer, { DraftType } from '@/components/DraftContainer';
import { SocketContext } from '@/context/socket';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { setDraftSessionState } from "@/store/draftSessionSlice";
import { useDispatch } from "react-redux";
import { TeamEnum } from '@/types/Team';

export default function ProfessionalDraft() {
  const router = useRouter()
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  const { viewType, sessionId } = router.query
  const [pageContent, setPageContent] = useState(<></>)

  useEffect(() => {
    if (socket) {
      try {
        if (sessionId && viewType) {
          socket.emit('enter-draft', {
            sessionId,
            viewType,
            draftType: viewType === DraftType.SPECTATOR ? DraftType.SPECTATOR : DraftType.PROFESSIONAL,
            id: socket.id
          })
        }
      } catch (error) {
        console.error("draft session error", {error})
      }
    }
  }, [sessionId, viewType, socket])

  useEffect(() => {
    if (socket) {
      socket.on("draft-update", (draftSessionSocket: DraftSession) => {
        dispatch(setDraftSessionState(draftSessionSocket))
      })
      socket.on("draft-connecting", (msg: string) => {
        console.log("draft-connecting message", {msg})
      })
    }
  }, [socket])

  useEffect(() => {
    if (viewType) {
      switch (viewType) {
        case "team1":
          setPageContent(<DraftContainer 
            type={DraftType.PROFESSIONAL}
            selectedTeam={TeamEnum.TEAM1} />)
          break
        case "team2":
          setPageContent(<DraftContainer 
            type={DraftType.PROFESSIONAL}
            selectedTeam={TeamEnum.TEAM2} />)
          break
        
        case "spectator":
          setPageContent(<DraftContainer
            type={DraftType.SPECTATOR} />)
          break
    
        default:
          router.push("/")
      }
    }
  }, [viewType])

  return pageContent
}
