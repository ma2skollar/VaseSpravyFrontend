'use client'

import styles from '@/app/SearchPage.module.scss'
import LineSeparator from '@/components/atoms/LineSeparator/LineSeparator';
import SearchBar from '@/components/molecules/SearchBar/SearchBar';
import TitleListItem from '@/components/molecules/TitleListItem/TitleListItem';
import { Event } from '@/types/event'
import { getTimeDiff } from '@/util/getTimeDiff';
import { Fragment } from 'react';

interface ClientSearchProps {
    searchQuery: string;
    events?: Event[];
    noResults?: boolean;
}

const ClientSearch = (props: ClientSearchProps) => {
    const resultsCount = props.events ? props.events.length : 0;
    const resultSpelling = resultsCount === 1 ? 'výsledok' : (resultsCount >= 2 && resultsCount <= 4) ? 'výsledky' : 'výsledkov';
    return (
        <main className={styles.container}>
            <SearchBar value={props.searchQuery} />
            <div className={styles.searchInfo}>
                <h2 className='title-sans-regular'>Všetky výsledky vyhľadávania</h2>
                <h3 className='subtitle-sans-regular'>
                    <span style={{ fontWeight: '600' }}>{resultsCount}</span> {resultSpelling} pre {`"${props.searchQuery}"`}
                </h3>
            </div>
            {props.noResults ? 
                <div className={styles.searchTips}>
                    <p className='text-sans-large'>Vyskúšajte tieto tipy pre lepšie výsledky:</p>
                    <ul className='text-sans-large'>
                        <li>Uistite sa, že ste všetko správne napísali</li>
                        <li>Rozšírte svoje vyhľadávanie tým, že budete menej konkrétni</li>
                        <li>Skúste iné kľúčové slovo alebo frázu</li>
                    </ul>
                </div>
            :
                props.events?.map((event, index) => {
                    const timeInfo = getTimeDiff(new Date(event.firstPublication), new Date())
                    return (
                        <Fragment key={event.id}>
                            {index !== 0 && <LineSeparator inNavMenu={false} isColored={false} />}
                            <TitleListItem key={index} article={false} searchResult={true} title={event.title} category={event.category} location={event.location} link={`/udalosti/${event.id}`} publishedAgo={timeInfo.ago} publishedUnit={timeInfo.unit} />
                        </Fragment>
                    )
                })
            }
        </main>
    );
}

export default ClientSearch;