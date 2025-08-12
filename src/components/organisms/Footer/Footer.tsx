'use client';

import styles from "./Footer.module.scss";
import LineSeparator from "@/components/atoms/LineSeparator/LineSeparator";
import MainLogo, { LogoSize } from "@/components/atoms/MainLogo/MainLogo";
import ClickBox, { IconSize } from "@/components/atoms/ClickBox/ClickBox";
import FacebookIcon from "@/components/atoms/Icon/Social/FacebookIcon";
import InstagramIcon from "@/components/atoms/Icon/Social/InstagramIcon";
import LinkedInIcon from "@/components/atoms/Icon/Social/LinkedInIcon";
import NavMenuItem from "@/components/molecules/NavMenuItem/NavMenuItem";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <LineSeparator inNavMenu={false} isColored={true} />
            <NavMenuItem linkText={<MainLogo size={LogoSize.Small} />} href="/" />
            <NavMenuItem linkText="Odhlásiť sa z odberu" onClick={() => {}} />
            <LineSeparator inNavMenu={false} isColored={false} />
            <NavMenuItem linkText="Pomoc" onClick={() => {}} />
            <LineSeparator inNavMenu={false} isColored={false} />
            <NavMenuItem linkText="Časté otázky" onClick={() => {}} />
            <div className={styles.socialContainer}>
                <ClickBox icon={FacebookIcon} href={"https://www.facebook.com/vasespravy"} iconSize={IconSize.Regular}/>
                <ClickBox icon={InstagramIcon} href={"https://www.instagram.com/vasespravyoz/"} iconSize={IconSize.Regular}/>
                <ClickBox icon={LinkedInIcon} href={"https://www.linkedin.com/company/vase-spravy-oz"} iconSize={IconSize.Regular}/>
            </div>
            <div className={styles.footerTextLinks}>
                <a className="link-text-sans-small" href={""}>O nás</a>
                <a className="link-text-sans-small" href={""}>Kontaktujte nás</a>
                <a className="link-text-sans-small" href={""}>Ako to funguje</a>
                <a className="link-text-sans-small" href={""}>Cookies</a>
                <a className="link-text-sans-small" href={""}>Pomôžte nám</a>
                <a className="link-text-sans-small" href={""}>Zásady ochrany osobných údajov</a>
                <a className="link-text-sans-small" href={""}>Mapa stránky</a>
            </div>
            <div className={styles.bottomText}>
                <p className="text-sans-small">©2025 Vaše Správy o. z.</p>
            </div>
        </footer>
    );
}

export default Footer;