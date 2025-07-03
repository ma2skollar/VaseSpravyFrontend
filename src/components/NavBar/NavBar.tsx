import styles from './NavBar.module.scss';

type NavBarProps = {
    visible: boolean;
    children: React.ReactNode
}

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <div className={`${styles.nav} ${props.visible ? "" : styles.hidden}`}>
            {props.children}
        </div>
    );
}

export default NavBar;