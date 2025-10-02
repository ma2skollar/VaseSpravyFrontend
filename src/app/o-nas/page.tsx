'use client';

import LineSeparator from '@/components/atoms/LineSeparator/LineSeparator';
import styles from './AboutPage.module.scss';
import MailIcon from '@/components/atoms/Icon/Material/MailIcon';
import { useCallback } from 'react';

const AboutPage = () => {
    const handleGeneralClick = useCallback(() => {
        window.location.href = "mailto:info@vasespravy.sk";
    }, []);

    const handleSupportClick = useCallback(() => {
        window.location.href = "mailto:podpora@vasespravy.sk";
    }, []);

    return (
        <main className={styles.container}>
            <section>
                <h1 className='title-serif-large'>O nás</h1>
                <p className='text-sans-large'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis corrupti voluptate nam cupiditate ipsum, at iusto fugit explicabo molestiae ipsa numquam eveniet labore enim ullam. Temporibus, obcaecati! Debitis, totam temporibus.
                </p>
                <span id='podpora' style={{ visibility: 'hidden', marginTop: '-0.75rem' }}></span>
                <p className='text-sans-large'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis corrupti voluptate.
                </p>
            </section>
            <LineSeparator inNavMenu={false} isColored={false} />
            <section>
                <h1 className='title-serif-large'>Podporte nás</h1>
                <div className={styles.styledBox}>
                    <p className='text-sans-large'>Sme Vám vďační za akúkoľvek podporu.</p>
                    <span id='kontakt' style={{ visibility: 'hidden', marginTop: '-1.25rem' }}></span>
                    <a href="https://www.tatrabanka.sk/sk/personal/ucet-platby/transparentne-ucty/ucet/?iban=sk0411000000002942275533" className='text-sans-large'>
                        IBAN: <span className='text-sans-large-important'>SK04 1100 0000 0029 4227 5533</span>
                    </a>
                </div>
            </section>
            <LineSeparator inNavMenu={false} isColored={false} />
            <section>
                <h1 className='title-serif-large'>Kontaktujte nás</h1>
                <div className={styles.emailCardsContainer}>
                    <div className={styles.emailCard} onClick={handleGeneralClick}>
                        <MailIcon />
                        <div>
                            <div className={styles.emailTitles}>
                                <h3 className='title-sans-small'>Všeobecné informácie</h3>
                                <p className='subtitle-sans-light'>Pre informácie o našich službách a možnostiach spolupráce.</p>
                            </div>
                            <a className='label-sans-large' href="mailto:info@vasespravy.sk">info@vasespravy.sk</a>
                        </div>
                    </div>
                    <div className={styles.emailCard} onClick={handleSupportClick}>
                        <MailIcon />
                        <div>
                            <div className={styles.emailTitles}>
                                <h3 className='title-sans-small'>Technická podpora</h3>
                                <p className='subtitle-sans-light'>Pre nahlásenie problémov, vylepšení a iných technických otázok.</p>
                            </div>
                            <a className='label-sans-large' href="mailto:podpora@vasespravy.sk">podpora@vasespravy.sk</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AboutPage;