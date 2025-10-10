import LineSeparator from '@/components/atoms/LineSeparator/LineSeparator';
import styles from './LegalPage.module.scss';
import Link from "next/link";

const LegalPage = () => {
    return (
        <main className={styles.container}>
            <h1 className='title-serif-large'>Právne informácie</h1>
            <ul>
                <li>
                    <Link href="/pravne/cookies" className='link-text-sans-medium'>Zásady používania cookies</Link>
                </li>
                <LineSeparator isColored={false} inNavMenu={false} />
                <li>
                    <Link href="/pravne/ochrana-osobnych-udajov" className='link-text-sans-medium'>Zásady ochrany osobných údajov</Link>
                </li>
                <LineSeparator isColored={false} inNavMenu={false} />
                <li>
                    <Link href="/pravne/odhlasenie-z-newslettera" className='link-text-sans-medium'>Odhlásenie z odberu</Link>
                </li>
            </ul>
            <p className='label-sans-light'>Naposledy aktualizované 10.10.2025</p>
        </main>
    );
}

export default LegalPage;