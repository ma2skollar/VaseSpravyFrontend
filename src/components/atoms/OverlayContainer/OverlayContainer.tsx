import styles from './OverlayContainer.module.scss';

interface OverlayContainerProps {
    children: React.ReactNode;
}

const OverlayContainer = (props: OverlayContainerProps) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
}

export default OverlayContainer;