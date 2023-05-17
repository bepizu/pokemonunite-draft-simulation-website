import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectDraftSessionState } from '@/store/draftSessionSlice'
import { SocketContext } from '@/context/socket'
import { getPickButtonStyle, getPokemonImageStyle, getPokemonName, styles } from './styles'
import { Pokemon } from '@/types/Pokemon'
import { TeamEnum } from '@/types/Team'
import { DraftType } from '../DraftContainer'
import { selectCountdownState } from '@/store/countdownSlice'
import { DraftStatus } from '@/types/DraftStatus'

type PokemonContainerProps = {
  selectedTeam?: TeamEnum,
}

export default function PokemonContainer(props: PokemonContainerProps) {

  const { selectedTeam } = props
  const draftSessionState = useSelector(selectDraftSessionState);
  const countdownState = useSelector(selectCountdownState)
  const socket = useContext(SocketContext);
  const [draftSessionId, setDraftSessionId] = useState<string | undefined>()
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>()
  const [alreadySelected, _] = useState<string[]>([]) // throttle for select pick delay 

  useEffect(() => {
    if (draftSessionState._id) {
      setDraftSessionId(draftSessionState._id)
    }

    if (draftSessionState.pokemons) {
      setPokemons(draftSessionState.pokemons)
    }
  }, [draftSessionState])

  return (pokemons && draftSessionId && socket) ? (
    <>
      <div id='pokemon-list-select' className="flex flex-wrap" style={{ width: 813, margin: 'auto', marginTop: '64px', }}>
        {pokemons && pokemons.map((pokemon, key) => (
          <div
            onClick={pokemon.picked !== undefined ? () => { } : () => {
              if (!alreadySelected.includes(pokemon.name as string)) {
                socket.emit('select-pick', {
                  draftSessionId,
                  pokemon,
                  timedout: false,
                  selectedTeam
                })
              }

              if (
                (draftSessionState.draftType === DraftType.PROFESSIONAL && countdownState.draftStatus === DraftStatus.Started) ||
                draftSessionState.draftType === DraftType.INDIVIDUAL
              ) {
                alreadySelected.push(pokemon.name as string)
              }
            }} key={key} style={getPickButtonStyle(pokemon)}>
            {pokemon.picked !== undefined ? <div style={styles.pickOverlay}></div> : <></>}
            <div style={getPokemonName(pokemon)}>{pokemon.name}</div>
            <div className="transform transition-all duration-300 hover:scale-110" style={getPokemonImageStyle(pokemon)} />
          </div>
        ))}
      </div>
    </>
  ) : <></>
}