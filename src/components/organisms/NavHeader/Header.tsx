'use client';

import {useState} from "react";
import styles from './Header.module.scss'
import ClickBox, { IconSize } from "../../atoms/ClickBox/ClickBox";
import SubscribeIcon from "../../atoms/Icon/SubscribeIcon";
import MenuIcon from "../../atoms/Icon/MenuIcon";
import MainLogo, { LogoSize } from "../../atoms/MainLogo/MainLogo";

const Header: React.FC = () => {

    const [headerSize, setHeaderSize] = useState<LogoSize>(LogoSize.Large);

    const handleSubscribeClick = () => {
        if (headerSize === LogoSize.Large) {
            setHeaderSize(LogoSize.Medium);
        } else {
            setHeaderSize(LogoSize.Large);
        }
    }

    return (
        <header className={styles.header}>
            <ClickBox iconSize={IconSize.Regular} icon={MenuIcon} />
            <MainLogo size={headerSize} />
            <ClickBox iconSize={IconSize.Regular} icon={SubscribeIcon} onClick={handleSubscribeClick}/>
        </header>
    );
}

export default Header;