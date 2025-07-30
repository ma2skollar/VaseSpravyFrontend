'use client';

import { useState } from 'react';
import styles from './ArticleSourcesFilter.module.scss';
import DropdownController from '../DropdownController/DropdownController';
import DropdownItem from '../DropdownItem/DropdownItem';

interface OptionsType {
    option: string;
    selected: boolean;
    onClick: () => void;
}

interface ArticleSourcesFilterProps {
    title: string;
    expanded: boolean;
    onClick: () => void;
    options: OptionsType[];
}

const ArticleSourcesFilter = (props: ArticleSourcesFilterProps) => {
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

export default ArticleSourcesFilter;