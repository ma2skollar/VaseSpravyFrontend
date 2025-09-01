import styles from './TitleListItem.module.scss';
import { BiasMarkerType } from '@/components/atoms/BiasMarker/BiasMarker';
import BaseInfo from '@/components/molecules/BaseInfo/BaseInfo';
import OpenNewIcon from '@/components/atoms/Icon/Material/OpenNewIcon';

interface TitleListItemProps {
    article: boolean;
    title: string;
    link?: string;
    publishedAgo?: number;
    publishedUnit?: string;
    sourceLogo?: React.ComponentType;
    sourceBias?: BiasMarkerType;
    category?: string;
    location?: string;
}

const TitleListItem = (props: TitleListItemProps) => {
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
        return (
            <div className={styles.container}>
                <BaseInfo searchResult={true} category={props.category} location={props.location} />
                <h2 className='title-serif-medium'>{props.title}</h2>
            </div>
        )
    }

}

export default TitleListItem;