import DraftContainer, { DraftType } from '@/components/DraftContainer';
import DraftSession from '@/types/DraftSession';
import { useState } from 'react';

export default function IndividualDraft() {
  const [sessionDraftInfo, _] = useState<DraftSession>({
    lobbyId: "92374923",
    team1: {
      name: "Hisui Ark9",
      ban1: {},
      pick1: {},
      pick2: {},
      pick3: {},
      pick4: {},
      pick5: {},
    },
    team2: {
      name: "Ark9 Kids",
      ban1: {},
      pick1: {},
      pick2: {},
      pick3: {},
      pick4: {},
      pick5: {},
    },
    spectator: {
      active: false
    },
    pickTurn: 0
  })
  return <DraftContainer type={DraftType.INDIVIDUAL} draftSession={sessionDraftInfo} />
}
