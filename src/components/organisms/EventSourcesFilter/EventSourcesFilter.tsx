'use client'

import EventSourcesFilterItem from '@/components/molecules/EventSourcesFilterItem/EventSourcesFilterItem';
import styles from './EventSourcesFilter.module.scss';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { resetFilters, toggleAlphabeticalOrder, toggleCenter, toggleConservative, toggleLiberal, toggleNewestOrder, toggleOldestOrder, toggleReverseAlphabeticalOrder } from '@/lib/features/sourcesFilterSlice';
import { useEffect } from 'react';

const EventSourcesFilter = () => {
    const dispatch = useAppDispatch();
    const filterState = useAppSelector((state) => state.sourcesFilterReducer);

    const ownershipVisible = false
    const biasOptions = [
        {option: 'Liberálne', selected: filterState.biasOptions.liberalSelection, onClick: () => {dispatch(toggleLiberal())}},
        {option: 'Konzervatívne', selected: filterState.biasOptions.conservativeSelection, onClick: () => {dispatch(toggleConservative())}},
        {option: 'Neutrálne', selected: filterState.biasOptions.centerSelection, onClick: () => {dispatch(toggleCenter())}},
    ];

    const ownershipOptions = [{ option: "Placeholder", selected: false, onClick: () => {} }];

    const orderOptions = [
        { option: 'Zoradiť od A-Z', selected: filterState.orderOptions.alphabetical, onClick: () => {dispatch(toggleAlphabeticalOrder())} },
        { option: 'Zoradiť od Z-A', selected: filterState.orderOptions.reverseAlphabetical, onClick: () => {dispatch(toggleReverseAlphabeticalOrder())} },
        { option: 'Najnovšie', selected: filterState.orderOptions.newest, onClick: () => {dispatch(toggleNewestOrder())} },
        { option: 'Najstaršie', selected: filterState.orderOptions.oldest, onClick: () => {dispatch(toggleOldestOrder())} },
    ];

    useEffect(() => {
        dispatch(resetFilters())
    }, [dispatch])

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <EventSourcesFilterItem title={'Zaujatosť'} options={biasOptions} />
                {ownershipVisible && <EventSourcesFilterItem title={'Vlastníctvo'} options={ownershipOptions} />}
            </div>
            <EventSourcesFilterItem title={'Poradie'} options={orderOptions} />
        </div>
    )
}

export default EventSourcesFilter;