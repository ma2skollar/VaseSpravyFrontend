import ClickBox, { IconSize } from '@/components/atoms/ClickBox/ClickBox';
import CloseIcon from '@/components/atoms/Icon/Material/CloseIcon';
import styles from './DistributionDetailPopup.module.scss';
import InformationDescriptionLabel from '@/components/molecules/InformationDescriptionLabel/InformationDescriptionLabel';
import CompassBackground from '@/components/atoms/CompassBackground/CompassBackground';

type ArticleIndicator = {
    id: number;
    link: string;
    icon: React.ComponentType;
    politicalBias: number;
    economicBias: number;
}

interface DistributionDetailPopupProps {
    description: string;
    articleIndicators: ArticleIndicator[];
    onClose: () => void;
}

const DistributionDetailPopup = (props: DistributionDetailPopupProps) => {
    return (
        <div className={styles.container}>
            <ClickBox icon={CloseIcon} iconSize={IconSize.Regular} onClick={props.onClose} />
            <h2 className='title-sans-regular'>Chcete aby sme Vás informovali o nových udalostiach a prehľade ich politickej zaujatosti?</h2>
            <CompassBackground />
            <p className='text-sans-large'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <InformationDescriptionLabel label={'Ako funguje tento politický kompas?'} description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'} />
        </div>
    )
}

export default DistributionDetailPopup;