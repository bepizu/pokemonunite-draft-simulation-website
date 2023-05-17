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

export function getSelectedPickStyle(): CSSProperties {
  return {
    width: 240,
    height: 100,
    backgroundColor: '#00000040',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'flex-end'
  }
}

export function getSelectedPickFrame(): CSSProperties {
  return {
    width: 100,
    height: 100,
    borderWidth: 3,
    backgroundColor: '#fff',
    borderRadius: 12,
    zIndex: 99
  }
}

export function getSelectedPickTrainer(): CSSProperties {
  return {
    display: 'flex',
    flexDirection: 'column'
  }
}

const styles: Record<string, CSSProperties> = {
  blueSidePosition: {
    marginLeft: 48
  },
  redSidePosition: {
    marginRight: 48
  },
  teamPickContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  },
  selectedBanStyle: {
    width: 53,
    height: 53,
    top: -85,
    borderColor: '#BE433C',
    borderWidth: 4,
    backgroundColor: '#52556750',
    borderRadius: 8,
    position: 'absolute',
    backgroundImage: `url('/icon-ban.svg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
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
    backgroundRepeat: 'no-repeat'
  },
  redSidePositionFrame: {
    borderColor: '#FADAA2',
    backgroundColor: '#AF4417',
    backgroundImage: `url('/symbol-red.svg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
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
}

export default styles