import styles from "./Footer.module.scss";
import LineSeparator from "../LineSeparator/LineSeparator";
import FooterLinkItem from "../FooterLinkItem/FooterLinkItem";
import MainLogo, { LogoSize } from "../MainLogo/MainLogo";
import ClickBox from "../ClickBox/ClickBox";
import FacebookIcon from "../svg/FacebookIcon";
import InstagramIcon from "../svg/InstagramIcon";
import LinkedInIcon from "../svg/LinkedInIcon";
import FooterLinkText from "../FooterLinkText/FooterLinkText";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <LineSeparator color={true} />
            <FooterLinkItem centered={true} href={""}>
                <MainLogo size={LogoSize.Small} />
            </FooterLinkItem>
            <FooterLinkItem href={""}>
                <p>Odhlásiť sa z odberu</p>
            </FooterLinkItem>
            <LineSeparator color={false} />
            <FooterLinkItem href={""}>
                <p>Pomoc</p>
            </FooterLinkItem>
            <LineSeparator color={false} />
            <FooterLinkItem href={""}>
                <p>Časté otázky</p>
            </FooterLinkItem>
            <div className={styles.socialContainer}>
                <ClickBox icon={FacebookIcon} href={"https://www.facebook.com/vasespravy"}/>
                <ClickBox icon={InstagramIcon} href={"https://www.instagram.com/vasespravyoz/"}/>
                <ClickBox icon={LinkedInIcon} href={"https://www.linkedin.com/company/vase-spravy-oz"}/>
            </div>
            <div className={styles.footerTextLinks}>
                <FooterLinkText text={"O nás"} href={""} />
                <FooterLinkText text={"Kontaktujte nás"} href={""} />
                <FooterLinkText text={"Ako to funguje"} href={""} />
                <FooterLinkText text={"Cookies"} href={""} />
                <FooterLinkText text={"Pomôžte nám"} href={""} />
                <FooterLinkText text={"Zásady ochrany osobných údajov"} href={""} />
                <FooterLinkText text={"Mapa stránky"} href={""} />
            </div>
            <div className={styles.bottomText}>
                <p>©2025 Vaše Správy o. z.</p>
            </div>
        </footer>
    );
}

export default Footer;