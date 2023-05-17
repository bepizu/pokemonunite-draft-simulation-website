import styles from "../styles/Home.module.css"
import { useRouter } from 'next/router'
import { useState } from 'react'
import Modal from '@/components/Modal'
import { Button, Input } from '@material-tailwind/react'
import DraftSession from '@/types/DraftSession'
import { postRequest } from '@/utils/requests'
import { DraftType } from '@/components/DraftContainer'
import environment from '@/config/environment'

export default function Home() {

  const router = useRouter()

  const [showTournamentInfo, setShowTournamentInfo] = useState(false)
  const [showTournamentModal, setShowTournamentModal] = useState(false)
  const [showCopyMessage, setShowCopyMessage] = useState({
    team1: "",
    team2: "",
    spectator: ""
  })
  const [sessionDraftInfo, setSessionDraftInfo] = useState<DraftSession>({
    lobbyId: "92374923",
    team1: {
      name: "Team 1",
      ban1: {},
      pick1: {},
      pick2: {},
      pick3: {},
      pick4: {},
      pick5: {},
    },
    team2: {
      name: "Team 2",
      ban1: {},
      pick1: {},
      pick2: {},
      pick3: {},
      pick4: {},
      pick5: {},
    },
    draftType: DraftType.PROFESSIONAL,
    spectator: {
      active: false
    },
    pickTurn: 0
  })

  async function createSession() {
    if (!sessionDraftInfo._id) {
      const createSessionResponse = await postRequest<{ _id: string }>(`${environment.API}/drafts`, sessionDraftInfo)

      if (createSessionResponse?._id) {
        setSessionDraftInfo({ ...sessionDraftInfo, _id: createSessionResponse._id })
      } else {
        console.error("session not created")
      }
    }

    setShowTournamentModal(!showTournamentModal)
  }

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
          <Button color='blue' onClick={() => setShowTournamentInfo(!showTournamentInfo)}>Professional</Button>
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
            {/* <Checkbox
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
            /> */}
            <Button color='light-green' className="mt-6" onClick={createSession} fullWidth>
              Criar Sessão
            </Button>

            <Modal
              show={showTournamentModal}
              toogleModal={() => setShowTournamentModal(!showTournamentModal)}
              header={"Informações de Draft"}>
              <p>
                <strong>Draft do Time 1:</strong>
                <span style={{ cursor: 'pointer' }} onClick={() => {
                  navigator.clipboard.writeText(`${environment.DOMAIN}/draft/${sessionDraftInfo._id}?viewType=team1`)

                  setShowCopyMessage({ ...showCopyMessage, team1: "(copiado)" })
                  setTimeout(() => setShowCopyMessage({ ...showCopyMessage, team1: "" }), 5000)
                }}> clique para copiar o link <small>{showCopyMessage.team1}</small></span>
              </p>
              <p>
                <strong>Draft do Time 2:</strong>
                <span style={{ cursor: 'pointer' }} onClick={() => {
                  navigator.clipboard.writeText(`${environment.DOMAIN}/draft/${sessionDraftInfo._id}?viewType=team2`)

                  setShowCopyMessage({ ...showCopyMessage, team2: "(copiado)" })
                  setTimeout(() => setShowCopyMessage({ ...showCopyMessage, team2: "" }), 5000)
                }}> clique para copiar o link <small>{showCopyMessage.team2}</small></span>
              </p>
              {
                sessionDraftInfo.spectator.active && (
                  <p>
                    <strong>Espectador:</strong>
                    <span style={{ cursor: 'pointer' }} onClick={() => {
                      navigator.clipboard.writeText(`${environment.DOMAIN}/draft/${sessionDraftInfo._id}?viewType=spectator`)

                      setShowCopyMessage({ ...showCopyMessage, spectator: "(copiado)" })
                      setTimeout(() => setShowCopyMessage({ ...showCopyMessage, spectator: "" }), 5000)
                    }}> Copiar link <small>{showCopyMessage.spectator}</small></span>
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