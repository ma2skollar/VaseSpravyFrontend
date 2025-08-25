'use client';

import styles from './EventSourcesFilter.module.scss';
import DropdownController from '@/components/molecules/DropdownController/DropdownController';
import DropdownItem from '@/components/molecules/DropdownItem/DropdownItem';

interface OptionsType {
    option: string;
    selected: boolean;
    onClick: () => void;
}

interface EventSourcesFilterProps {
    title: string;
    expanded: boolean;
    onClick: () => void;
    options: OptionsType[];
}

const EventSourcesFilter = (props: EventSourcesFilterProps) => {
    return (
        <ul className={styles.container}>
            <DropdownController label={props.title} active={props.expanded} onClick={props.onClick}/>
            <ul className={styles.dropdown} style={{display: props.expanded ? 'block' : 'none'}}>
                {props.options.map(({option, selected, onClick}) => (
                    <li key={option}>
                        <DropdownItem label={option} selected={selected} onClick={onClick} />
                    </li>
                ))}
            </ul>
        </ul>
        
    )
}

export default EventSourcesFilter;