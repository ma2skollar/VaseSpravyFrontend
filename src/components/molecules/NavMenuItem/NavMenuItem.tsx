import styles from './NavMenuItem.module.scss';
import { IconSize } from '@/components/atoms/ClickBox/ClickBox';

type NavMenuItemProps = {
    icon: React.FC;
    iconSize: IconSize;
    iconVisible: boolean;
    linkText: string;
    href?: string;
    onClick?: () => void;
}



const NavMenuItem: React.FC<NavMenuItemProps> = (props) => {
    return (
        <a className={`${styles.container} ${props.iconVisible ? styles.visible : ''}`} onClick={props.onClick} href={props.href} target='_self'>
            <p className={`${styles.linkText} link-text-sans-regular`}>
                {props.linkText}    
            </p>
            <props.icon />
        </a>
    )
}

export default NavMenuItem;