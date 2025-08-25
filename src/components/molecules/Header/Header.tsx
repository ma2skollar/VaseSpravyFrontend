'use client';

import styles from './Header.module.scss'
import ClickBox, { IconSize } from "@/components/atoms/ClickBox/ClickBox";
import SubscribeIcon from "@/components/atoms/Icon/Material/SubscribeIcon";
import MenuIcon from "@/components/atoms/Icon/Material/MenuIcon";
import MainLogo from "@/components/atoms/MainLogo/MainLogo";
import { useAppSelector } from "@/lib/hooks";

const Header = () => {
    const headerSize = useAppSelector(state => state.headerResizeReducer)

    return (
        <header className={styles.header}>
            <ClickBox iconSize={IconSize.Regular} icon={MenuIcon} />
            <MainLogo size={headerSize.isResizing} />
            <ClickBox iconSize={IconSize.Regular} icon={SubscribeIcon} onClick={() => {}}/>
        </header>
    );
}

export default Header;