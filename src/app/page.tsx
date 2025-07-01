import type { Metadata } from 'next'
import Header from './components/Header/Header'

export const metadata: Metadata = {
  title: 'Vaše Správy',
  description: 'Description will be here...',
}

export default function Home({}) {
  return (
    <>
      <Header/>
      <main>
        <h1>Welcome to Vaše Správy</h1>
      </main>
    </>
  )
}