import LabelDistribution, { LabelDistributionBias } from '@/components/atoms/LabelDistribution/LabelDistribution';
import styles from './EventImageContainer.module.scss';

interface EventImageContainerProps {
    imageUrl: string;
    altText: string;
    distribution: {
        liberal: number;
        conservative: number;
        center: number;
    }
}

const EventImageContainer = (props: EventImageContainerProps) => {
    
    const getHightestDistribution = () => {
        const values = Object.values(props.distribution);
        const maxValue = Math.max(...values);
        const distributionTitle = maxValue === props.distribution.center ? 'stred' : (maxValue === props.distribution.conservative ? 'konzervatívne' : 'liberálne');

        return { maxValue: maxValue, distributionTitle: distributionTitle};
    }

    const getNumberOfSources = () => {
        return props.distribution.liberal + props.distribution.conservative + props.distribution.center;
    }

    const getSourceSpelling = () => {
        if(getNumberOfSources() === 1) return 'zdroj';
        if(getNumberOfSources() > 1 && getNumberOfSources() < 5) return 'zdroje';
        return 'zdrojov';
    }

    const convertToPercentage = (value: number) => {
        return getNumberOfSources() > 0 ? Math.round((value / getNumberOfSources()) * 100) : 0;
    }
    
    return (
        <div className={styles.container}>
            <img src={props.imageUrl} alt={props.altText} />
            <div className={styles.imageOverlay}></div>
            <div className={styles.distribution}>
                <div className={styles.distributionVisual}>
                    <LabelDistribution bias={LabelDistributionBias.Liberal} value={convertToPercentage(props.distribution.liberal)} />
                    <LabelDistribution bias={LabelDistributionBias.Center} value={convertToPercentage(props.distribution.center)} />
                    <LabelDistribution bias={LabelDistributionBias.Conservative} value={convertToPercentage(props.distribution.conservative)} />
                </div>
                <div className={styles.distributionInfo}>
                    <p className={`label-sans-heavy`}>{`${convertToPercentage(getHightestDistribution().maxValue)}% ${getHightestDistribution().distributionTitle}`}</p>
                    <p className={`label-sans-heavy`}>∙</p>
                    <p className={`label-sans-heavy`}>{`${getNumberOfSources()} ${getSourceSpelling()}`}</p>
                </div>
            </div>
        </div>
    )
}

export default EventImageContainer;