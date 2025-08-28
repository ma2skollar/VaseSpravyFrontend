import styles from './Header.module.scss'
import ClickBox, { IconSize } from "@/components/atoms/ClickBox/ClickBox";
import SubscribeIcon from "@/components/atoms/Icon/Material/SubscribeIcon";
import MenuIcon from "@/components/atoms/Icon/Material/MenuIcon";
import MainLogo from "@/components/atoms/MainLogo/MainLogo";
import { useAppSelector } from "@/lib/hooks";

interface HeaderProps {
    onMenuClick: () => void;
    onSubscribeClick: () => void;
}

const Header = (props: HeaderProps) => {
    const headerState = useAppSelector(state => state.headerReducer)

    return (
        <header className={styles.header}>
            <ClickBox iconSize={IconSize.Regular} icon={MenuIcon} onClick={props.onMenuClick} />
            <MainLogo size={headerState.headerSize} />
            <ClickBox iconSize={IconSize.Regular} icon={SubscribeIcon} onClick={props.onSubscribeClick} />
        </header>
    );
}

export default Header;