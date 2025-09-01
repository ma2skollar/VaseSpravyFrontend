'use client';

import SearchBar from '@/components/molecules/SearchBar/SearchBar';
import styles from './NavMenu.module.scss';
import NavMenuItem from '@/components/molecules/NavMenuItem/NavMenuItem';
import LineSeparator from '@/components/atoms/LineSeparator/LineSeparator';
import ArrowDownIcon from '@/components/atoms/Icon/Material/ArrowDownIcon';
import { useState } from 'react';
import ArrowUpIcon from '@/components/atoms/Icon/Material/ArrowUpIcon';
import { RemoveScroll } from 'react-remove-scroll';
import { useAppSelector } from '@/lib/hooks';
import { LogoSize } from '@/components/atoms/MainLogo/MainLogo';

const NavMenu = () => {

    const [categoryOpen, setCategoryOpen] = useState(false);
    const [regionOpen, setRegionOpen] = useState(false);

    const navMenuOpen = useAppSelector(state => state.headerReducer).navMenuOpen;
    const headerState = useAppSelector(state => state.headerReducer).headerSize;

    const handleCategoryToggle = () => {
        if (!categoryOpen) setCategoryOpen(true);
        else setCategoryOpen(false);
    }

    const handleRegionToggle = () => {
        if (!regionOpen) setRegionOpen(true);
        else setRegionOpen(false);
    }

    return (
        // <RemoveScroll enabled={navMenuOpen}>
        <nav className={styles.container} aria-label="Primary">
            <div className={styles.search} role='search'>
                <SearchBar action={'https://api.vasespravy.sk/event/search'} />
            </div>
            <ul className={styles.itemGroup}>
                <li>
                    <NavMenuItem linkText={"Domov"} iconVisible={true} href='/' />
                </li>
                <li>
                    <NavMenuItem linkText={"Ako to funguje?"} href='/ako-to-funguje/' />
                </li>
                <li>
                    <NavMenuItem linkText={"Pomôžte nám"} href='/pomozte-nam/' />
                </li>
            </ul>
            <LineSeparator inNavMenu={true} isColored={false} />
            <section aria-label='Kategórie' className={styles.section}>
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
            <LineSeparator inNavMenu={true} isColored={false} />
            <ul>
                <li>
                    <NavMenuItem linkText={"O nás"} href='/o-nas/' />
                </li>
                <li>
                    <NavMenuItem linkText={"Kontaktujte nás"} href='/kontakt/' />
                </li>
            </ul>
            <LineSeparator inNavMenu={true} isColored={true} />
        </nav>
        // </RemoveScroll>
    )
}

export default NavMenu;