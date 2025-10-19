// app/not-found.tsx
import styles from '@/app/ErrorPage.module.scss'
import Link from "next/link";

export default function NotFound() {
    return (
        <main className={styles.container}>
            <h1 className='title-serif-large'>404<br />Stránka nebola nájdená</h1>
            <p className='text-sans-large'>Skontrolujte, či je URL adresa správna, alebo sa vráťte na <Link href='/' className='link-text-sans-medium'>hlavnú stránku</Link>.</p>
        </main>
    );
}
