import { CSSProperties } from 'react'
import styles, { getPokemonSelectedImageStyle, getSelectedPickFrame, getSelectedPickStyle, getSelectedPickTrainer, selectedPickNameStyle } from './styles'

type TeamPickContainerProps = {
  team: any,
  side: string,
}

export default function TeamPickContainer(props: TeamPickContainerProps) {
  const { team, side } = props

  

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