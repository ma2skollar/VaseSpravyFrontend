import VaseSpravyIcon from '@/components/atoms/Icon/Custom/VaseSpravyIcon';
import styles from './NavMenuItem.module.scss';

interface NavMenuItemProps {
    // TODO: Refator React.FC for svg icons so that it is cleaner and uses typescript correctly
    linkText: string | React.ReactNode;
    icon?: React.FC;
    iconVisible?: boolean;
    href?: string;
    onClick?: () => void;
}

const NavMenuItem = ({ icon: Icon = VaseSpravyIcon, iconVisible = false, linkText, href, onClick }: NavMenuItemProps) => {
    return (
        <a className={styles.container} onClick={onClick} href={href} target='_self'>
            <span className={`${styles.linkText} link-text-sans-regular`}>
                {linkText}    
            </span>
            {iconVisible && <Icon />}
        </a>
    )
}

export default NavMenuItem;