'use client'

import styles from '@/app/EventPage.module.scss'
import { BiasMarkerType } from '@/components/atoms/BiasMarker/BiasMarker'
import ClickBox, { IconSize } from '@/components/atoms/ClickBox/ClickBox'
import SmeCustomIcon from '@/components/atoms/Icon/Custom/SmeCustomIcon'
import FilterIcon from '@/components/atoms/Icon/Material/FilterIcon'
import LineSeparator from '@/components/atoms/LineSeparator/LineSeparator'
import OverlayContainer from '@/components/molecules/OverlayContainer/OverlayContainer'
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

const ClientEvent = ({ eventData }: { eventData: any }) => {
  const dispatch = useAppDispatch();

  const [filterVisible, setFilterVisible] = useState(false);

  const distributionDetailVisible = useAppSelector(state => state.singleArticleReducer).isDistributionDetailOpen;

  // TODO: Calculate time and units for "publishedAgo", "publishedUnit", "updatedAgo", "updatedUnit"
  const calculateTime = ({
    latestUpdateISOString,
    firstPublicationISOString
  }: {
    latestUpdateISOString: string,
    firstPublicationISOString: string
  }) => {
    const latestUpdate = new Date(latestUpdateISOString);
    const firstPublication = new Date(firstPublicationISOString);
    const now = new Date();

    return {
      published: {
        ago: 0,
        unit: 'unit'
      },
      updated: {
        ago: 0,
        unit: 'unit'
      }
    }
  }

  // "latestUpdate": "2025-09-26T15:35:34.273Z",
  // "firstPublication": "2025-09-26T15:35:34.273Z",

  return (
    <main className={styles.container}>
      {/* {distributionDetailVisible && <OverlayContainer isNavBackdrop={false} onClose={() => {dispatch(closeDistributionDetail())}}>
        <DistributionDetailPopup description={''} articleIndicators={[
          { id: 1, backgroundImageLink: './dennik-n_circle-icon.png', economicBias: -0.2, politicalBias: 0.8 },
          { id: 2, backgroundImageLink: './hn_circle-icon.png', economicBias: 0.4, politicalBias: -0.6 },
          { id: 3, backgroundImageLink: './sme_circle-icon.png', economicBias: 0.6, politicalBias: -0.4 },
          { id: 4, backgroundImageLink: './sme_circle-icon.png', economicBias: -0.8, politicalBias: 0.2 },
        ]} onClose={() => {dispatch(closeDistributionDetail())}} />
      </OverlayContainer>} */}
      <EventTitle title={eventData.title} category={eventData.category} location={eventData.location} onClick={() => alert('Shared event!')} publishedAgo={18} publishedUnit={'hodinami'} updatedAgo={24} updatedUnit={'minútami'} />
      <ImageContainer imageUrl={eventData.imageUrls[0]} altText={''} imageLabel={''} />
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
        liberal: eventData.liberalCount,
        conservative: eventData.conservativeCount,
        center: eventData.centerCount
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

export default ClientEvent;