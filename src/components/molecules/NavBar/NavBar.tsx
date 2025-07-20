import NavButton from '@/components/atoms/NavButton/NavButton';
import styles from './NavBar.module.scss';
import { useState } from 'react';

type NavBarProps = {
    canSwitchContent: boolean;
    contentPrimaryText: string;
    contentSecondaryText: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
    const [active, setActive] = useState<boolean>(true);

    return (
        <div className={styles.container}>
            <NavButton text={props.contentPrimaryText} isActive={active} onClick={() => setActive(!active)} />
            <NavButton text={props.contentSecondaryText ?? ''} isActive={!active} onClick={() => setActive(!active)} />
        </div>
    )
}

export default NavBar;