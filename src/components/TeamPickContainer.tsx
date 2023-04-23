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
  },
  selectedPickNameStyle: {
    width: '40%',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: 'bold',
    color: '#000',
    right: 25,
    top: '50%',
    transform: 'translateY(-50%)',
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    position: 'absolute'
  },
  selectedBanStyle: {
    width: 53,
    height: 53,
    top: -28,
    borderColor: '#BE433C',
    borderWidth: 4,
    backgroundColor: '#52556750',
    borderRadius: 8,
    position: 'absolute',
  },
  blueSidePositionBan: {
    left: 0,
    float: 'left'
  },
  redSidePositionBan: {
    right: 0,
    float: 'right'
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
      backgroundSize: '40%',
      backgroundRepeat: 'no-repeat'
    }
  }

  function getPokemonSelectedImageStyleBan(image: string): CSSProperties {
    return {
      backgroundImage: `url('${image}')`,
      backgroundPosition: 'left',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat'
    }
  }

  function getSelectedPickStyle (side: string) {
    return {
      width: 230,
      height: 110,
      borderColor: side,
      borderWidth: 3,
      backgroundColor: '#fff',
      borderRadius: 20,
      margin: 5
    }
  }

  return (
    <div id={`${side}-team-picks`} style={{ ...styles.teamPickContainer, ...( side === 'blue' ? styles.blueSidePosition : styles.redSidePosition ) }}>

      <div
        id={`${side}-team-ban-1`}
        style={{ ...styles.selectedBanStyle, ...( side === 'blue' ? styles.blueSidePositionBan : styles.redSidePositionBan ), 
        ...(team.ban.images ? getPokemonSelectedImageStyleBan(team.ban.images.main) : {}) }}
      >
      </div>

      <div style={{...getLabelTypeStyle(side), marginTop: 30 }}>PICKS</div>

      <div
        id={`${side}-team-pick-1`}
        style={{
          ...getSelectedPickStyle(side),
          position: 'relative',
          ...(
            team.pick1.images ? getPokemonSelectedImageStyle(team.pick1.images.main) : {}
          )
        }}
      >
        {team.pick1.name !== undefined && (
          <>
            <div style={styles.selectedPickNameStyle}>{team.pick1.name}</div>
          </>
        )}
      </div>
      <div
        id={`${side}-team-pick-2`}
        style={{
          ...getSelectedPickStyle(side),
          position: 'relative',
          ...(
            team.pick2.images ? getPokemonSelectedImageStyle(team.pick2.images.main) : {}
          )
        }}
      >
        {team.pick2.name !== undefined && (
          <>
            <div style={styles.selectedPickNameStyle}>{team.pick2.name}</div>
          </>
        )}
      </div>
      <div
        id={`${side}-team-pick-3`}
        style={{
          ...getSelectedPickStyle(side),
          position: 'relative',
          ...(
            team.pick3.images ? getPokemonSelectedImageStyle(team.pick3.images.main) : {}
          )
        }}
      >
        {team.pick3.name !== undefined && (
          <>
            <div style={styles.selectedPickNameStyle}>{team.pick3.name}</div>
          </>
        )}
      </div>
      <div
        id={`${side}-team-pick-4`}
        style={{
          ...getSelectedPickStyle(side),
          position: 'relative',
          ...(
            team.pick4.images ? getPokemonSelectedImageStyle(team.pick4.images.main) : {}
          )
        }}
      >
        {team.pick4.name !== undefined && (
          <>
            <div style={styles.selectedPickNameStyle}>{team.pick4.name}</div>
          </>
        )}
      </div>
      <div
        id={`${side}-team-pick-5`}
        style={{
          ...getSelectedPickStyle(side),
          position: 'relative',
          ...(
            team.pick5.images ? getPokemonSelectedImageStyle(team.pick5.images.main) : {}
          )
        }}
      >
        {team.pick5.name !== undefined && (
          <>
            <div style={styles.selectedPickNameStyle}>{team.pick5.name}</div>
          </>
        )}
      </div>
    </div>
  )
}