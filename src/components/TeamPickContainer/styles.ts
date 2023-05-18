import { ScreenSize } from '@/types/ScreenSize'
import getResponsiveStyleSize from '@/utils/get-responsive-style-size'
import { CSSProperties } from 'react'

export function getPokemonSelectedImageStyle(image: string): CSSProperties {
  return {
    backgroundImage: `url('/pokemons/${image}')`,
    backgroundPosition: 'left',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
  }
}

export function selectedPickNameStyle(): CSSProperties {
  return {
    width: 150,
    fontWeight: '400',
    color: '#220A3D',
    position: 'relative',
    paddingLeft: 14,
    paddingBottom: 4,
    paddingRight: 14,
    zIndex: 9
  }
}

export function getSelectedPickStyle(screenSize: ScreenSize): CSSProperties {
  return {
    width: getResponsiveStyleSize(screenSize, { small: 50, medium: 100, large: 240 }),
    height: getResponsiveStyleSize(screenSize, { small: 50, large: 100 }),
    backgroundColor: '#00000040',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'flex-end'
  }
}

export function getSelectedPickFrame(screenSize: ScreenSize): CSSProperties {
  return {
    width: getResponsiveStyleSize(screenSize, { small: 50, large: 100 }),
    height: getResponsiveStyleSize(screenSize, { small: 50, large: 100 }),
    borderWidth: getResponsiveStyleSize(screenSize, { small: 1, large: 3 }),
    backgroundColor: '#fff',
    borderRadius: getResponsiveStyleSize(screenSize, { small: 6, large: 12 }),
    zIndex: 99
  }
}

export function getSelectedPickTrainer(screenSize: ScreenSize): CSSProperties {
  return {
    display: screenSize === ScreenSize.LARGE ? 'flex' : 'none',
    flexDirection: 'column'
  }
}

const styles = (screenSize: ScreenSize): Record<string, CSSProperties> => ({
  blueSidePosition: {
    marginLeft: getResponsiveStyleSize(screenSize, { small: 14, medium: 24, large: 48 })
  },
  redSidePosition: {
    marginRight: getResponsiveStyleSize(screenSize, { small: 14, medium: 24, large: 48 })
  },
  teamPickContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: getResponsiveStyleSize(screenSize, { small: 8, large: 24 }),
  },
  selectedBanStyle: {
    width: getResponsiveStyleSize(screenSize, { small: 26, large: 53 }),
    height: getResponsiveStyleSize(screenSize, { small: 26, large: 53 }),
    top: getResponsiveStyleSize(screenSize, { small: -38, large: -85 }),
    borderColor: '#BE433C',
    borderWidth: getResponsiveStyleSize(screenSize, { small: 2, large: 4 }),
    backgroundColor: '#52556750',
    borderRadius: getResponsiveStyleSize(screenSize, { small: 4, large: 8 }),
    position: 'absolute',
    backgroundImage: `url('/icon-ban.svg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: getResponsiveStyleSize(screenSize, { small: 16, large: 32 }),
  },
  blueSidePositionBan: {
    left: 0,
    float: 'left'
  },
  redSidePositionBan: {
    right: 0,
    float: 'right'
  },
  blueSidePositionPicks: {
    flexDirection: 'row'
  },
  redSidePositionPicks: {
    flexDirection: 'row-reverse'
  },
  blueSidePositionFrame: {
    borderColor: '#C3B4FA',
    backgroundColor: '#4A1885',
    backgroundImage: `url('/symbol-blue.svg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '75%',
  },
  redSidePositionFrame: {
    borderColor: '#FADAA2',
    backgroundColor: '#AF4417',
    backgroundImage: `url('/symbol-red.svg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '75%',
  },
  blueSidePositionTrainer: {
    alignItems: 'flex-start'
  },
  redSidePositionTrainer: {
    alignItems: 'flex-end',
    textAlign: 'right',
  },
  blueSidePositionName: {
    borderBottomRightRadius: 12,
    backgroundColor: '#C3B4FA',
    paddingLeft: 20
  },
  redSidePositionName: {
    borderBottomLeftRadius: 12,
    backgroundColor: '#FADAA2',
    paddingRight: 20
  },
})

export default styles