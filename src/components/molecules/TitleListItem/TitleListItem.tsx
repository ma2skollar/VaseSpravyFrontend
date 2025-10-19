import styles from './TitleListItem.module.scss';
import BaseInfo from '@/components/molecules/BaseInfo/BaseInfo';
import OpenNewIcon from '@/components/atoms/Icon/Material/OpenNewIcon';
import { EventCategory } from '@/types/event';
import { ArticleBias, ArticleSource } from '@/types/article';
import TVNovinyCustomIcon from '@/components/atoms/Icon/Custom/TVNovinyCustomIcon';
import AktualityCustomIcon from '@/components/atoms/Icon/Custom/AktualityCustomIcon';
import HlavneSpravyCustomIcon from '@/components/atoms/Icon/Custom/HlavneSpravyCustomIcon';
import PravdaCustomIcon from '@/components/atoms/Icon/Custom/PravdaCustomIcon';
import SmeCustomIcon from '@/components/atoms/Icon/Custom/SmeCustomIcon';
import StandardCustomIcon from '@/components/atoms/Icon/Custom/StandardCustomIcon';
import DobreNovinyCustomIcon from '@/components/atoms/Icon/Custom/DobreNovinyCustomIcon';
import DennikNCustomIcon from '@/components/atoms/Icon/Custom/DennikNCustomIcon';
import HospodarskeCustomIcon from '@/components/atoms/Icon/Custom/HospodarskeCustomIcon';
import NewsSkCustomIcon from '@/components/atoms/Icon/Custom/NewsSkCustomIcon';
import NovinySkCustomIcon from '@/components/atoms/Icon/Custom/NovinySkCustomIcon';
import TopkyCustomIcon from '@/components/atoms/Icon/Custom/TopkyCustomIcon';
import NovyCasCustomIcon from '@/components/atoms/Icon/Custom/NovyCasCustomIcon';
import PostojCustomIcon from '@/components/atoms/Icon/Custom/PostojCustomIcon';

interface TitleListItemProps {
    article: boolean;
    title: string;
    searchResult?: boolean;
    link?: string;
    publishedAgo?: number;
    publishedUnit?: string;
    sourceLogo?: ArticleSource;
    sourceBias?: ArticleBias;
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

    const sourceMap: Record<ArticleSource, React.ComponentType> = {
        [ArticleSource.aktuality]: AktualityCustomIcon,
        [ArticleSource.cas]: NovyCasCustomIcon,
        [ArticleSource.dennikn]: DennikNCustomIcon,
        [ArticleSource.dobrenoviny]: DobreNovinyCustomIcon,
        [ArticleSource.hlavnespravy]: HlavneSpravyCustomIcon,
        [ArticleSource.hn]: HospodarskeCustomIcon,
        [ArticleSource.newssk]: NewsSkCustomIcon,
        [ArticleSource.novinysk]: NovinySkCustomIcon,
        [ArticleSource.postoj]: PostojCustomIcon,
        [ArticleSource.pravda]: PravdaCustomIcon,
        [ArticleSource.sme]: SmeCustomIcon,
        [ArticleSource.standard]: StandardCustomIcon,
        [ArticleSource.stvr]: () => <div style={{
            height: '20px',
            padding: '0 4px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }} className='label-sans-small'>
            STVR
        </div>,
        [ArticleSource.topky]: TopkyCustomIcon,
        [ArticleSource.tvnoviny]: TVNovinyCustomIcon,
    }

    if (props.article) {
        return (
            <a className={styles.container} href={props.link} target='_blank' rel='noreferrer'>
                <BaseInfo searchResult={false} sourceLogo={sourceMap[props.sourceLogo as ArticleSource]} sourceBias={props.sourceBias} />
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