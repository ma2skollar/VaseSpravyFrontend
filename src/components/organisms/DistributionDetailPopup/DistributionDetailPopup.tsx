import ClickBox, { IconSize } from '@/components/atoms/ClickBox/ClickBox';
import CloseIcon from '@/components/atoms/Icon/Material/CloseIcon';
import styles from './DistributionDetailPopup.module.scss';
import InformationDescriptionLabel from '@/components/molecules/InformationDescriptionLabel/InformationDescriptionLabel';
import CompassBackground from '@/components/atoms/CompassBackground/CompassBackground';

type ArticleIndicator = {
    id: number;
    backgroundImageLink: string;
    economicBias: number;
    politicalBias: number;
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
            <h2 className='title-sans-regular'>Distribúcia politickej zaujatosti</h2>
            <div className={styles.compassContainer}>
                {props.articleIndicators.map((indicator) => (
                    <div
                        key={indicator.id}
                        className={styles.indicator}
                        style={{
                            left: `${(indicator.economicBias * 35) + 50}%`,
                            top: `${(indicator.politicalBias * 35) + 50}%`,
                            backgroundImage: `url(${indicator.backgroundImageLink})`,
                        }}
                    ></div>
                ))}
                <CompassBackground />
                <span className={`${styles.labelLiberal} label-sans-regular`} >Liberálne</span>
                <span className={`${styles.labelConservative} label-sans-regular`} >Konzervatívne</span>
                <span className={`${styles.labelLeft} label-sans-regular`} >Ekonomická ľavica</span>
                <span className={`${styles.labelRight} label-sans-regular`} >Ekonomická pravica</span>
            </div>
            <p className='text-sans-large'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <InformationDescriptionLabel label={'Ako funguje tento politický kompas?'} description={'Politický kompas je dvojrozmerný graf, ktorý znázorňuje postavenie subjektov podľa ich hodnôt a názorov. Vodorovná os ukazuje ekonomickú orientáciu – od ekonomickej pravice po ekonomickú ľavicu. Zvislá os vyjadruje spoločenskú orientáciu – od konzervatívnych po liberálne postoje. Poloha v konkrétnom kvadrante tak ukazuje kombináciu ekonomických a politických postojov daného subjektu.'} />
        </div>
    )
}

export default DistributionDetailPopup;