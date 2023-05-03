import DraftContainer, { DraftType } from '@/components/DraftContainer';
import DraftSession from '@/types/DraftSession';
import { getRequest } from '@/utils/requests';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import io, {Socket} from 'Socket.IO-client'

let socket: Socket | undefined

export default function ProfessionalDraft() {
  const router = useRouter()
  const { type, sessionId } = router.query
  const [pageContent, setPageContent] = useState(<></>)
  const [draftSession, setDraftSession] = useState<DraftSession | undefined>()

  console.log('socket', socket)

  useEffect(() => {
    if (sessionId) {
      getDraftSession()
    }
  }, [sessionId])

  useEffect(() => {
    if (type && draftSession) {
      switch (type) {
        case "0":
        case "1":
          setPageContent(<DraftContainer type={DraftType.PROFESSIONAL} selectedTeam={Number(type)} draftSession={draftSession} selectPick={updateDraftSocket} />)
          break
        
        case "2":
          setPageContent(<DraftContainer type={DraftType.SPECTATOR} draftSession={draftSession} selectPick={updateDraftSocket} />)
          break
    
        default:
          router.push("/")
      }
    }
  }, [type, draftSession])

  function updateDraftSocket() {
    if (socket) {
      socket.emit('select-pick', {
        sessionId,
        type,
        payload: draftSession
      })
    }
  }

  async function getDraftSession() {
    try {
      if (!socket) {
        socket = io('http://localhost:8001', {autoConnect: false})
        console.log("session created", socket.id)
        socket.connect()
      } else {
        console.log("session already created", socket.id)
      }

      socket.on('connect', () => { 
        if (socket) {
          console.log(`Team ${type} connected`)
  
          socket.emit('enter-draft', {
            sessionId,
            type,
            id: socket.id
          })
        }
      })
      socket.on("connect_error", (error: any) => { console.error(`error during connecting`, {error}) });
      socket.on("draft-update", (draftSessionSocket: DraftSession) => {
        console.log("draft-update received message", {draftSessionSocket})
        setDraftSession(draftSessionSocket)
      })
    } catch (error) {
      console.error("draft session error", {error})
    }
  }

  return pageContent
}
