import styles from "./Icon.module.scss";

const MenuIcon: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.icon}>
        <path d="M3.5 17.6345V16.1348H20.5V17.6345H3.5ZM3.5 12.75V11.25H20.5V12.75H3.5ZM3.5 7.86525V6.3655H20.5V7.86525H3.5Z" fill="currentColor"/>
        </svg>
    )
}

export default MenuIcon;