import styles from './LineSeparator.module.scss';

interface LineSeparatorProps {
    inNavMenu: boolean;
    isColored: boolean;
};

const LineSeparator = (props: LineSeparatorProps) => {
    return (
        <hr
            className={`
                ${styles.line}
                ${props.inNavMenu ? styles.padded : ''}
                ${props.isColored ? styles.colored : styles.default}
            `}
        />
    )
}

export default LineSeparator;