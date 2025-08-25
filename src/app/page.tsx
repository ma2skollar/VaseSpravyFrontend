'use client'

import Header from '@/components/molecules/Header/Header'
import styles from './Home.module.scss'
import Footer from '@/components/organisms/Footer/Footer'
import { useEffect } from 'react'
import { useAppDispatch } from '@/lib/hooks'
import { sizeLarge, sizeMedium } from '@/lib/features/headerResizeSlice'
import EventContainer from '@/components/organisms/EventContainer/EventContainer'
import OverlayContainer from '@/components/atoms/OverlayContainer/OverlayContainer'
import CoverageDetailContainer from '@/components/organisms/CoverageDetailContainer/CoverageDetailContainer'
import SubscriptionPopup from '@/components/organisms/SubscriptionPopup/SubscriptionPopup'

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 88) dispatch(sizeLarge());
      else dispatch(sizeMedium());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  return (
    <>
      <Header/>
      <main className={styles.container}>
        <OverlayContainer>
          <SubscriptionPopup onClick={() => {}} />
        </OverlayContainer>
        <EventContainer title="Nice balls BIRD" category='BIRD balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRD!')}}/>
        <EventContainer title="Nice balls BIRD" category='BIRD balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRD!')}}/>
        <EventContainer title="Nice balls BIRD" category='BIRD balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRD!')}}/>
        <EventContainer title="Nice balls BIRD" category='BIRD balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRD!')}}/>
        <EventContainer title="Nice balls BIRD" category='BIRD balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRD!')}}/>
        <EventContainer title="Nice balls BIRD" category='BIRD balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRD!')}}/>
        <EventContainer title="Nice balls BIRD" category='BIRD balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRD!')}}/>
        <EventContainer title="Nice balls BIRD" category='BIRD balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRD!')}}/>
        <EventContainer title="Nice balls BIRD" category='BIRD balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRD!')}}/>
        <EventContainer title="Nice balls BIRD" category='BIRD balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => {alert('Article clicked BIRD!')}}/>
      </main>
      <Footer />
    </>
  )
}