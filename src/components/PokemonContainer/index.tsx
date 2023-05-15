import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectDraftSessionState } from '@/store/draftSessionSlice'
import { SocketContext } from '@/context/socket'
import { getPickButtonStyle, getPokemonImageStyle, getPokemonName, styles } from './styles'
import { Pokemon } from '@/types/Pokemon'
import { TeamEnum } from '@/types/Team'

type PokemonContainerProps = {
  selectedTeam?: TeamEnum,
}

export default function PokemonContainer(props: PokemonContainerProps) {

  const { selectedTeam } = props
  const draftSessionState = useSelector(selectDraftSessionState);
  const socket = useContext(SocketContext);
  const [draftSessionId, setDraftSessionId] = useState<string | undefined>()
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>()

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
            onClick={pokemon.picked !== undefined ? () => { }  : () => {
              socket.emit('select-pick', { 
                draftSessionId,
                pokemon,
                timedout: false,
                selectedTeam
              })
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