import styles from './NavBarItem.module.scss';

type NavBarItemProps = {
    content: string;
    active: boolean;
    onClick?: () => void;
}

const NavItemBar: React.FC<NavBarItemProps> = (props) => {
    return (
        <button className={`${styles.button} ${props.active ? styles.active : ""}`} onClick={props.onClick}>
            {props.content}
        </button>
    );
}

export default NavItemBar;