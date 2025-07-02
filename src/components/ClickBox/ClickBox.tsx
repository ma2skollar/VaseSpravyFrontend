import styles from "./ClickBox.module.scss";

type ClickBoxProps = {
    icon: React.FC;
    href?: string;
    onClick?: () => void;
}

const ClickBox: React.FC<ClickBoxProps> = (props) => {
    return (
        <a className={styles.clickBox} href={props.href} onClick={props.onClick} target='_blank'>
            <props.icon />
        </a>
    );
};

export default ClickBox;
