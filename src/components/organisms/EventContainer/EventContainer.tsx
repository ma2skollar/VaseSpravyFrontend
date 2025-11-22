import EventImageContainer from '@/components/molecules/EventImageContainer/EventImageContainer';
import styles from './EventContainer.module.scss';
import TitleListItem from '@/components/molecules/TitleListItem/TitleListItem';
import { EventCategory } from '@/types/event';

interface EventContainerProps {
    title: string;
    category: EventCategory;
    location: string;
    imageUrls: string[];
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
    return (
        <div className={styles.container} onClick={props.onClick}>
            <TitleListItem 
                article={false} 
                title={props.title} 
                category={props.category} 
                location={props.location}
            />
            <EventImageContainer 
                // imageUrls={props.imageUrls} 
                distribution={props.distribution}
            />
            <p className='text-sans-large' style={{ visibility: 'hidden'}}>{props.description}</p>
        </div>
    )
}

export default EventContainer;