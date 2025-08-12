import type { Metadata } from 'next'
import Header from '@/components/molecules/Header/Header'
import styles from './Home.module.scss'
import Footer from '@/components/organisms/Footer/Footer'
import NavMenuItem from '@/components/molecules/NavMenuItem/NavMenuItem'
import VaseSpravyIcon from '@/components/atoms/Icon/Custom/VaseSpravyIcon'

export const metadata: Metadata = {
  title: 'Vaše Správy',
  description: 'Description will be here...',
}

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.container}>
      </main>
      <Footer />
    </>
  )
}