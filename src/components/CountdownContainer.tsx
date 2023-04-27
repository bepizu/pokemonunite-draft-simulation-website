import { CSSProperties, useEffect } from 'react'
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

type CountdownContainerProps = {
  countdownTime: number,
  currentTeam: string,
  draftStatus: number,
  setDraftStatus: Function,
}

export default function CountdownContainer (props: CountdownContainerProps) {
  const { countdownTime, currentTeam, draftStatus, setDraftStatus } = props

  const router = useRouter()

  function getCountdownTimeContainer (): CSSProperties {
    let colorSelected = '#fff'

    switch (currentTeam) {
      case 'azul':
        colorSelected = 'blue'
        break

      case 'vermelho':
        colorSelected = 'red'
        break
    }

    return {
      borderWidth: 3,
      borderColor: colorSelected,
      borderTopWidth: 0,
      margin: 'auto',
      color: '#000',
      width: 400,
      textAlign: 'center',
      paddingTop: 20,
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
          <Button color="success" onClick={() => setDraftStatus(1)}>Start Draft</Button>
        </div>
      )}

      {draftStatus === 3 && (
        <div>
          <Button color="secondary" onClick={() => {
            router.reload()
          }}>Restart Draft</Button>
        </div>
      )}

      {(draftStatus === 1) && (
        <div>
          <div style={{fontSize: 24, lineHeight: 0.8}}>Time {currentTeam} escolhendo</div>
          <div style={{fontSize: 64, lineHeight: 1}}>{countdownTime}</div>
        </div>
      )}
      
    </div>
  )
}