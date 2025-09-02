'use client'

import styles from '@/app/EventPage.module.scss'
import { BiasMarkerType } from '@/components/atoms/BiasMarker/BiasMarker'
import ClickBox, { IconSize } from '@/components/atoms/ClickBox/ClickBox'
import SmeCustomIcon from '@/components/atoms/Icon/Custom/SmeCustomIcon'
import FilterIcon from '@/components/atoms/Icon/Material/FilterIcon'
import InfoIcon from '@/components/atoms/Icon/Material/InfoIcon'
import LineSeparator from '@/components/atoms/LineSeparator/LineSeparator'
import OverlayContainer from '@/components/atoms/OverlayContainer/OverlayContainer'
import EventTitle from '@/components/molecules/EventTitle/EventTitle'
import ImageContainer from '@/components/molecules/ImageContainer/ImageContainer'
import InformationDescriptionLabel from '@/components/molecules/InformationDescriptionLabel/InformationDescriptionLabel'
import SearchBar from '@/components/molecules/SearchBar/SearchBar'
import TitleListItem from '@/components/molecules/TitleListItem/TitleListItem'
import CoverageDetailContainer from '@/components/organisms/CoverageDetailContainer/CoverageDetailContainer'
import DistributionDetailPopup from '@/components/organisms/DistributionDetailPopup/DistributionDetailPopup'
import EventSourcesFilter from '@/components/organisms/EventSourcesFilter/EventSourcesFilter'
import HoverSwitchComponent from '@/components/organisms/HoverSwitchComponent/HoverSwitchComponent'
import { closeDistributionDetail } from '@/lib/features/singleArticleSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useState } from 'react'

const Home = () => {
  const dispatch = useAppDispatch();

  const eventData = {
    id: 0,
    title: "Prezident sa zúčastnil na inauguračnej omši pápeža Leva XIV.",
    location: "Vatikán",
    description: "string",
    category: "Politika",
    region: "Záhraničie",
    createdAt: "2025-09-01T08:45:00.786Z",
    latestUpdate: "2025-09-01T08:45:00.786Z",
    firstPublication: "2025-09-01T08:45:00.786Z",
    politicalBias: 0,
    economicBias: 0,
    summaryLiberal: {},
    summaryConservative: {},
    summaryCenter: {},
    views: 0
  }

  const [filterVisible, setFilterVisible] = useState(false);

  const distributionDetailVisible = useAppSelector(state => state.singleArticleReducer).isDistributionDetailOpen;

  return (
    <main className={styles.container}>
      <OverlayContainer isVisible={distributionDetailVisible} isNavBackdrop={false} onClose={() => {dispatch(closeDistributionDetail())}}>
        <DistributionDetailPopup description={''} articleIndicators={[
          { id: 1, backgroundImageLink: './dennik-n_circle-icon.png', economicBias: -0.2, politicalBias: 0.8 },
          { id: 2, backgroundImageLink: './hn_circle-icon.png', economicBias: 0.4, politicalBias: -0.6 },
          { id: 3, backgroundImageLink: './sme_circle-icon.png', economicBias: 0.6, politicalBias: -0.4 },
          { id: 4, backgroundImageLink: './sme_circle-icon.png', economicBias: -0.8, politicalBias: 0.2 },
        ]} onClose={() => {dispatch(closeDistributionDetail())}} />
      </OverlayContainer>
      <EventTitle title={eventData.title} category={eventData.category} location={eventData.location} onClick={() => alert('Shared event!')} publishedAgo={18} publishedUnit={'hodinami'} updatedAgo={24} updatedUnit={'minútami'} />
      <ImageContainer imageUrl={'https://m.smedata.sk/api-media/media/image/sme/1/90/9095791/9095791_1200x.jpg?rev=4'} altText={'Pellé a papa spolu dohadujú program po ukončení oficiálneho programu.'} imageLabel={'Pellé a papa spolu dohadujú program po ukončení oficiálneho programu.'} />
      <article className={styles.summary}>
        <ul>
          <li className='text-sans-large'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</li>
          <li className='text-sans-large'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>
          <li className='text-sans-large'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</li>
          <li className='text-sans-large'>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</li>
        </ul>
        <InformationDescriptionLabel label={'Zhrnutia sú vytvorené pomocou umelej inteligencie.'} description={'Na zhrnutia článkov využívame vlastné modely umelej inteligencie. Neustále pracujeme na ich zlepšovaní a vyvíjame presnejšie metódy na sumarizáciu. Ak si všimnete chybu, dajte nám vedieť.'} />
      </article>
      <HoverSwitchComponent />
      {/* TODO: Make sticky */}
      <LineSeparator inNavMenu={false} isColored={false} />
      <CoverageDetailContainer eventName={eventData.title} distribution={{
        liberal: 17,
        conservative: 12,
        center: 21
      }} publishedAgo={18} publishedUnit={'hodinami'} updatedAgo={24} updatedUnit={'minútami'} />
      <LineSeparator inNavMenu={false} isColored={false} />
      <div className={styles.sourceListContainer}>
        <div className={styles.sourceListTitle}>
          <h2 className='title-sans-large'>Všetky články</h2>
          <ClickBox icon={FilterIcon} iconSize={IconSize.Regular} onClick={() => setFilterVisible(!filterVisible)} />
        </div>
        {filterVisible && <EventSourcesFilter />}
        <SearchBar action={'https://api.vasespravy.sk/events/{eventId}/article/all'} promptText='Hľadaj článok alebo zdroj'/>
        <ul className={styles.sourceList}>
          <li>
            <TitleListItem article={true} title={'Prezident sa zúčastnil na inauguračnej omši pápeža Leva XIV.'} publishedAgo={18} publishedUnit={'hodinami'} sourceBias={BiasMarkerType.Liberal} sourceLogo={SmeCustomIcon} link='https://domov.sme.sk/c/23492487/prezident-sa-zucastnil-na-inauguracnej-omsi-papeza-leva-xiv.html' />
          </li>
          <LineSeparator inNavMenu={false} isColored={false} />
          <li>
            <TitleListItem article={true} title={'Prezident sa zúčastnil na inauguračnej omši pápeža Leva XIV.'} publishedAgo={18} publishedUnit={'hodinami'} sourceBias={BiasMarkerType.Liberal} sourceLogo={SmeCustomIcon} link='https://domov.sme.sk/c/23492487/prezident-sa-zucastnil-na-inauguracnej-omsi-papeza-leva-xiv.html' />
          </li>
          <LineSeparator inNavMenu={false} isColored={false} />
          <li>
            <TitleListItem article={true} title={'Prezident sa zúčastnil na inauguračnej omši pápeža Leva XIV.'} publishedAgo={18} publishedUnit={'hodinami'} sourceBias={BiasMarkerType.Liberal} sourceLogo={SmeCustomIcon} link='https://domov.sme.sk/c/23492487/prezident-sa-zucastnil-na-inauguracnej-omsi-papeza-leva-xiv.html' />
          </li>
          <LineSeparator inNavMenu={false} isColored={false} />
          <li>
            <TitleListItem article={true} title={'Prezident sa zúčastnil na inauguračnej omši pápeža Leva XIV.'} publishedAgo={18} publishedUnit={'hodinami'} sourceBias={BiasMarkerType.Liberal} sourceLogo={SmeCustomIcon} link='https://domov.sme.sk/c/23492487/prezident-sa-zucastnil-na-inauguracnej-omsi-papeza-leva-xiv.html' />
          </li>
        </ul>
      </div>
    </main>
  )
}

export default Home;