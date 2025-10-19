import styles from "./ClickBox.module.scss";

export enum IconSize {
    Regular = "rg",
    Small = "sm",
    ExtraSmall = "xs",
    Custom = "cs",
}

interface ClickBoxProps {
    icon: React.ComponentType;
    iconSize: IconSize;
    href?: string;
    onClick?: () => void;
}

const ClickBox = (props: ClickBoxProps) => {
    return (
        <a className={`${styles.clickBox} ${styles[`icon-${props.iconSize}`]}`} href={props.href} onClick={props.onClick} target='_blank'>
            <props.icon />
        </a>
    );
};

export default ClickBox;
