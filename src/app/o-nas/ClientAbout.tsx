'use client';

import LineSeparator from '@/components/atoms/LineSeparator/LineSeparator';
import styles from './AboutPage.module.scss';
import MailIcon from '@/components/atoms/Icon/Material/MailIcon';
import { useCallback, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface ClientAboutProps {
    data?: {
        verifiedMailCount: number;
        articleCount: number;
        eventCount: number;
    }
}

const CountUp = ({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.floor(latest));

    useEffect(() => {
        const controls = animate(count, to, { duration, ease: "easeOut" });
        return controls.stop;
    }, [count, to, duration]);

    return <motion.span>{rounded}</motion.span>;
};

const ClientAbout = (props: ClientAboutProps) => {
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
                    Máme dosť zavádzajúcich, zaujatých a subjektívnych správ na Slovensku. Cieľ združenia Vaše Správy je vytvorenie digitálnej platformy pre Slovákov, kde si vie každý pozrieť objektívne a nezaujaté správy. Toto dosahujeme pravidelným zbieraním a nasledovnou analýzou článkov publikovaných médiami na Slovensku.
                </p>
                <p className='text-sans-large'>
                    Pomôž nám dosiahnuť pravdu skrz objektivitu!
                </p>
                {props.data && <div className={styles.stats}>
                    {/* <div className={styles.statBox}>
                        <span className='title-serif-large'>
                            <CountUp to={props.data.verifiedMailCount} />
                        </span>
                        <p className='title-sans-regular'>Overených e-mailov</p>
                    </div> */}
                    <div className={styles.statBox}>
                        <span className='title-serif-large'>
                            <CountUp to={props.data.articleCount} />
                        </span>
                        <p className='title-sans-regular'>Zozbieraných článkov</p>
                    </div>
                    <div className={styles.statBox}>
                        <span className='title-serif-large'>
                            <CountUp to={props.data.eventCount} />
                        </span>
                        <p className='title-sans-regular'>Zanalyzovaných udalostí</p>
                    </div>
                </div>}
                <span id='podpora' style={{ visibility: 'hidden', marginTop: '-0.75rem' }}></span>
                
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

export default ClientAbout;