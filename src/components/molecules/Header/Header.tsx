'use client';

import styles from './Header.module.scss'
import ClickBox, { IconSize } from "../../atoms/ClickBox/ClickBox";
import SubscribeIcon from "../../atoms/Icon/SubscribeIcon";
import MenuIcon from "../../atoms/Icon/MenuIcon";
import MainLogo from "../../atoms/MainLogo/MainLogo";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Header = () => {
    const dispatch = useAppDispatch();
    const headerSize = useAppSelector(state => state.headerResizeReducer)
    const handleSubscribeClick = () => {
        dispatch({ type: 'headerResize/toggleResize' });
    }

    return (
        <header className={styles.header}>
            <ClickBox iconSize={IconSize.Regular} icon={MenuIcon} />
            <MainLogo size={headerSize.isResizing} />
            <ClickBox iconSize={IconSize.Regular} icon={SubscribeIcon} onClick={handleSubscribeClick}/>
        </header>
    );
}

export default Header;