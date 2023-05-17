import { CSSProperties } from 'react'
import styles, { getPokemonSelectedImageStyle, getSelectedPickFrame, getSelectedPickStyle, getSelectedPickTrainer, selectedPickNameStyle } from './styles'
import Image from 'next/image'
import useMediaQueries from '@/hooks/useMediaQueries'

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
  const screenSize = useMediaQueries()

  return (
    <div id={`${side}-team-picks`} style={{ ...styles(screenSize).teamPickContainer, ...(side === 'blue' ? styles(screenSize).blueSidePosition : styles(screenSize).redSidePosition) }}>

      {[1].map(idx => (
        <div
          key={idx}
          id={`${side}-team-ban-1`}
          style={{
            ...styles(screenSize).selectedBanStyle, ...(side === 'blue' ? styles(screenSize).blueSidePositionBan : styles(screenSize).redSidePositionBan),
            ...(team.ban1.images ? getPokemonSelectedImageStyle(team.ban1.images.main) : {})
          }}
        >
        </div>
      ))}

      {['pick1', 'pick2', 'pick3', 'pick4', 'pick5'].map((pick, idx) => {
        const pickSelected = team[pick]

        const sidePositionStyle: CSSProperties = {
          ...getSelectedPickStyle(screenSize),
          ...(side === 'blue' ? styles(screenSize).blueSidePositionPicks : styles(screenSize).redSidePositionPicks)
        }
        const pickFrameStyle: CSSProperties = {
          ...getSelectedPickFrame(screenSize),
          ...(side === 'blue' ? styles(screenSize).blueSidePositionFrame : styles(screenSize).redSidePositionFrame),
          position: 'relative',
          ...(
            pickSelected.images ? getPokemonSelectedImageStyle(pickSelected.images.main) : {}
          )
        }
        const pickTrainerStyle: CSSProperties = {
          ...getSelectedPickTrainer(screenSize),
          ...(side === 'blue' ? styles(screenSize).blueSidePositionTrainer : styles(screenSize).redSidePositionTrainer)
        }
        const pickNameStyle: CSSProperties = {
          ...selectedPickNameStyle(),
          ...(side === 'blue' ? styles(screenSize).blueSidePositionName : styles(screenSize).redSidePositionName)
        }

        return (
          <div key={idx} id={`${side}-team-pick-${idx}`} style={sidePositionStyle}>
            <div style={pickFrameStyle}></div>
            <div style={pickTrainerStyle}>
              <Avatar />
              <div style={pickNameStyle}>Trainer <span>{(idx + 1)}</span></div>
            </div>
          </div>
        )
      })}

    </div>
  )
}