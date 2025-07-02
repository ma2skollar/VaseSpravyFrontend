import styles from "./FooterLinkItem.module.scss";

type FooterLinkItemProps = {
    children: React.ReactNode;
    href: string;
    centered?: boolean;
    onClick?: () => void;
};

const FooterLinkItem: React.FC<FooterLinkItemProps> = ({ children, href, centered = false, onClick }) => {
    return (
        <a
            className={`${styles.item} ${centered ? styles.centered : ""}`}
            href={href}
            onClick={onClick}
            target="_self"
        >
            {children}
        </a>
    );
};

export default FooterLinkItem;