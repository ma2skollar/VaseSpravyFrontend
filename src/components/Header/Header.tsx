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
        if (headerSize === LogoSize.Large) {
            setHeaderSize(LogoSize.Medium);
        } else {
            setHeaderSize(LogoSize.Large);
        }
    }

    return (
        <header className={styles.header}>
            <ClickBox icon={MenuIcon} />
            <MainLogo size={headerSize} />
            <ClickBox icon={SubscribeIcon} onClick={handleSubscribeClick}/>
        </header>
    );
}

export default Header;