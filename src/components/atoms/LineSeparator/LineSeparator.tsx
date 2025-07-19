import styles from './LineSeparator.module.scss';

type LineSeparatorProps = {
    color: boolean;
};

const LineSeparator: React.FC<LineSeparatorProps> = (props) => {
    return (
        <div
            className={`
                ${styles.line}
                ${props.color ? styles.colored : styles.default}
            `}
        >
        </div>
    )
}

export default LineSeparator;