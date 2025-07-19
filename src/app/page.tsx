import type { Metadata } from 'next'
import Header from '@/components/organisms/NavHeader/Header'
// import Footer from '@/components/organisms/Footer/Footer'

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
      {/* <Footer /> */}
    </>
  )
}