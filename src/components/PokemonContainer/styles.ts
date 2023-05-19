import { BattleType, BattleTypeColor } from '@/types/Pokemon'
import { ScreenSize } from '@/types/ScreenSize'
import { TeamEnum } from '@/types/Team'
import getResponsiveStyleSize from '@/utils/get-responsive-style-size'
import { CSSProperties } from 'react'

export function selectBackgroundPickColor(picked: string) {
  switch (picked) {
    case TeamEnum.TEAM1:
      return '#4A1885'

    case TeamEnum.TEAM2:
      return '#AF4417'

    case TeamEnum.BOTH:
      return '#22B'

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

    case TeamEnum.BOTH:
      return 0.5

    default:
      return 1
  }
}

export function getPokemonImageStyle(pokemon: any, screenSize: ScreenSize): CSSProperties {
  return {
    backgroundImage: `url('/pokemons/${pokemon.images.main}')`,
    backgroundPosition: 'top',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    marginTop: getResponsiveStyleSize(screenSize, { small: -6, large: -12 }),
    marginBottom: getResponsiveStyleSize(screenSize, { small: 6, large: 12 }),
    width: getResponsiveStyleSize(screenSize, { small: 50, large: 100 }),
    height: getResponsiveStyleSize(screenSize, { small: 64, large: 126 }),
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

export function getPickButtonStyle(pokemon: any, screenSize: ScreenSize): CSSProperties {
  return {
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: selectBackgroundColorByBattleType(pokemon.battleType),
    overflow: 'hidden',
    borderRadius: getResponsiveStyleSize(screenSize, { small: 6, large: 12 }),
    backgroundImage: `url('/pattern-bg.svg')`,
    backgroundPosition: 'top',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    borderColor: selectBackgroundPickColor(pokemon.picked),
    borderWidth: getResponsiveStyleSize(screenSize, { small: 1.8, large: 3 }),
    display: 'inline-flex',
    margin: getResponsiveStyleSize(screenSize, { small: 2, large: 5 }),
    zIndex: 999
  }
}

export function getPokemonName(pokemon: any, screenSize: ScreenSize): CSSProperties {
  return {
    width: getResponsiveStyleSize(screenSize, { small: 50, large: 100 }),
    fontSize: getResponsiveStyleSize(screenSize, { small: 7, large: 13 }),
    fontFamily: 'Exo',
    paddingTop: getResponsiveStyleSize(screenSize, { small: 2, large: 4 }),
    paddingBottom: getResponsiveStyleSize(screenSize, { small: 2, large: 4 }),
    textTransform: 'uppercase',
    letterSpacing: '.5px',
    fontStyle: 'italic',
    fontWeight: '900',
    borderInlineWidth: getResponsiveStyleSize(screenSize, { small: 1.8, large: 3 }),
    borderInlineColor: selectBackgroundPickColor(pokemon.picked),
    backgroundColor: selectBackgroundPickColor(pokemon.picked),
    bottom: 0,
    color: '#ffffff',
    textAlign: "center",
    position: 'absolute',
    zIndex: 99
  }
}

export const styles = (screenSize: ScreenSize): Record<string, CSSProperties> => ({
  pickOverlay: {
    position: 'absolute',
    width: getResponsiveStyleSize(screenSize, { small: 50, large: 100 }),
    height: getResponsiveStyleSize(screenSize, { small: 64, large: 126 }),
    zIndex: 100
  }
})
