import styles from './LineSeparator.module.scss';

type LineSeparatorProps = {
    inNavMenu: boolean;
    isColored: boolean;
};

const LineSeparator: React.FC<LineSeparatorProps> = (props) => {
    return (
        <div
            className={`
                ${styles.line}
                ${props.inNavMenu ? styles.padded : ''}
                ${props.isColored ? styles.colored : styles.default}
            `}
        >
        </div>
    )
}

export default LineSeparator;