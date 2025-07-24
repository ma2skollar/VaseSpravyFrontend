'use client'

import NavButton from '@/components/atoms/NavButton/NavButton';
import styles from './NavBar.module.scss';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

type NavBarProps = {
    canSwitchContent: boolean;
    contentPrimaryText: string;
    contentSecondaryText?: string;
}

const NavBar = (props: NavBarProps) => {
    const dispatch = useAppDispatch();

    const primaryActive = useAppSelector(state => state.navBarSwitchReducer.primarySelected);

    const handlePrimaryClick = () => {
        if (!primaryActive) dispatch({ type: 'navBarSwitch/toggleSwitch' });
    }

    const handleSecondaryClick = () => {
        if (primaryActive) dispatch({ type: 'navBarSwitch/toggleSwitch' });
    }

    if (props.canSwitchContent) {
        return (
            <div className={styles.container}>
                <NavButton text={props.contentPrimaryText} isActive={primaryActive} onClick={handlePrimaryClick} />
                {}
                <NavButton text={props.contentSecondaryText ?? ''} isActive={!primaryActive} onClick={handleSecondaryClick} />
            </div>
        )
    }

    else {
        return (
            <div className={styles.container}>
                <NavButton text={props.contentPrimaryText} isActive={true} />
            </div>
        )
    }

}

export default NavBar;