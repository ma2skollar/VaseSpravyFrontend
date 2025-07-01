import { ReactNode } from "react";
import styles from "./ClickBox.module.scss";

type ClickBoxProps = {
    icon: React.FC;
    onClick?: () => void;
}

const ClickBox: React.FC<ClickBoxProps> = (props) => {
    return (
        <button className={styles.clickBox} onClick={props.onClick}>
            <props.icon />
        </button>
    );
};

export default ClickBox;
