import styles from "../styles/Home.module.css"
import { useRouter } from 'next/router'
import { useState } from 'react'
import Modal from '@/components/Modal'
import { Button, TextField } from '@mui/material'

export default function Home() {

  const router = useRouter()

  const [showTournamentInfo, setShowTournamentInfo] = useState(false)
  const [showTournamentModal, setShowTournamentModal] = useState(false)
  const [sessionDraftInfo, setSessionDraftInfo] = useState({
    _id: "123",
    lobbyId: "92374923",
    team1: {
      name: "Hisui Ark9",
      sessionUrl: "http://localhost:3000/draft/123.0",
      ban1: {},
      pick1: {},
      pick2: {},
      pick3: {},
      pick4: {},
      pick5: {},
    },
    team2: {
      name: "Ark9 Kids",
      sessionUrl: "http://localhost:3000/draft/123.1",
      ban1: {},
      pick1: {},
      pick2: {},
      pick3: {},
      pick4: {},
      pick5: {},
    },
    spectatorUrl: "http://localhost:3000/draft/123"
  })

  return (
    <>
      <div className={styles.logo}>Draft Simulator</div>
      <div className={styles.contentContainer}>
        <p>Escolha um modo de Draft:</p>

        <div className={styles.buttonContainer}>
          <Button color='primary' variant='contained' onClick={() => router.push('/draft')}>Individual</Button>
          <p className={styles.typeTip}>Perfeito para estudo de draft</p>
        </div>

        <hr />

        <div className={styles.buttonContainer}>
          <Button color='primary' variant='contained' onClick={() => setShowTournamentInfo(!showTournamentInfo)}>Scrim / Torneio</Button>
          <p className={styles.typeTip}>Perfeito para Scrims e Torneios</p>
        </div>

        <div className={styles.tournamentContainer} style={{ display: showTournamentInfo ? 'block' : 'none' }}>
          <form>
            <TextField
              required
              label="Informe o nome do Time 1"
            />
            <TextField
              required
              label="Informe o nome do Time 2"
            />
            <TextField
              required
              label="Informe o ID do lobby (opcional)"
            />

            <Button color='success' variant='contained' onClick={() => setShowTournamentModal(true)}>Iniciar Sessão</Button>

            <Modal show={showTournamentModal} handleClose={() => setShowTournamentModal(false)} />

          </form>
        </div>
      </div>
    </>
  )
}