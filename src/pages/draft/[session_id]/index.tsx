import DraftContainer, { DraftType } from '@/components/DraftContainer';
import DraftSession from '@/types/DraftSession';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProfessionalDraft() {
  const router = useRouter()
  const { type } = router.query
  const [pageContent, setPageContent] = useState(<></>)

  useEffect(() => {
    if (type) {
      switch (type) {
        case "0":
        case "1":
          setPageContent(<DraftContainer type={DraftType.PROFESSIONAL} selectedTeam={Number(type)} draftSession={{} as DraftSession} />)
          break
        
        case "2":
          setPageContent(<DraftContainer type={DraftType.SPECTATOR} draftSession={{} as DraftSession} />)
          break
    
        default:
          router.push("/")
      }
    }
  }, [type])

  return pageContent
}
