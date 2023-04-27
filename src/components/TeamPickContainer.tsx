import { CSSProperties } from 'react'

type TeamPickContainerProps = {
  team: any,
  side: string,
}

const styles: Record<string, CSSProperties> = {
  blueSidePosition: {
    top: 90,
    left: 60
  },
  redSidePosition: {
    top: 90,
    right: 60
  },
  teamPickContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  },
  selectedBanStyle: {
    width: 53,
    height: 53,
    top: -70,
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
    marginLeft: -10,
    borderBottomRightRadius: 12,
    backgroundColor: '#C3B4FA',
    paddingLeft: 20
  },
  redSidePositionName: {
    marginRight: -10,
    borderBottomLeftRadius: 12,
    backgroundColor: '#FADAA2',
    paddingRight: 20
  },
}

export default function TeamPickContainer(props: TeamPickContainerProps) {
  const { team, side } = props

  function getPokemonSelectedImageStyle(image: string): CSSProperties {
    return {
      backgroundImage: `url('${image}')`,
      backgroundPosition: 'left',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat'
    }
  }

  function selectedPickNameStyle(): CSSProperties {
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

  function getSelectedPickStyle(): CSSProperties {
    return {
      width: 240,
      height: 100,
      backgroundColor: '#00000040',
      borderRadius: 12,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }

  function getSelectedPickFrame(): CSSProperties {
    return {
      width: 100,
      height: 100,
      borderWidth: 3,
      backgroundColor: '#fff',
      borderRadius: 12,
      zIndex: 99
    }
  }

  function getSelectedPickTrainer(): CSSProperties {
    return {
      display: 'flex',
      flexDirection: 'column'
    }
  }

  return (
    <div id={`${side}-team-picks`} style={{ ...styles.teamPickContainer, ...(side === 'blue' ? styles.blueSidePosition : styles.redSidePosition) }}>


      {[1].map(idx => (
        <div
          key={idx}
          id={`${side}-team-ban-1`}
          style={{
            ...styles.selectedBanStyle, ...(side === 'blue' ? styles.blueSidePositionBan : styles.redSidePositionBan),
            ...(team.ban1.images ? getPokemonSelectedImageStyle(team.ban1.images.main) : {})
          }}
        >
        </div>
      ))}

      {['pick1', 'pick2', 'pick3', 'pick4', 'pick5'].map((pick, idx) => {
        const pickSelected = team[pick]
        console.log({team, pick, pickSelected})

        const sidePositionStyle: CSSProperties = {
          ...getSelectedPickStyle(),
          ...(side === 'blue' ? styles.blueSidePositionPicks : styles.redSidePositionPicks)
        }
        const pickFrameStyle: CSSProperties = {
          ...getSelectedPickFrame(),
          ...(side === 'blue' ? styles.blueSidePositionFrame : styles.redSidePositionFrame),
          position: 'relative',
          ...(
            pickSelected.images ? getPokemonSelectedImageStyle(pickSelected.images.main) : {}
          )
        }
        const pickTrainerStyle: CSSProperties = {
          ...getSelectedPickTrainer(),
          ...(side === 'blue' ? styles.blueSidePositionTrainer : styles.redSidePositionTrainer)
        }
        const pickNameStyle: CSSProperties = {
          ...selectedPickNameStyle(),
          ...(side === 'blue' ? styles.blueSidePositionName : styles.redSidePositionName)
        }

        return (
          <div key={idx} id={`${side}-team-pick-${idx}`} style={sidePositionStyle}>
            <div style={pickFrameStyle}></div>
            <div style={pickTrainerStyle}>
              <img src='avatar.png' alt={`${side} pick ${idx}`}></img>
              <div style={pickNameStyle}>Trainer <span>{idx}</span></div>
            </div>
          </div>
        )
      })}

    </div>
  )
}