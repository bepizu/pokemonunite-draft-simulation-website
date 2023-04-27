import { Button } from '@material-tailwind/react'
import styles from "../styles/Home.module.css"
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()

  return (
    <>
      <div className={styles.logo}>Draft Simulator</div>
      <div className={styles.contentContainer}>
        <p>Escolha um modo de Draft:</p>

        <div className={styles.buttonContainer}>
          <Button onClick={() => router.push('/draft')}>Individual</Button>
          <p className={styles.typeTip}>Perfeito para estudo de draft</p>
        </div>
        <div className={styles.buttonContainer}>
          <Button>Scrim/Torneio</Button>
          <p className={styles.typeTip}>Perfeito para Scrims e Torneios</p>
        </div>
      </div>
    </>
  )
}