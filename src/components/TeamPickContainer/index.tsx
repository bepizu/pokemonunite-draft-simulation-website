import { CSSProperties } from 'react'
import styles, { getPokemonSelectedImageStyle, getSelectedPickFrame, getSelectedPickStyle, getSelectedPickTrainer, selectedPickNameStyle } from './styles'
import Image from 'next/image'

type TeamPickContainerProps = {
  team: any,
  side: string,
}

function Avatar() {
  return (
    <Image
      src="/avatar.png"
      alt="Avatar image"
      width={86}
      height={86}
    />
  )
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
              <Avatar />
              <div style={pickNameStyle}>Trainer <span>{idx}</span></div>
            </div>
          </div>
        )
      })}

    </div>
  )
}