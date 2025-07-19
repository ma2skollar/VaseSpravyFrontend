import styles from './BiasMarker.module.scss';

export enum BiasMarkerType {
    Center = 'Stredný',
    Conservative = 'Konzervatívny',
    Liberal = 'Liberálny',
}

type BiasMarkerProps = {
    bias: BiasMarkerType;
};

const BiasMarker: React.FC<BiasMarkerProps> = (props) => {
    return (
        <div className={`${styles.container} ${styles[`container--${props.bias.charAt(0)}`]}`}>
            <p className={`${styles.content} label-sans-small`}>{props.bias}</p>
        </div>
    );
}

export default BiasMarker;