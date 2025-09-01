import styles from './CoverageDetail.module.scss';
import ClickBox, { IconSize } from '@/components/atoms/ClickBox/ClickBox';
import OpenFullIcon from '@/components/atoms/Icon/Material/OpenFullIcon';
import CompassBackground from '@/components/atoms/CompassBackground/CompassBackground';
import BlockTitle from '@/components/molecules/BlockTitle/BlockTitle';

export enum CoverageDetailType {
    Distribution,
    Stats,
    Ownership
}

interface BaseCoverageDetailProps {
    title: string;
    onClick?: () => void;
}

interface DistributionCoverageDetailProps extends BaseCoverageDetailProps {
    type: CoverageDetailType.Distribution;
    text: string;
}

interface StatsCoverageDetailProps extends BaseCoverageDetailProps {
    type: CoverageDetailType.Stats;
    distribution: {
        center: number;
        liberal: number;
        conservative: number;
    }
    publishedAgo: number;
    publishedUnit: string;
    updatedAgo: number;
    updatedUnit: string;
}

interface OwnershipCoverageDetailProps extends BaseCoverageDetailProps {
    type: CoverageDetailType.Ownership;
    // ownership
}

type CoverageDetailProps = 
    | DistributionCoverageDetailProps
    | StatsCoverageDetailProps
    | OwnershipCoverageDetailProps;

const CoverageDetail = (props: CoverageDetailProps) => {
    const calculateHighestBiasPercentage = (left: number, center: number, right: number) => {
        const total = left + center + right;
        if (total === 0) return 0; // Avoid division by zero
        const leftPercentage = (left / total) * 100;
        const centerPercentage = (center / total) * 100;
        const rightPercentage = (right / total) * 100;

        return Math.max(leftPercentage, centerPercentage, rightPercentage);
    }

    // calculate width of the compass = 1/4 of the available width = 100% minus padding / 4
    // const compassWidth = `calc(100% - 3rem) / 4`; // Assuming 1rem padding on each side

    return (
        <div className={styles.container}>
            <BlockTitle text={props.title} iconVisible={props.type === CoverageDetailType.Distribution ? false : true} />
            {props.type === CoverageDetailType.Distribution && <ClickBox icon={OpenFullIcon} iconSize={IconSize.Regular} onClick={props.onClick} />}
            <div className={styles.content}>
                {props.type === CoverageDetailType.Distribution && <>
                    <div className={styles.contentRow}>
                        <p className='text-sans-large'>{props.text}</p>
                        <CompassBackground />
                    </div>
                </>}
                {props.type === CoverageDetailType.Stats && <>
                    <div className={styles.contentRow}>
                        <p className='text-sans-large'>Celkové množstvo zdrojov</p>
                        <p className='text-sans-large-important'>{props.distribution.center + props.distribution.liberal + props.distribution.conservative}</p>
                    </div>
                    <div className={styles.contentRow}>
                        <p className='text-sans-large'>Stredné zdroje</p>
                        <p className='text-sans-large-important'>{props.distribution.center}</p>
                    </div>
                    <div className={styles.contentRow}>
                        <p className='text-sans-large'>Liberálne zdroje</p>
                        <p className='text-sans-large-important'>{props.distribution.liberal}</p>
                    </div>
                    <div className={styles.contentRow}>
                        <p className='text-sans-large'>Konzervatívne zdroje</p>
                        <p className='text-sans-large-important'>{props.distribution.conservative}</p>
                    </div>
                    <div className={styles.contentRow}>
                        <p className='text-sans-large'>Distribúcia politickej zaujatosti</p>
                        <p className='text-sans-large-important'>{`${calculateHighestBiasPercentage(props.distribution.liberal, props.distribution.center, props.distribution.conservative)}%`}</p>
                    </div>
                    <div className={styles.contentRow}>
                        <p className='text-sans-large'>Naposledy aktualizované</p>
                        <p className='text-sans-large-important'>{`pred ${props.updatedAgo} ${props.updatedUnit}`}</p>
                    </div>
                    <div className={styles.contentRow}>
                        <p className='text-sans-large'>Publikované</p>
                        <p className='text-sans-large-important'>{`pred ${props.publishedAgo} ${props.publishedUnit}`}</p>
                    </div>
                </>}
                {props.type === CoverageDetailType.Ownership && <>
                    {/* Implement when used */}
                </>}
            </div>
        </div>
    )
}

export default CoverageDetail;