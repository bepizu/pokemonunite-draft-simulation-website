import { useEffect, useState } from 'react'
import pokemons from '@/data/pokemons'
import TeamPickContainer from '@/components/TeamPickContainer'
import PokemonContainer from '@/components/PokemonContainer'
import CountdownContainer from '@/components/CountdownContainer'
import { DraftStatus } from '@/types/DraftStatus'
import { MAX_COUNTDOWN_TIMER, PICK_ORDER } from '@/constants'

export default function DraftContainer() {
  const [pickList, _] = useState<Record<string, any>[]>(
    pokemons
      .filter(pkmn => pkmn.active)
      .map(pkmn => ({...pkmn, picked: undefined}))
  )
  const [teams, setTeams] = useState<Record<string, any>[]>([
    {
      teamName: 'blueTeam',
      ban1: {},
      pick1: {},
      pick2: {},
      pick3: {},
      pick4: {},
      pick5: {},
    },
    {
      teamName: 'redTeam',
      ban1: {},
      pick1: {},
      pick2: {},
      pick3: {},
      pick4: {},
      pick5: {},
    }
  ])
  const [pickTurn, setPickTurn] = useState(0)
  const [draftStatus, setDraftStatus] = useState<DraftStatus>(DraftStatus.NotStarted) // 0 not-started, 1 started, 2 paused, 3 finished
  const [countdownTime, setCountdownTime] = useState(0)

  useEffect(() => {
    switch(draftStatus) {
      case DraftStatus.Started:
        setCountdownTime(MAX_COUNTDOWN_TIMER)
        break

    }
  }, [draftStatus]);

  function selectPick (pokemon: any) {
    const currentPickTurn = PICK_ORDER[pickTurn]
    const teamsTemp = teams

    for (let i = 0; i < currentPickTurn.picks.length; i++) {
      const pick = currentPickTurn.picks[i]

      if (teams[currentPickTurn.team][pick].name === undefined) {
        teams[currentPickTurn.team] = {
          ...teams[currentPickTurn.team],
          [pick]: pokemon
        }

        const selectedPokemon = pickList.find(pkmn => pkmn.name === pokemon.name)
        selectedPokemon && (selectedPokemon.picked = currentPickTurn.team)

        break;
      }
    }

    setTeams([...teamsTemp])

    const finishTurn = currentPickTurn.picks.every(pick => teams[currentPickTurn.team][pick].name !== undefined)

    if (finishTurn) {
      const nextPickTurn = pickTurn + 1

      if (nextPickTurn < PICK_ORDER.length) {
        setPickTurn(nextPickTurn)
      }
    } 
  }

  return (
    <div style={{position: 'relative'}}>

      <CountdownContainer 
        currentTeam={PICK_ORDER[pickTurn].team === 0 ? 'azul' : 'vermelho'}
        draftStatus={draftStatus}
        setDraftStatus={setDraftStatus}
        countdownTime={countdownTime} />

      {teams.map((team, idx) => <TeamPickContainer key={idx} team={team} side={idx === 0 ? "blue" : "red"} />)}

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