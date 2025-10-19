import { ArticleBias } from '@/types/article';
import styles from './BiasMarker.module.scss';

interface BiasMarkerProps {
    bias: ArticleBias;
};

const BiasMarker = (props: BiasMarkerProps) => {

    const biasMap: Record<ArticleBias, string> = {
        [ArticleBias.liberal]: 'Liberálny',
        [ArticleBias.conservative]: 'Konzervatívny',
        [ArticleBias.center]: 'Neutrálny', 
    }
    console.log(props.bias.slice(-1))

    return (
        <div className={`${styles.container} ${styles[`container--${props.bias.slice(-1)}`]}`}>
            <p className={`${styles.content} label-sans-small`}>{biasMap[props.bias]}</p>
        </div>
    );
}

export default BiasMarker;