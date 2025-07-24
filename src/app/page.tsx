import type { Metadata } from 'next'
import Header from '@/components/molecules/Header/Header'
import OnClickStatus from '@/components/molecules/OnClickStatus/OnClickStatus'

export const metadata: Metadata = {
  title: 'Vaše Správy',
  description: 'Description will be here...',
}

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <OnClickStatus success={false} />
      </main>
    </>
  )
}