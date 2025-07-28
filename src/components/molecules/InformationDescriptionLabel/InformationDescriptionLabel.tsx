'use client';

import InfoIcon from '@/components/atoms/Icon/Material/InfoIcon';
import styles from './InformationDescriptionLabel.module.scss';
import { useState } from 'react';

interface InformationDescriptionLabelProps {
    label: string;
    description: string;
}

const InformationDescriptionLabel = (props: InformationDescriptionLabelProps) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false);

    const handleClick = () => {
        setDescriptionVisible(!descriptionVisible);
    }

    return (
        <div className={styles.container} onClick={handleClick} onMouseOver={() => setDescriptionVisible(true)} onMouseOut={() => setDescriptionVisible(false)}>
            <p className={`${descriptionVisible ? styles.visible : styles.hidden} text-sans-small`}>{props.description}</p>
            <InfoIcon />
            <h4 className='label-sans-light'>{props.label}</h4>
        </div>
    )
}

export default InformationDescriptionLabel;