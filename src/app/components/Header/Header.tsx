'use client';

import {useState} from "react";
import styles from './Header.module.scss'
import ClickBox from "../ClickBox/ClickBox";
import SubscribeIcon from "../svg/SubscribeIcon";
import MenuIcon from "../svg/MenuIcon";
import MainLogo from "../MainLogo/MainLogo";

const Header: React.FC = () => {

    const [headerSize, setHeaderSize] = useState<boolean>(true);

    const handleSubscribeClick = () => {
        if (headerSize) {
            setHeaderSize(false);
        } else {
            setHeaderSize(true);
        }
    }

    return (
        <header className={styles.header}>
            <ClickBox icon={MenuIcon} />
            <MainLogo large={headerSize} />
            <ClickBox icon={SubscribeIcon} onClick={handleSubscribeClick}/>
        </header>
    );
}

export default Header;