'use client';

import styles from './EventSourcesFilterItem.module.scss';
import DropdownController from '@/components/molecules/DropdownController/DropdownController';
import DropdownItem from '@/components/molecules/DropdownItem/DropdownItem';
import { useState } from 'react';

interface OptionsType {
    option: string;
    selected: boolean;
    onClick: () => void;
}

interface EventSourcesFilterItemProps {
    title: string;
    options: OptionsType[];
}

const EventSourcesFilterItem = (props: EventSourcesFilterItemProps) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <ul className={styles.container}>
            <DropdownController label={props.title} active={isExpanded} onClick={toggleExpand}/>
            {isExpanded && <ul className={styles.dropdown}>
                {props.options.map(({option, selected, onClick}) => (
                    <li key={option}>
                        <DropdownItem label={option} selected={selected} onClick={onClick} />
                    </li>
                ))}
            </ul>}
        </ul>
        
    )
}

export default EventSourcesFilterItem;