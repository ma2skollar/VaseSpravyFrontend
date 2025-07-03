'use client'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'
import NavBarItem from '@/components/NavBarItem/NavBarItem'
import { useState } from 'react'

export default function Home() {

  const [trending, setTrending] = useState(true);
  const [latest, setLatest] = useState(false);

  const handleTrendingClick = () => {
    setTrending(true);
    setLatest(false);
  }

  const handleLatestClick = () => {
    setTrending(false);
    setLatest(true);
  }

  return (
    <>
      <Header/>
      <NavBar visible={true}>
        <NavBarItem content={'Najčítanejšie udalosti'} active={trending} onClick={handleTrendingClick}/>
        <NavBarItem content={'Najnovšie udalosti'} active={latest} onClick={handleLatestClick}/>
      </NavBar>
      <main>
        <h1>Welcome to Vaše Správy</h1>
      </main>
      <Footer />
    </>
  )
}