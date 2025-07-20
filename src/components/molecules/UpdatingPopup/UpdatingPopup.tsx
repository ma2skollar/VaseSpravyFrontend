import styles from './UpdatingPopup.module.scss';
import RefreshIcon from '@/components/atoms/Icon/RefreshIcon';

type UpdatingPopupProps = {
    visible: boolean;
}

const UpdatingPopup: React.FC<UpdatingPopupProps> = (props) => {
    return (
        <div className={`${styles.container} ${props.visible ? '' : styles.hidden}`}>
            <RefreshIcon />
            <p className='label-sans-regular'>Aktualizujem</p>
        </div>
    )
}

export default UpdatingPopup;