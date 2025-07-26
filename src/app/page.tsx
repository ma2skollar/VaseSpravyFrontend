import type { Metadata } from 'next'
import Header from '@/components/molecules/Header/Header'
import styles from './Home.module.scss'
import BaseInfo from '@/components/molecules/BaseInfo/BaseInfo'
import { BiasMarkerType } from '@/components/atoms/BiasMarker/BiasMarker'
import SmeCustomIcon from '@/components/atoms/Icon/Custom/SmeCustomIcon'

export const metadata: Metadata = {
  title: 'Vaše Správy',
  description: 'Description will be here...',
}

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.container}>
        <BaseInfo searchResult={true} sourceBias={BiasMarkerType.Conservative} sourceLogo={SmeCustomIcon} />
        <BaseInfo searchResult={false} location='New York' category='Politics' />
      </main>
    </>
  )
}