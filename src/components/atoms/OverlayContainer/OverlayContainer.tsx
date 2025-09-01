import Header from '@/components/molecules/Header/Header';
import styles from './OverlayContainer.module.scss';
import { useAppDispatch } from '@/lib/hooks';
import { openSubscribePopup, toggleNavMenu } from '@/lib/features/headerSlice';

interface OverlayContainerProps {
    isVisible: boolean;
    children: React.ReactNode;
    isNavBackdrop: boolean;
    onClose: () => void;
}

const OverlayContainer = (props: OverlayContainerProps) => {
    const dispatch = useAppDispatch();

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            props.onClose();
        }
    };

    return (
        <div className={`${styles.container} ${props.isNavBackdrop ? '' : styles.centered}`} style={{ display: props.isVisible ? 'flex' : 'none' }} onClick={handleBackdropClick}>
            {props.isNavBackdrop && <Header onMenuClick={() => dispatch(toggleNavMenu())} onSubscribeClick={() => dispatch(openSubscribePopup())} onLogoClick={() => window.location.href = '/'} />}
            {props.children}
        </div>
    );
}

export default OverlayContainer;