import type { Metadata } from 'next'
import Header from '@/components/molecules/Header/Header'
import styles from './Home.module.scss'
import ArticleSourcesFilter from '@/components/molecules/ArticleSourcesFilter/ArticleSourcesFilter'

export const metadata: Metadata = {
  title: 'Vaše Správy',
  description: 'Description will be here...',
}

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.container}>
        <ArticleSourcesFilter title={'Retardi'} options={[
          { option: 'SME', selected: true },
          { option: 'Denník N', selected: false },
          { option: 'HNonline', selected: false },
          { option: 'Aktuality', selected: false },
          { option: 'Pravda', selected: false },
          { option: 'Topky', selected: false },
          { option: 'Nový Čas', selected: false },
        ]} />
      </main>
    </>
  )
}