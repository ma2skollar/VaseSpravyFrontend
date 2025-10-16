import LineSeparator from '@/components/atoms/LineSeparator/LineSeparator';
import styles from './LegalPage.module.scss';
import Link from "next/link";
import { LAST_UPDATED } from '@/util/constants';

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
                    <Link href="/pravne/osobne-udaje" className='link-text-sans-medium'>Zásady ochrany osobných údajov</Link>
                </li>
                <LineSeparator isColored={false} inNavMenu={false} />
                <li>
                    <Link href="/pravne/odhlasit-odber" className='link-text-sans-medium'>Odhlásenie z odberu</Link>
                </li>
            </ul>
            <p className='label-sans-light'>Naposledy aktualizované {LAST_UPDATED}</p>
        </main>
    );
}

export default LegalPage;