import styles from "./FooterLinkText.module.scss";

type FooterLinkTextProps = {
    text: string;
    href: string;
    onClick?: () => void;
};

const FooterLinkText: React.FC<FooterLinkTextProps> = (props) => {
    return (
        <a
            className={styles.item}
            href={props.href}
            onClick={props.onClick}
            target="_self"
        >
            {props.text}
        </a>
    );
};

export default FooterLinkText;