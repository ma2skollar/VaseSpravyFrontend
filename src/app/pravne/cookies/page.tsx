import { lastUpdated } from '../page';
import styles from './../LegalPage.module.scss';

const CookiesPage = () => {
    const content = [
        {
            title: "Čo sú cookies",
            text: [
                "Cookies sú malé textové súbory, ktoré sa ukladajú na zariadení používateľa pri návšteve webovej stránky.",
                "Cookies umožňujú webovým stránkam zapamätať si informácie o používateľovi, ako sú jeho preferencie a nastavenia."
            ]
        },
        {
            title: "Ako Vaše Správy používajú cookies",
            text: [
                "Naša Služba používa len nevyhnutné cookies, ktoré sú potrebné na správne fungovanie webovej stránky a zabezpečenie jej prevádzky.",
                "Tieto cookies neobsahujú osobné údaje a neumožňujú identifikáciu používateľa.",
                "\n",
                "Naša infraštruktúra (Vercel, Cloudflare) môže používať technické cookies na zabezpečenie výkonu, bezpečnosti a správneho smerovania prenosu údajov.",
                "Tieto cookies sú nevyhnutné pre poskytovanie služby a nie je možné ich odmietnuť bez prerušenia fungovania webu."
            ]
        },
        {
            title: "Ako môžete spravovať cookies",
            text: [
                "Väčšina webových prehliadačov umožňuje spravovať alebo odstrániť cookies podľa vašich preferencií.",
                "Ak si želáte, môžete vo svojom prehliadači zakázať ukladanie cookies.",
                "Upozorňujeme však, že v takom prípade niektoré časti služby nemusia fungovať správne."
            ]
        },
        {
            title: "Kontakt",
            text: [
                "Ak máte otázky ohľadom používania cookies, kontaktujte nás na: info@vasespravy.sk"
            ]
        }
    ]

    return (
        <main className={styles.container}>
            <h1 className='title-serif-large'>Zásady používania cookies</h1>
            <ol>
                {content.map((item, index) => (
                    <li key={index} className="title-sans-regular">
                        <h2 className="title-sans-regular">{item.title}</h2>
                        {item.text.map((paragraph, pIndex) => (
                            paragraph === "\n" ? (
                                <br key={pIndex} />
                            ) : (
                                <p key={pIndex} className="text-sans-regular-unselected">{paragraph}</p>
                            )
                        ))}
                    </li>
                ))}
            </ol>
            <p className='label-sans-light'>Naposledy aktualizované {lastUpdated}</p>
        </main>
    );
}

export default CookiesPage;