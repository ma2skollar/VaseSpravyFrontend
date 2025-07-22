import type { Metadata } from 'next'
import Header from '@/components/organisms/NavHeader/Header'
import ArticleImageContainer from '@/components/molecules/ArticleImageContainer/ArticleImageContainer'

export const metadata: Metadata = {
  title: 'Vaše Správy',
  description: 'Description will be here...',
}

export default function Home({}) {
  return (
    <>
      <Header/>
      <main>
        
      </main>
    </>
  )
}