import styles from './NavButton.module.scss';

interface NavButtonProps {
    text: string;
    isActive: boolean;
    onClick?: () => void;
};

const NavButton = (props: NavButtonProps) => {
    return (
        <button
            className={`${styles.navButton} ${props.isActive ? styles.active : ''} link-text-sans-regular`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

export default NavButton;