import type { Metadata } from 'next'
import Header from '@/components/molecules/Header/Header'
import HoverSwitchComponent from '@/components/molecules/HoverSwitchComponent/HoverSwitchComponent'
import styles from './Home.module.scss'

export const metadata: Metadata = {
  title: 'Vaše Správy',
  description: 'Description will be here...',
}

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.container}>
        <HoverSwitchComponent />
      </main>
    </>
  )
}