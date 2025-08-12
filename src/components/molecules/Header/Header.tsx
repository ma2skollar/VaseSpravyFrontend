'use client';

import styles from './Header.module.scss'
import ClickBox, { IconSize } from "@/components/atoms/ClickBox/ClickBox";
import SubscribeIcon from "@/components/atoms/Icon/Material/SubscribeIcon";
import MenuIcon from "@/components/atoms/Icon/Material/MenuIcon";
import MainLogo from "@/components/atoms/MainLogo/MainLogo";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleResize } from '@/lib/features/headerResizeSlice';

const Header = () => {
    const dispatch = useAppDispatch();
    const headerSize = useAppSelector(state => state.headerResizeReducer)
    const handleSubscribeClick = () => {
        dispatch(toggleResize());
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