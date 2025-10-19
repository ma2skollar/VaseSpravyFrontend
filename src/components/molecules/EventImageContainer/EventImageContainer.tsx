'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './EventImageContainer.module.scss';
import LabelDistribution, { LabelDistributionBias } from '@/components/atoms/LabelDistribution/LabelDistribution';

interface EventImageContainerProps {
    imageUrls: string[];
    distribution: {
        liberal: number;
        conservative: number;
        center: number;
    }
}

const EventImageContainer = (props: EventImageContainerProps) => {
    const intervalMs = 4000;
    const [index, setIndex] = useState(0);
    const images = props.imageUrls.filter(Boolean);

    useEffect(() => {
        if (images.length <= 1) return;
        const id = setInterval(() => setIndex((i) => (i + 1) % images.length), Math.max(1500, intervalMs));
        return () => clearInterval(id);
    }, [images.length, intervalMs]);
    
    const getHightestDistribution = () => {
        const values = Object.values(props.distribution);
        const maxValue = Math.max(...values);
        const distributionTitle = maxValue === props.distribution.center ? 'neutrálne' : (maxValue === props.distribution.conservative ? 'konzervatívne' : 'liberálne');

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
        <div className={styles.container} aria-live="polite">
            <AnimatePresence mode="wait">
                {images.length > 0 && (
                    <motion.div
                        key={images[index]}
                        className={styles.slide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        <Image
                            src={images[index]}
                            alt={`Snímka udalosti č. ${index + 1}`}
                            fill
                            unoptimized
                            className={styles.image}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className={styles.imageOverlay} />
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