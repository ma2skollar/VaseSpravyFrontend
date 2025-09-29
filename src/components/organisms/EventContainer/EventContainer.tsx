import EventImageContainer from '@/components/molecules/EventImageContainer/EventImageContainer';
import styles from './EventContainer.module.scss';
import TitleListItem from '@/components/molecules/TitleListItem/TitleListItem';
import { EventCategory } from '@/types/event';

interface EventContainerProps {
    title: string;
    category: EventCategory;
    location: string;
    imageUrl: string;
    altText: string;
    distribution: {
        liberal: number;
        conservative: number;
        center: number;
    };
    description: string;
    onClick?: () => void;
}

const EventContainer = (props: EventContainerProps) => {

    const categoryMap: Record<EventCategory, string> = {
        [EventCategory.zahranicna_politika]: "Zahraničná politika",
        [EventCategory.domaca_politika]: "Domáca politika",
        [EventCategory.ekonomika]: "Ekonomika",
        [EventCategory.kultura]: "Kultúra",
        [EventCategory.sport]: "Šport",
    }

    return (
        <div className={styles.container} onClick={props.onClick}>
            <TitleListItem article={false} title={props.title} category={categoryMap[props.category]} location={props.location} />
            <EventImageContainer imageUrl={props.imageUrl} altText={props.altText} distribution={props.distribution} />
            <p className='text-sans-large'>{props.description}</p>
        </div>
    )
}

export default EventContainer;