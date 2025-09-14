import styles from '@/app/FeedPage.module.scss'
import EventContainer from '@/components/organisms/EventContainer/EventContainer'
import NavBar from '@/components/molecules/NavBar/NavBar'

const Home = () => {
  return (
    <>
      <NavBar canSwitchContent={false} contentPrimaryText={'Najnovšie udalosti'} />
      <main className={styles.container}>
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' />
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' />
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' />
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' />
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' />
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' />
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' />
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' />
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' />
        <EventContainer title="Nice balls BIRB" category='BIRB balls' location='bird nest' imageUrl='https://i.redd.it/1bl2mi5gfevc1.jpeg' altText='Bird with MASSIVE balls' distribution={{
          liberal: 20,
          conservative: 45,
          center: 1005
        }} description='lorem ipsum dolor sit amet consectetur adipiscing elit' />
      </main>
    </>
  )
}

export default Home;