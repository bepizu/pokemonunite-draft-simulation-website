import PickTurn from '@/types/PickTurn';
import { ScreenSize } from '@/types/ScreenSize';
import { TeamEnum } from '@/types/Team';
import getResponsiveStyleSize from '@/utils/get-responsive-style-size';
import { CSSProperties } from 'react';

export const styles = (screenSize: ScreenSize): Record<string, CSSProperties> => ({
  buttonStyle: {
    fontFamily: 'Exo',
    textTransform: 'capitalize',
    background: "#FB7823",
    borderRadius:'100px',
    fontWeight: '700',
    fontSize: `${getResponsiveStyleSize(screenSize, { small: 12, large: 16 })}px`,
    lineHeight: `${getResponsiveStyleSize(screenSize, { small: 16, large: 24 })}px`,
    height: getResponsiveStyleSize(screenSize, { small: 48, large: 64 }),
    width: getResponsiveStyleSize(screenSize, { small: 125, large: 194 }),
    boxShadow: 'none',
  },
  countdownStyle: {
    fontSize: `${getResponsiveStyleSize(screenSize, { small: 46, large: 62 })}px`,
    lineHeight: `${getResponsiveStyleSize(screenSize, { small: 46, large: 72 })}px`,
    height: `${getResponsiveStyleSize(screenSize, { small: 16, large: 24 })}px`,
    textAlign: "center",
    fontFamily: "Exo",
    fontWeight: "900",
    color: "#FB7823",
    textShadow: "-4px 0px 0px #fff, 4px 0px 0px #fff, 0px -4px 0px #fff, 0px 4px 0px #fff"
  },
  titleCountdown: {
    fontSize: `${getResponsiveStyleSize(screenSize, { small: 16, large: 24 } )}px`,
    lineHeight: `${getResponsiveStyleSize(screenSize, { small: 22, large: 32 } )}px`,
    fontFamily: "PT Sans",
    fontWeight: "400",
    color: "#220A3D",
    marginBottom: getResponsiveStyleSize(screenSize, { small: 4, large: 8 } )
  }
})

export function getCountdownTimeContainer (pickTurn: PickTurn, screenSize: ScreenSize): CSSProperties {
  let colorSelected = '#fff'

  switch (pickTurn.team) {
    case TeamEnum.TEAM1:
      colorSelected = '#42287F'
      break

    case TeamEnum.TEAM2:
      colorSelected = '#FB7823'
      break
  }

  return {
    borderColor: colorSelected,
    borderTopWidth: getResponsiveStyleSize(screenSize, { small: 8, large: 13 }),
    margin: 'auto',
    color: '#000',
    width: getResponsiveStyleSize(screenSize, { small: 347, large: 520 } ),
    height: getResponsiveStyleSize(screenSize, { small: 56, large: 95 }),
    textAlign: 'center',
    paddingTop: getResponsiveStyleSize(screenSize, { small: 4, large: 12 } ),
    paddingBottom: getResponsiveStyleSize(screenSize, { small: 4, large: 12 } ),
    backgroundColor: '#fff',
    borderBottomLeftRadius: getResponsiveStyleSize(screenSize, { small: 23, large: 30 }),
    borderBottomRightRadius: getResponsiveStyleSize(screenSize, { small: 23, large: 30 }),
    marginBottom: getResponsiveStyleSize(screenSize, { small: 56, large: 64 } )
  }
}