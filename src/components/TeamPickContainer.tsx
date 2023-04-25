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

  function getLabelTypeStyle (side: string): CSSProperties {
    return {
      width: '100%',
      height: 30,
      lineHeight: 1,
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: side,
      borderRadius: 17,
      textAlign: "center"
    }
  }

  function getPokemonSelectedImageStyle(image: string): CSSProperties {
    return {
      backgroundImage: `url('${image}')`,
      backgroundPosition: 'left',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat'
    }
  }

  function selectedPickNameStyle(side: string): CSSProperties {
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

  function getSelectedPickStyle (side: string) {
    return {
      width: 240,
      height: 100,
      backgroundColor: '#00000040',
      borderRadius: 12,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }

  function getSelectedPickFrame (side: string) {
    return {
      width: 100,
      height: 100,
      borderWidth: 3,
      backgroundColor: '#fff',
      borderRadius: 12,
      zIndex: 99
    }
  }

  function getSelectedPickTrainer (side: string): CSSProperties {
    return {
      display: 'flex',
      flexDirection: 'column'
    }
  }

  return (
    <div id={`${side}-team-picks`} style={{ ...styles.teamPickContainer, ...( side === 'blue' ? styles.blueSidePosition : styles.redSidePosition ) }}>

{/* BAN AREA */}
      <div
        id={`${side}-team-ban-1`}
        style={{ ...styles.selectedBanStyle, ...( side === 'blue' ? styles.blueSidePositionBan : styles.redSidePositionBan ), 
        ...(team.ban.images ? getPokemonSelectedImageStyle(team.ban.images.main) : {}) }}
      >
      </div>

{/* TEAM PICK 1 */}
      <div
        id={`${side}-team-pick-1`}
        style={{
          ...getSelectedPickStyle(side),
          ...( side === 'blue' ? styles.blueSidePositionPicks : styles.redSidePositionPicks )
        }}
      >
        <div
          style={{
          ...getSelectedPickFrame(side),
          ...( side === 'blue' ? styles.blueSidePositionFrame : styles.redSidePositionFrame ),
          position: 'relative',
          ...(
            team.pick1.images ? getPokemonSelectedImageStyle(team.pick1.images.main) : {}
          )
        }}></div>
        <div
          style={{
          ...getSelectedPickTrainer(side),
          ...( side === 'blue' ? styles.blueSidePositionTrainer : styles.redSidePositionTrainer )
        }}>
          <img src='avatar.png'></img>
          <div 
            style={{ 
            ...selectedPickNameStyle(side), 
            ...( side === 'blue' ? styles.blueSidePositionName : styles.redSidePositionName ) 
          }}
          >
            Trainer {side === 'blue' ? <span>1</span> : <span>6</span>}
          </div>
        </div>
      </div>

{/* TEAM PICK 2 */}
      <div
        id={`${side}-team-pick-2`}
        style={{
          ...getSelectedPickStyle(side),
          ...( side === 'blue' ? styles.blueSidePositionPicks : styles.redSidePositionPicks )
        }}
      >
        <div
          style={{
          ...getSelectedPickFrame(side),
          ...( side === 'blue' ? styles.blueSidePositionFrame : styles.redSidePositionFrame ),
          position: 'relative',
          ...(
            team.pick2.images ? getPokemonSelectedImageStyle(team.pick2.images.main) : {}
          )
        }}></div>
        <div
        style={{
          ...getSelectedPickTrainer(side),
          ...( side === 'blue' ? styles.blueSidePositionTrainer : styles.redSidePositionTrainer )
        }}>
          <img src='avatar.png'></img>
          <div 
            style={{ 
            ...selectedPickNameStyle(side), 
            ...( side === 'blue' ? styles.blueSidePositionName : styles.redSidePositionName ) 
          }}
          >
            Trainer {side === 'blue' ? <span>2</span> : <span>7</span>}
          </div>
        </div>
      </div>

{/* TEAM PICK 3 */}
<div
        id={`${side}-team-pick-3`}
        style={{
          ...getSelectedPickStyle(side),
          ...( side === 'blue' ? styles.blueSidePositionPicks : styles.redSidePositionPicks )
        }}
      >
        <div
          style={{
          ...getSelectedPickFrame(side),
          ...( side === 'blue' ? styles.blueSidePositionFrame : styles.redSidePositionFrame ),
          position: 'relative',
          ...(
            team.pick3.images ? getPokemonSelectedImageStyle(team.pick3.images.main) : {}
          )
        }}></div>
        <div
        style={{
          ...getSelectedPickTrainer(side),
          ...( side === 'blue' ? styles.blueSidePositionTrainer : styles.redSidePositionTrainer )
        }}>
          <img src='avatar.png'></img>
          <div 
            style={{ 
            ...selectedPickNameStyle(side), 
            ...( side === 'blue' ? styles.blueSidePositionName : styles.redSidePositionName ) 
          }}
          >
            Trainer {side === 'blue' ? <span>3</span> : <span>8</span>}
          </div>
        </div>
      </div>

{/* TEAM PICK 4 */}
<div
        id={`${side}-team-pick-4`}
        style={{
          ...getSelectedPickStyle(side),
          ...( side === 'blue' ? styles.blueSidePositionPicks : styles.redSidePositionPicks )
        }}
      >
        <div
          style={{
          ...getSelectedPickFrame(side),
          ...( side === 'blue' ? styles.blueSidePositionFrame : styles.redSidePositionFrame ),
          position: 'relative',
          ...(
            team.pick4.images ? getPokemonSelectedImageStyle(team.pick4.images.main) : {}
          )
        }}></div>
        <div
        style={{
          ...getSelectedPickTrainer(side),
          ...( side === 'blue' ? styles.blueSidePositionTrainer : styles.redSidePositionTrainer )
        }}>
          <img src='avatar.png'></img>
          <div 
            style={{ 
            ...selectedPickNameStyle(side), 
            ...( side === 'blue' ? styles.blueSidePositionName : styles.redSidePositionName ) 
          }}
          >
            Trainer {side === 'blue' ? <span>4</span> : <span>9</span>}
          </div>
        </div>
      </div>

{/* TEAM PICK 5 */}
<div
        id={`${side}-team-pick-5`}
        style={{
          ...getSelectedPickStyle(side),
          ...( side === 'blue' ? styles.blueSidePositionPicks : styles.redSidePositionPicks )
        }}
      >
        <div
          style={{
          ...getSelectedPickFrame(side),
          ...( side === 'blue' ? styles.blueSidePositionFrame : styles.redSidePositionFrame ),
          position: 'relative',
          ...(
            team.pick5.images ? getPokemonSelectedImageStyle(team.pick5.images.main) : {}
          )
        }}></div>
        <div
        style={{
          ...getSelectedPickTrainer(side),
          ...( side === 'blue' ? styles.blueSidePositionTrainer : styles.redSidePositionTrainer )
        }}>
          <img src='avatar.png'></img>
          <div 
            style={{ 
            ...selectedPickNameStyle(side), 
            ...( side === 'blue' ? styles.blueSidePositionName : styles.redSidePositionName ) 
          }}
          >
            Trainer {side === 'blue' ? <span>5</span> : <span>10</span>}
          </div>
        </div>
      </div>
    </div>
  )
}