import ClickBox, { IconSize } from '@/components/atoms/ClickBox/ClickBox';
import BaseInfo from '../BaseInfo/BaseInfo';
import styles from './ArticleTitle.module.scss';
import ShareIcon from '@/components/atoms/Icon/Material/ShareIcon';

interface ArticleTitleProps {
    title: string;
    category: string;
    location: string;
    onClick: () => void;
    publishedAgo: number;
    publishedUnit: string;
    updatedAgo: number;
    updatedUnit: string;
}

const ArticleTitle = (props: ArticleTitleProps) => {
    return (
        <div className={styles.container}>
            <h1 className='title-serif-large'>{props.title}</h1>
            <div className={styles.infoContainer}>
                <BaseInfo searchResult={false} category={props.category} location={props.location} />
            </div>
            <div className={styles.shareContainer}>
                <div className={styles.timeContainer}>
                    <p className='subtitle-sans-small'>Publikované pred {props.publishedAgo} {props.publishedUnit}</p>
                    <p className='subtitle-sans-small'>Aktualizované pred {props.updatedAgo} {props.updatedUnit}</p>
                </div>
                <ClickBox icon={ShareIcon} iconSize={IconSize.Regular} />
            </div>
        </div>
    )
}

export default ArticleTitle;