'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import styles from './HoverSwitchComponent.module.scss';
import { switchSummary } from '@/lib/features/singleArticleSlice';
import SwitchComponentButton, { BiasMarkerType } from '@/components/atoms/SwitchComponentButton/SwitchComponentButton';
import { useEffect } from 'react';

const HoverSwitchComponent = () => {
    const dispatch = useAppDispatch();
    // default to center summary on each render
    useEffect(() => {
        dispatch(switchSummary({ summaryType: 'center' }));
    }, [dispatch]);


    const liberalSelected = useAppSelector(state => state.singleArticleReducer.summarySwitch.liberal)
    const centerSelected = useAppSelector(state => state.singleArticleReducer.summarySwitch.center)
    const conservativeSelected = useAppSelector(state => state.singleArticleReducer.summarySwitch.conservative)
    const comparisonSelected = useAppSelector(state => state.singleArticleReducer.summarySwitch.comparison)

    const handleLiberalClick = () => {
        dispatch(switchSummary({ summaryType: 'liberal'}))
    }
    const handleCenterClick = () => {
        dispatch(switchSummary({ summaryType: 'center'}))
    }
    const handleConservativeClick = () => {
        dispatch(switchSummary({ summaryType: 'conservative'}))
    }
    const handleComparisonClick = () => {
        dispatch(switchSummary({ summaryType: 'comparison'}))
    }

    return (
        <div className={styles.container}>
            <SwitchComponentButton bias={BiasMarkerType.Liberal} isSelected={liberalSelected} onClick={handleLiberalClick} />
            <SwitchComponentButton bias={BiasMarkerType.Center} isSelected={centerSelected} onClick={handleCenterClick} />
            <SwitchComponentButton bias={BiasMarkerType.Conservative} isSelected={conservativeSelected} onClick={handleConservativeClick} />
            <SwitchComponentButton bias={BiasMarkerType.Compare} isSelected={comparisonSelected} onClick={handleComparisonClick} />
        </div>
    )
}

export default HoverSwitchComponent;