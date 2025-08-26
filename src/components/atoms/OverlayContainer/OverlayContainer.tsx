import styles from './OverlayContainer.module.scss';

interface OverlayContainerProps {
    isVisible: boolean;
    children: React.ReactNode;
}

const OverlayContainer = (props: OverlayContainerProps) => {
    return (
        <div className={styles.container} style={{ display: props.isVisible ? 'flex' : 'none' }}>
            {props.children}
        </div>
    );
}

export default OverlayContainer;