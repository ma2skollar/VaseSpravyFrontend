'use client'

import Header from '@/components/molecules/Header/Header'
import styles from '@/app/Page.module.scss'
import Footer from '@/components/organisms/Footer/Footer'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { closeSubscribePopup, openSubscribePopup, resizeLarge, resizeMedium, closeNavMenu, toggleNavMenu } from '@/lib/features/headerSlice'
import EventContainer from '@/components/organisms/EventContainer/EventContainer'
import OverlayContainer from '@/components/atoms/OverlayContainer/OverlayContainer'
import SubscriptionPopup from '@/components/organisms/SubscriptionPopup/SubscriptionPopup'
import NavMenu from '@/components/organisms/NavMenu/NavMenu'
import NavBar from '@/components/molecules/NavBar/NavBar'
import EventSourcesFilter from '@/components/organisms/EventSourcesFilter/EventSourcesFilter'

const Home = () => {
  const dispatch = useAppDispatch();
  const navMenuOpen = useAppSelector(state => state.headerReducer).navMenuOpen;
  const subscribePopupOpen = useAppSelector(state => state.headerReducer).subscribePopupOpen;
  const navBarPrimarySelected = useAppSelector(state => state.navBarSwitchReducer).primarySelected;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 88) dispatch(resizeLarge());
      else dispatch(resizeMedium());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  return (
    <>
      <Header onMenuClick={() => dispatch(toggleNavMenu())} onSubscribeClick={() => dispatch(openSubscribePopup())} />
      <OverlayContainer isVisible={subscribePopupOpen} isNavBackdrop={false} onClose={() => dispatch(closeSubscribePopup())}>
        <SubscriptionPopup onClick={() => dispatch(closeSubscribePopup())} />
      </OverlayContainer>
      <OverlayContainer isVisible={navMenuOpen} isNavBackdrop={true} onClose={() => dispatch(closeNavMenu())}>
        <NavMenu />
      </OverlayContainer>
      <NavBar canSwitchContent={true} contentPrimaryText={'Najčítanejšie udalosti'} contentSecondaryText={'Najnovšie udalosti'} />
      <main className={styles.container}>
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRB!')}}/>
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRB!')}}/>
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRB!')}}/>
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRB!')}}/>
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRB!')}}/>
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRB!')}}/>
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRB!')}}/>
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRB!')}}/>
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRB!')}}/>
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRB!')}}/>
      </main>
      <Footer />
    </>
  )
}

export default Home;