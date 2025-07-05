'use client';

import {useState} from "react";
import styles from './Header.module.scss'
import ClickBox from "../ClickBox/ClickBox";
import SubscribeIcon from "../svg/SubscribeIcon";
import MenuIcon from "../svg/MenuIcon";
import MainLogo, { LogoSize } from "../MainLogo/MainLogo";

const Header: React.FC = () => {

    const [headerSize, setHeaderSize] = useState<LogoSize>(LogoSize.Large);

    const handleSubscribeClick = () => {
        console.log('Subscribe clicked');
        if (headerSize === LogoSize.Large) {
            setHeaderSize(LogoSize.Medium);
        } else {
            setHeaderSize(LogoSize.Large);
        }
    }

    const handleLogoClick = () => {
        window.location.href = '/';
    }

    const handleMenuClick = () => {
        console.log('Menu clicked');
    }

    return (
        <header className={styles.header}>
            <ClickBox icon={MenuIcon} onClick={handleMenuClick}/>
            <MainLogo size={headerSize} onClick={handleLogoClick}/>
            <ClickBox icon={SubscribeIcon} onClick={handleSubscribeClick}/>
        </header>
    );
}

export default Header;