import { MAX_HEIGHT_PKMN_BOX, MAX_WIDTH_PKMN_BOX } from '@/constants'
import { BattleType, BattleTypeColor } from '@/types/Pokemon'
import { TeamEnum } from '@/types/Team'
import { CSSProperties } from 'react'

export function selectBackgroundPickColor(picked: string) {
  switch (picked) {
    case TeamEnum.TEAM1:
      return '#4A1885'

    case TeamEnum.TEAM2:
      return '#AF4417'

    default:
      return '#220A3D'
  }
}

export function selectBackgroundPickOpacity(picked: string) {
  switch (picked) {
    case TeamEnum.TEAM1:
      return 0.5

    case TeamEnum.TEAM2:
      return 0.5

    default:
      return 1
  }
}

export function getPokemonImageStyle(pokemon: any): CSSProperties {
  return {
    backgroundImage: `url('/pokemons/${pokemon.images.main}')`,
    backgroundPosition: 'top',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    marginTop: -12,
    marginBottom: 12,
    width: MAX_WIDTH_PKMN_BOX,
    height: MAX_HEIGHT_PKMN_BOX,
    opacity: selectBackgroundPickOpacity(pokemon.picked),
  }
}

export function selectBackgroundColorByBattleType(battleType: number) {
  switch (battleType) {
    case BattleType.ATTACKER:
      return BattleTypeColor.ATTACKER;

    case BattleType.SPEEDSTER:
      return BattleTypeColor.SPEEDSTER;

    case BattleType.ALLROUNDER:
      return BattleTypeColor.ALLROUNDER;

    case BattleType.DEFENDER:
      return BattleTypeColor.DEFENDER;

    case BattleType.SUPPORTER:
      return BattleTypeColor.SUPPORTER;

    default:
      return 'white'
  }
}

export function getPickButtonStyle(pokemon: any): CSSProperties {
  return {
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: selectBackgroundColorByBattleType(pokemon.battleType),
    overflow: 'hidden',
    borderRadius: 12,
    backgroundImage: `url('/pattern-bg.svg')`,
    backgroundPosition: 'top',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    borderColor: selectBackgroundPickColor(pokemon.picked),
    borderWidth: 3,
    display: 'inline-flex',
    margin: 5,
    zIndex: 999
  }
}

export function getPokemonName(pokemon: any): CSSProperties {
  return {
    width: MAX_WIDTH_PKMN_BOX,
    fontSize: 13,
    fontFamily: 'Exo',
    paddingTop: 4,
    paddingBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: '.5px',
    fontStyle: 'italic',
    fontWeight: '900',
    borderInlineWidth: 3,
    borderInlineColor: selectBackgroundPickColor(pokemon.picked),
    backgroundColor: selectBackgroundPickColor(pokemon.picked),
    bottom: 0,
    color: '#ffffff',
    textAlign: "center",
    position: 'absolute',
    zIndex: 99
  }
}

export const styles: Record<string, CSSProperties> = {
  pickOverlay: {
    position: 'absolute',
    width: MAX_WIDTH_PKMN_BOX,
    height: MAX_HEIGHT_PKMN_BOX,
    zIndex: 100
  }
}
