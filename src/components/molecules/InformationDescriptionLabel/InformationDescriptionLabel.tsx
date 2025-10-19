'use client';

import InfoIcon from '@/components/atoms/Icon/Material/InfoIcon';
import styles from './InformationDescriptionLabel.module.scss';
import { useEffect, useState } from 'react';

interface InformationDescriptionLabelProps {
    label: string;
    description: string;
}

const InformationDescriptionLabel = ({ label, description }: InformationDescriptionLabelProps) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    const [supportsHover, setSupportsHover] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setSupportsHover(window.matchMedia('(hover: hover)').matches);
        }
    }, []);

    const handleClick = () => {
        if (!supportsHover) {
            setDescriptionVisible((prev) => !prev);
        }
    };

    return (
        <div
            className={styles.container}
            onClick={handleClick}
            onMouseEnter={supportsHover ? () => setDescriptionVisible(true) : undefined}
            onMouseLeave={supportsHover ? () => setDescriptionVisible(false) : undefined}
        >
            <p className={`${descriptionVisible ? styles.visible : styles.hidden} text-sans-small`}>
                {description}
            </p>
            <InfoIcon />
            <h4 className="label-sans-light">{label}</h4>
        </div>
    );
};

export default InformationDescriptionLabel;
