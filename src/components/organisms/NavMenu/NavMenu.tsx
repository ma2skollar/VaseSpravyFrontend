'use client';

import SearchBar from '@/components/molecules/SearchBar/SearchBar';
import styles from './NavMenu.module.scss';
import NavMenuItem from '@/components/molecules/NavMenuItem/NavMenuItem';
import LineSeparator from '@/components/atoms/LineSeparator/LineSeparator';
// import ArrowDownIcon from '@/components/atoms/Icon/Material/ArrowDownIcon';
// import ArrowUpIcon from '@/components/atoms/Icon/Material/ArrowUpIcon';
// import { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';
import { LogoSize } from '@/components/atoms/MainLogo/MainLogo';
import { GLOBAL_LINKS } from '@/util/globalLinks';

const NavMenu = () => {
    const headerHeight = useAppSelector(state => state.headerReducer).headerSize === LogoSize.Large ? 149 : 61;

    // commented out for now - categories and regions are not used in the current beta version

    // const [categoryOpen, setCategoryOpen] = useState(false);
    // const [regionOpen, setRegionOpen] = useState(false);

    // const handleCategoryToggle = () => {
    //     if (!categoryOpen) setCategoryOpen(true);
    //     else setCategoryOpen(false);
    // }

    // const handleRegionToggle = () => {
    //     if (!regionOpen) setRegionOpen(true);
    //     else setRegionOpen(false);
    // }

    return (
        <div className={styles.scrollContainer} style={{ maxHeight: `calc(100dvh - ${headerHeight}px)` }}>
            <nav className={styles.container} aria-label="Primary">
                <div className={styles.search} role='search'>
                    <SearchBar action={'/udalosti/vyhladavanie'} />
                </div>
                <ul className={styles.itemGroup}>
                    <li>
                        <NavMenuItem linkText={"Domov"} iconVisible={true} href={GLOBAL_LINKS.HOME} />
                    </li>
                    <li>
                        <NavMenuItem linkText={"Ako to funguje?"} href={GLOBAL_LINKS.HOW_IT_WORKS} />
                    </li>
                    <li>
                        <NavMenuItem linkText={"Pomôžte nám"} href={GLOBAL_LINKS.SUPPORT} />
                    </li>
                </ul>
                <LineSeparator inNavMenu={true} isColored={false} />
                {/* <section aria-label='Kategórie' className={styles.section}>
                    <NavMenuItem linkText={"Kategórie"} onClick={handleCategoryToggle} iconVisible={true} icon={categoryOpen ? ArrowUpIcon : ArrowDownIcon} />
                    {categoryOpen &&
                        <ul>
                            <li>
                                <NavMenuItem linkText={"Domáca politika"} href='/kategorie/politika/domaca/' />
                            </li>
                            <li>
                                <NavMenuItem linkText={"Zahraničná politika"} href='/kategorie/politika/zahranicna/' />
                            </li>
                        </ul>
                    }
                </section>
                <LineSeparator inNavMenu={true} isColored={false} />
                <section aria-label='Regióny' className={styles.section}>
                    <NavMenuItem linkText={"Regióny"} onClick={handleRegionToggle} iconVisible={true} icon={regionOpen ? ArrowUpIcon : ArrowDownIcon} />
                    {regionOpen &&
                        <ul>
                            <li>
                                <NavMenuItem linkText={"Západné Slovensko"} href='/regiony/zapadne/' />
                            </li>
                            <li>
                                <NavMenuItem linkText={"Stredné Slovensko"} href='/regiony/stredne/' />
                            </li>
                            <li>
                                <NavMenuItem linkText={"Východné Slovensko"} href='/regiony/vychodne/' />
                            </li>
                        </ul>
                    }
                </section>
                <LineSeparator inNavMenu={true} isColored={false} /> */}
                <ul>
                    <li>
                        <NavMenuItem linkText={"O nás"} href={GLOBAL_LINKS.ABOUT} />
                    </li>
                    <li>
                        <NavMenuItem linkText={"Kontaktujte nás"} href={GLOBAL_LINKS.CONTACT} />
                    </li>
                </ul>
                <LineSeparator inNavMenu={true} isColored={true} />
            </nav>
        </div>
    )
}

export default NavMenu;