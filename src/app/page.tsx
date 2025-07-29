import type { Metadata } from 'next'
import Header from '@/components/molecules/Header/Header'
import styles from './Home.module.scss'
import CoverageDetail, { CoverageDetailType } from '@/components/molecules/CoverageDetail/CoverageDetail'

export const metadata: Metadata = {
  title: 'Vaše Správy',
  description: 'Description will be here...',
}

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.container}>
        <CoverageDetail type={CoverageDetailType.Distribution} title='Distribution' text={'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'} />
      </main>
    </>
  )
}