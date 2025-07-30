import BiasMarker, { BiasMarkerType } from '@/components/atoms/BiasMarker/BiasMarker';
import styles from './BaseInfo.module.scss';

interface BaseInfoProps {
    searchResult: boolean;
    category?: string;
    location?: string;
    // TODO: Refator React.FC for svg icons so that it is cleaner and uses typescript correctly
    sourceLogo?: React.FC;
    sourceBias?: BiasMarkerType;
}

const BaseInfo = (props: BaseInfoProps) => {
    if (props.searchResult) {
        return (
            <div className={styles.containerSearchResult}>
                {props.sourceLogo && <props.sourceLogo />}
                {props.sourceBias && <BiasMarker bias={props.sourceBias} />}
            </div>
        )
    } else {
        return (
            <div className={styles.containerArticle}>
                <p className='subtitle-sans-light'>{props.category}</p>
                <p className='subtitle-sans-light'>∙</p>
                <p className='subtitle-sans-light'>{props.location}</p>
            </div>
        )
    }
}

export default BaseInfo;