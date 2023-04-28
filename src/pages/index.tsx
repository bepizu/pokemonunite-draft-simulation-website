import styles from "../styles/Home.module.css"
import { useRouter } from 'next/router'
import { useState } from 'react'
import Modal from '@/components/Modal'
import { Button, Checkbox, Input, Typography } from '@material-tailwind/react'

export default function Home() {

  const router = useRouter()

  const [showTournamentInfo, setShowTournamentInfo] = useState(false)
  const [showTournamentModal, setShowTournamentModal] = useState(false)
  const [sessionDraftInfo, setSessionDraftInfo] = useState({
    _id: "123",
    lobbyId: "92374923",
    team1: {
      name: "Hisui Ark9",
      sessionUrl: "http://localhost:3000/draft/23409flksjf23?type=0",
      ban1: {},
      pick1: {},
      pick2: {},
      pick3: {},
      pick4: {},
      pick5: {},
    },
    team2: {
      name: "Ark9 Kids",
      sessionUrl: "http://localhost:3000/draft/23409flksjf23?type=1",
      ban1: {},
      pick1: {},
      pick2: {},
      pick3: {},
      pick4: {},
      pick5: {},
    },
    spectator: {
      active: false,
      sessionUrl: "http://localhost:3000/draft/23409flksjf23?type=2"
    }
  })

  return (
    <>
      <div className={styles.logo}>Draft Simulator</div>
      <div className={styles.contentContainer}>
        <p>Escolha um modo de Draft:</p>

        <div className={styles.buttonContainer}>
          <Button color='blue' onClick={() => router.push('/draft')}>Individual</Button>
          <p className={styles.typeTip}>Perfeito para estudo de draft</p>
        </div>

        <hr />

        <div className={styles.buttonContainer}>
          <Button color='blue' onClick={() => setShowTournamentInfo(!showTournamentInfo)}>Scrim / Torneio</Button>
          <p className={styles.typeTip}>Perfeito para Scrims e Torneios</p>
        </div>

        <div className={styles.tournamentContainer} style={{ display: showTournamentInfo ? 'block' : 'none' }}>
          <form className="mt-8 mb-2 w-50">
            <div className="mb-4 flex flex-col gap-6">
              <Input value={sessionDraftInfo.team1.name} onChange={(e) => {
                setSessionDraftInfo({
                  ...sessionDraftInfo,
                  team1: {
                    ...sessionDraftInfo.team1,
                    name: e.target.value
                  }
                })
              }} label="Time 1" />
              <Input value={sessionDraftInfo.team2.name} onChange={(e) => {
                setSessionDraftInfo({
                  ...sessionDraftInfo,
                  team2: {
                    ...sessionDraftInfo.team2,
                    name: e.target.value
                  }
                })
              }} label="Time 2" />
            </div>
            <Checkbox
              label={
                (
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    Possui espectador
                  </Typography>
                )
              }
              checked={sessionDraftInfo.spectator.active}
              onChange={() => setSessionDraftInfo({...sessionDraftInfo, spectator: { ...sessionDraftInfo.spectator, active: !sessionDraftInfo.spectator.active }})}
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button color='light-green' className="mt-6" onClick={() => setShowTournamentModal(!showTournamentModal)} fullWidth>
              Criar Sessão
            </Button>

            <Modal 
              show={showTournamentModal}
              toogleModal={() => setShowTournamentModal(!showTournamentModal)} 
              header={"Informações de Draft"}>
                <p>
                  <div><strong>Draft do Time 1:</strong> <a href={sessionDraftInfo.team1.sessionUrl} target='_blank'>Clique aqui</a></div>
                </p>
                <p>
                  <div><strong>Draft do Time 2:</strong> <a href={sessionDraftInfo.team2.sessionUrl} target='_blank'>Clique aqui</a></div>
                </p>
                {
                  sessionDraftInfo.spectator.active && (
                    <p>
                      <div><strong>Espectador:</strong> <a href={sessionDraftInfo.spectator.sessionUrl} target='_blank'>Clique aqui</a></div>
                    </p>
                  )
                }
            </Modal>
          </form>
        </div>
      </div>
    </>
  )
}