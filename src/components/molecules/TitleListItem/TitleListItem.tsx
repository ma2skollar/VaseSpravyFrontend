import styles from './TitleListItem.module.scss';
import { BiasMarkerType } from '@/components/atoms/BiasMarker/BiasMarker';
import BaseInfo from '@/components/molecules/BaseInfo/BaseInfo';
import OpenNewIcon from '@/components/atoms/Icon/Material/OpenNewIcon';
import { EventCategory } from '@/types/event';

interface TitleListItemProps {
    article: boolean;
    title: string;
    searchResult?: boolean;
    link?: string;
    publishedAgo?: number;
    publishedUnit?: string;
    sourceLogo?: React.ComponentType;
    sourceBias?: BiasMarkerType;
    category?: EventCategory;
    location?: string;
}

const TitleListItem = (props: TitleListItemProps) => {

    const categoryMap: Record<EventCategory, string> = {
        [EventCategory.zahranicna_politika]: "Zahraničná politika",
        [EventCategory.domaca_politika]: "Domáca politika",
        [EventCategory.ekonomika]: "Ekonomika",
        [EventCategory.kultura]: "Kultúra",
        [EventCategory.sport]: "Šport",
    }

    if (props.article) {
        return (
            <a className={styles.container} href={props.link} target='_blank' rel='noreferrer'>
                <BaseInfo searchResult={false} sourceLogo={props.sourceLogo} sourceBias={props.sourceBias} />
                <h2 className='title-serif-medium'>{props.title}</h2>
                <div className={styles.subtitle}>
                    <p className='subtitle-sans-light'>Publikované pred {props.publishedAgo} {props.publishedUnit}</p>
                    <OpenNewIcon />
                </div>
            </a>
        )
    } else {
        if (props.searchResult) {
            return <a className={styles.container} href={props.link} target='_self' rel='noreferrer'>
                <BaseInfo searchResult={true} category={categoryMap[props.category as EventCategory]} location={props.location} />
                <h2 className='title-serif-medium'>{props.title}</h2>
                <div className={styles.subtitle}>
                    <p className='subtitle-sans-light'>Publikované pred {props.publishedAgo} {props.publishedUnit}</p>
                    <OpenNewIcon />
                </div>
            </a>
        } else {
            return (
                <div className={styles.container}>
                    <BaseInfo searchResult={true} category={categoryMap[props.category as EventCategory]} location={props.location} />
                    <h2 className='title-serif-medium'>{props.title}</h2>
                </div>
            )
        }
    }

}

export default TitleListItem;