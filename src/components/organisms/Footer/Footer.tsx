'use client';

import styles from "./Footer.module.scss";
import LineSeparator from "@/components/atoms/LineSeparator/LineSeparator";
import MainLogo, { LogoSize } from "@/components/atoms/MainLogo/MainLogo";
import ClickBox, { IconSize } from "@/components/atoms/ClickBox/ClickBox";
import FacebookIcon from "@/components/atoms/Icon/Social/FacebookIcon";
import InstagramIcon from "@/components/atoms/Icon/Social/InstagramIcon";
import LinkedInIcon from "@/components/atoms/Icon/Social/LinkedInIcon";
import NavMenuItem from "@/components/molecules/NavMenuItem/NavMenuItem";
import Link from "next/link";
import { GLOBAL_LINKS } from "@/util/constants";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <LineSeparator inNavMenu={false} isColored={true} />
            <NavMenuItem linkText={<MainLogo size={LogoSize.Small} />} href={GLOBAL_LINKS.HOME} />
            <NavMenuItem linkText="Odhlásiť sa z odberu" href={GLOBAL_LINKS.UNSUBSCRIBE} />
            <LineSeparator inNavMenu={false} isColored={false} />
            <NavMenuItem linkText="Pomôžte nám" href={GLOBAL_LINKS.SUPPORT} />
            <LineSeparator inNavMenu={false} isColored={false} />
            <NavMenuItem linkText="Časté otázky" href={GLOBAL_LINKS.FAQ} />
            <div className={styles.socialContainer}>
                <ClickBox 
                    icon={FacebookIcon} 
                    href={GLOBAL_LINKS.FACEBOOK} 
                    iconSize={IconSize.Regular}
                />
                <ClickBox 
                    icon={InstagramIcon} 
                    href={GLOBAL_LINKS.INSTAGRAM} 
                    iconSize={IconSize.Regular}
                />
                <ClickBox 
                    icon={LinkedInIcon} 
                    href={GLOBAL_LINKS.LINKEDIN} 
                    iconSize={IconSize.Regular}
                />
            </div>
            <div className={styles.footerTextLinks}>
                <Link className="link-text-sans-small" href={GLOBAL_LINKS.ABOUT}>O nás</Link>
                <Link className="link-text-sans-small" href={GLOBAL_LINKS.CONTACT}>Kontaktujte nás</Link>
                <Link className="link-text-sans-small" href={GLOBAL_LINKS.HOW_IT_WORKS}>Ako to funguje?</Link>
                <Link className="link-text-sans-small" href={GLOBAL_LINKS.COOKIES}>Cookies</Link>
                <Link className="link-text-sans-small" href={GLOBAL_LINKS.SUPPORT}>Podpora</Link>
                <Link className="link-text-sans-small" href={GLOBAL_LINKS.PRIVACY_POLICY}>Zásady ochrany osobných údajov</Link>
                <Link className="link-text-sans-small" href={GLOBAL_LINKS.SITEMAP}>Mapa stránky</Link>
            </div>
            <div className={styles.bottomText}>
                <p className="text-sans-small">©2025 Vaše Správy o. z.</p>
            </div>
        </footer>
    );
}

export default Footer;