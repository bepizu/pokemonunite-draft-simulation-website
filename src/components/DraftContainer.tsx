import { useEffect, useState } from 'react'
import pokemons from '@/data/pokemons'
import TeamPickContainer from '@/components/TeamPickContainer'
import PokemonContainer from '@/components/PokemonContainer'
import CountdownContainer from '@/components/CountdownContainer'
import { DraftStatus } from '@/types/DraftStatus'
import { MAX_COUNTDOWN_TIMER, PICK_ORDER } from '@/constants'
import DraftSession from '@/types/DraftSession'
import { getRequest, putRequest } from '@/utils/requests'
import { Team } from '@/types/Team'

export enum DraftType {
  INDIVIDUAL = "individual",
  PROFESSIONAL = "professional",
  SPECTATOR = "spectator"
}

type DraftContainerProps = {
  type: DraftType,
  selectedTeam?: number,
  draftSession?: DraftSession
}

export default function DraftContainer(props: DraftContainerProps) {

  const { type, draftSession: draftSessionBase, selectedTeam } = props
  const [pickList, setPickList] = useState<Record<string, any>[]>([])
  const [draftSession, setDraftSession] = useState<DraftSession | undefined>(draftSessionBase)
  const [pickTurn, setPickTurn] = useState(draftSession?.pickTurn || 0)
  const [draftStatus, setDraftStatus] = useState<DraftStatus>(DraftStatus.NotStarted) // 0 not-started, 1 started, 2 paused, 3 finished
  const [countdownTime, setCountdownTime] = useState(0)

  useEffect(() => {
    if (draftSession) {
      const pickListTemp = pokemons
        .filter(pkmn => pkmn.active)
        .map(pick => {
          Object
            .keys(draftSession.team1)
            .filter(key => key !== "name")
            .forEach(key => {
              if (draftSession.team1[key].name === pick.name) {
                pick.picked = "team1"
              }
            })

          Object
            .keys(draftSession.team2)
            .filter(key => key !== "name")
            .forEach(key => {
              if (draftSession.team2[key].name === pick.name) {
                pick.picked = "team2"
              }
            })

          return pick
        })

      setPickList(pickListTemp)
    }
  }, [draftSession])

  useEffect(() => {
    switch (draftStatus) {
      case DraftStatus.Started:
        setCountdownTime(MAX_COUNTDOWN_TIMER)
        break

    }
  }, [draftStatus]);

  async function saveCurrentDraftSession() {
    try {
      if (draftSession) {
        let draftSessionTemp: Record<string, any> = {}

        Object.keys(draftSession).filter(key => key != "_id").forEach(key => draftSessionTemp[key] = draftSession[key])

        await putRequest(`/api/draft/${draftSession._id}`, draftSessionTemp)
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function selectPick(pokemon: any) {
    const currentPickTurn = PICK_ORDER[pickTurn]

    if (!draftSession || currentPickTurn.team !== `team${selectedTeam as number + 1}`) {
      return
    } else {
      for (let i = 0; i < currentPickTurn.picks.length; i++) {
        const pick = currentPickTurn.picks[i]

        if (draftSession[currentPickTurn.team][pick].name === undefined) {
          draftSession[currentPickTurn.team] = {
            ...draftSession[currentPickTurn.team],
            [pick]: pokemon
          }

          const selectedPokemon = pickList.find(pkmn => pkmn.name === pokemon.name)
          selectedPokemon && (selectedPokemon.picked = currentPickTurn.team)

          // setDraftSession([...teamsTemp])

          break;
        }
      }

      const finishTurn = currentPickTurn.picks.every(pick => draftSession[currentPickTurn.team][pick].name !== undefined)

      if (finishTurn) {
        const nextPickTurn = pickTurn + 1

        if (nextPickTurn < PICK_ORDER.length) {
          setPickTurn(nextPickTurn)
          draftSession.pickTurn = nextPickTurn
        }
      }

      await saveCurrentDraftSession()
    }

  }

  return (
    <div style={{ position: 'relative' }}>

      <CountdownContainer
        currentTeam={PICK_ORDER[pickTurn].team === 'team1' ? 'azul' : 'vermelho'}
        draftStatus={draftStatus}
        setDraftStatus={setDraftStatus}
        countdownTime={countdownTime} />

      {draftSession?.team1 && <TeamPickContainer team={draftSession.team1} side={"blue"} />}
      {draftSession?.team2 && <TeamPickContainer team={draftSession.team2} side={"red"} />}

      <PokemonContainer
        pickList={pickList}
        pickTurn={PICK_ORDER[pickTurn]}
        selectPick={selectPick}
        MAX_COUNTDOWN_TIMER={MAX_COUNTDOWN_TIMER}
        countdownTime={countdownTime}
        draftStatus={draftStatus}
        setDraftStatus={setDraftStatus}
        setCountdownTime={setCountdownTime}
      />

    </div>
  )
}