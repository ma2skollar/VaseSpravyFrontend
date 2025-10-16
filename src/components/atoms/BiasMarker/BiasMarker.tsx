import { ArticleBias } from '@/types/article';
import styles from './BiasMarker.module.scss';

interface BiasMarkerProps {
    bias: ArticleBias;
};

const BiasMarker = (props: BiasMarkerProps) => {
    return (
        <div className={`${styles.container} ${styles[`container--${props.bias.charAt(0)}`]}`}>
            <p className={`${styles.content} label-sans-small`}>{props.bias}</p>
        </div>
    );
}

export default BiasMarker;