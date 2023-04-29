import DraftContainer, { DraftType } from '@/components/DraftContainer';
import DraftSession from '@/types/DraftSession';
import { getRequest } from '@/utils/requests';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProfessionalDraft() {
  const router = useRouter()
  const { type, sessionId } = router.query
  const [pageContent, setPageContent] = useState(<></>)
  const [draftSession, setDraftSession] = useState<DraftSession | undefined>()

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
          setPageContent(<DraftContainer type={DraftType.PROFESSIONAL} selectedTeam={Number(type)} draftSession={draftSession} />)
          break
        
        case "2":
          setPageContent(<DraftContainer type={DraftType.SPECTATOR} draftSession={draftSession} />)
          break
    
        default:
          router.push("/")
      }
    }
  }, [type, draftSession])

  async function getDraftSession() {
    try {
      const request = await getRequest<DraftSession>(`/api/draft/${sessionId}`)
      setDraftSession(request)
    } catch (error) {
      console.error({error})
    }
  }

  return pageContent
}
