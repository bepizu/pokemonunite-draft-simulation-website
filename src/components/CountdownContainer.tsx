import { CSSProperties } from 'react'
import { Button } from "@material-tailwind/react";
import { useRouter } from 'next/router';


type CountdownContainerProps = {
  countdownTime: number,
  currentTeam: string,
  draftStatus: number,
  setDraftStatus: Function,
}

const styles: Record<string, CSSProperties> = {
  buttonStyle: {
    fontFamily: 'Exo',
    textTransform: 'capitalize',
    background: "#FB7823",
    borderRadius:'100px',
    fontWeight: '700',
    fontSize:'16px',
    lineHeight: '24px',
    height: '64px',
    width: '194px',
    boxShadow: 'none',
  },
  countdownStyle: {
    fontSize: "62px",
    lineHeight: "72px",
    height: "24px",
    textAlign: "center",
    fontFamily: "Exo",
    fontWeight: "900",
    color: "#FB7823",
    textShadow: "-4px 0px 0px #fff, 4px 0px 0px #fff, 0px -4px 0px #fff, 0px 4px 0px #fff"
  },
  titleCountdown: {
    fontSize: "24px",
    lineHeight: "32px",
    fontFamily: "PT Sans",
    fontWeight: "400",
    color: "#220A3D",
    marginBottom: 8
  }
}

export default function CountdownContainer (props: CountdownContainerProps) {
  const { countdownTime, currentTeam, draftStatus, setDraftStatus } = props

  const router = useRouter()

  function getCountdownTimeContainer (): CSSProperties {
    let colorSelected = '#fff'

    switch (currentTeam) {
      case 'roxo':
        colorSelected = '#42287F'
        break

      case 'laranja':
        colorSelected = '#FB7823'
        break
    }

    return {
      borderColor: colorSelected,
      borderTopWidth: 13,
      margin: 'auto',
      color: '#000',
      width: 520,
      height: 95,
      textAlign: 'center',
      paddingTop: 11,
      paddingBottom: 10,
      backgroundColor: '#fff',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      marginBottom: 10
    }
  }

  return (
    <div id='countdown-timer-container' style={getCountdownTimeContainer()}>

      {(draftStatus === 0) && (
        <div>
          <div style={styles.titleCountdown}>Boas-vindas ao Draft Simulator!</div>
          <Button style={styles.buttonStyle} onClick={() => setDraftStatus(1)}>Start Draft</Button>
        </div>
      )}

      {draftStatus === 3 && (
        <div>
          <div style={styles.titleCountdown}>Draft completo!</div>
          <Button style={styles.buttonStyle} onClick={() => {
            router.reload()
          }}>Restart Draft</Button>
        </div>
      )}

      {(draftStatus === 1) && (
        <div>
          <div style={{fontSize: "24px", lineHeight: "32px", fontFamily: "PT Sans", fontWeight: "400", color: "#220A3D"}}>Time {currentTeam} escolhendo</div>
          <div style={styles.countdownStyle}>{countdownTime}</div>
        </div>
      )}
      
    </div>
  )
}