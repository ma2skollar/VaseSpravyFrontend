import styles from './NavMenuItem.module.scss';
import { IconSize } from '@/components/atoms/ClickBox/ClickBox';

type NavMenuItemProps = {
    // TODO: Refator React.FC for svg icons so that it is cleaner and uses typescript correctly
    icon: React.FC;
    iconSize: IconSize;
    iconVisible: boolean;
    linkText: string;
    href?: string;
    onClick?: () => void;
}

const NavMenuItem = (props: NavMenuItemProps) => {
    return (
        <a className={`${styles.container} ${props.iconVisible ? styles.visible : ''}`} onClick={props.onClick} href={props.href} target='_self'>
            <span className={`${styles.linkText} link-text-sans-regular`}>
                {props.linkText}    
            </span>
            <props.icon />
        </a>
    )
}

export default NavMenuItem;