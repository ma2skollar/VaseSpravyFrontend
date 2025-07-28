import styles from './LineSeparator.module.scss';

interface LineSeparatorProps {
    inNavMenu: boolean;
    isColored: boolean;
};

const LineSeparator = (props: LineSeparatorProps) => {
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