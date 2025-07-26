'use client';

import { useState } from 'react';
import styles from './ArticleSourcesFilter.module.scss';
import DropdownController from '../DropdownController/DropdownController';
import DropdownItem from '../DropdownItem/DropdownItem';

type OptionsType = {
    option: string;
    selected: boolean;
}

type ArticleSourcesFilterProps = {
    title: string;
    options: OptionsType[];
}

const ArticleSourcesFilter = (props: ArticleSourcesFilterProps) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <ul className={styles.container}>
            <DropdownController label={props.title} active={expanded} onClick={handleExpandClick}/>
            <ul className={styles.dropdown} style={{display: expanded ? 'block' : 'none'}}>
                {props.options.map(({option, selected}) => (
                    <li key={option}>
                        <DropdownItem label={option} selected={selected} />
                    </li>
                ))}
            </ul>
        </ul>
        
    )
}

export default ArticleSourcesFilter;