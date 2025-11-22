import BiasMarker from '@/components/atoms/BiasMarker/BiasMarker';
import styles from './BaseInfo.module.scss';
import { ArticleBias } from '@/types/article';

interface BaseInfoProps {
    searchResult: boolean;
    category?: string;
    location?: string;
    sourceLogo?: React.ComponentType;
    sourceBias?: ArticleBias;
}

const BaseInfo = (props: BaseInfoProps) => {
    if (props.searchResult) {
        return (
            <div className={styles.containerArticle}>
                <p className='subtitle-sans-light'>{props.category}</p>
                {/* <p className='subtitle-sans-light'>∙</p>
                <p className='subtitle-sans-light'>{props.location}</p> */}
            </div>
        )
    } else {
        return (
            <div className={styles.containerSearchResult}>
                {props.sourceLogo && <props.sourceLogo />}
                {props.sourceBias && <BiasMarker bias={props.sourceBias} />}
            </div>
        )
    }
}

export default BaseInfo;