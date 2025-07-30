import styles from './UpdatingPopup.module.scss';
import RefreshIcon from '@/components/atoms/Icon/Material/RefreshIcon';

interface UpdatingPopupProps {
    visible: boolean;
}

const UpdatingPopup = (props: UpdatingPopupProps) => {
    return (
        <div className={`${styles.container} ${props.visible ? '' : styles.hidden}`}>
            <RefreshIcon />
            <p className='label-sans-regular'>Aktualizujem</p>
        </div>
    )
}

export default UpdatingPopup;