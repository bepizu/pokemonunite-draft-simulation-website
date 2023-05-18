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
import { PICK_ORDER_ALTERNATE_BAN, PICK_ORDER_SIMULTANEOUSLY_BAN } from '@/constants'
import useWindowSize from '@/hooks/useWindowSize'
import getResponsiveStyleSize from '@/utils/get-responsive-style-size'
import useMediaQueries from '@/hooks/useMediaQueries'

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
  const { height: windowHeight } = useWindowSize()
  const screenSize = useMediaQueries()
  const marginTop = getResponsiveStyleSize(screenSize, { small: 108, large: 155 })

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
      <div
        id='pokemon-list-select'
        className="flex flex-wrap hide-scrollbar"
        style={{
          justifyContent: 'center',
          marginTop: -4,
          marginLeft: getResponsiveStyleSize(screenSize, { small: 9, large: 18 }),
          marginRight: getResponsiveStyleSize(screenSize, { small: 9, large: 18 }),
          maxHeight: windowHeight - marginTop,
          maxWidth: 813,
          overflowY: 'scroll',
        }}
      >
        {pokemons && pokemons.map((pokemon, key) => (
          <div
            onClick={pokemon.picked !== undefined ? () => { } : () => {
              const pickTurn = draftSessionState.draftType !== DraftType.INDIVIDUAL ? PICK_ORDER_SIMULTANEOUSLY_BAN[draftSessionState.pickTurn] : PICK_ORDER_ALTERNATE_BAN[draftSessionState.pickTurn]

              if (!alreadySelected.includes(pokemon.name as string)) {
                let socketEvent
                let socketPayload

                if (pickTurn.picks.includes("ban1") && draftSessionState.draftType !== DraftType.INDIVIDUAL) {
                  socketEvent = 'select-ban'
                  socketPayload = {
                    draftSessionId,
                    bans: [{ team: selectedTeam, pick: 'ban1', pokemon }],
                    timedout: false,
                    selectedTeam
                  }
                } else {
                  socketEvent = 'select-pick'
                  socketPayload = {
                    draftSessionId,
                    pokemon,
                    timedout: false,
                    selectedTeam
                  }
                }

                socket.emit(socketEvent, socketPayload)
              }

              if (
                (draftSessionState.draftType === DraftType.PROFESSIONAL && countdownState.draftStatus === DraftStatus.Started) ||
                draftSessionState.draftType === DraftType.INDIVIDUAL
              ) {
                alreadySelected.push(pokemon.name as string)
              }
            }} key={key} style={getPickButtonStyle(pokemon, screenSize)}>
            {pokemon.picked !== undefined ? <div style={styles(screenSize).pickOverlay}></div> : <></>}
            <div style={getPokemonName(pokemon, screenSize)}>{pokemon.name}</div>
            <div className="transform transition-all duration-300 hover:scale-110" style={getPokemonImageStyle(pokemon, screenSize)} />
          </div>
        ))}
      </div>
    </>
  ) : <></>
}