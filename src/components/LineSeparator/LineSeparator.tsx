import styles from './LineSeparator.module.scss';

type LineSeparatorProps = {
    color: boolean;
    fullOpacity: boolean;
};

const LineSeparator: React.FC<LineSeparatorProps> = (props) => {
    return (
        <div
            className={`
                ${styles.line}
                ${props.color ? styles.colored : styles.default}
                ${props.fullOpacity ? styles.fullOpacity : styles.notFullOpacity}
            `}
        >
        </div>
    )
}

export default LineSeparator;