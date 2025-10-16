import { lastUpdated } from '../page';
import styles from './../LegalPage.module.scss';

const PrivacyPolicyPage = () => {
    const content = [
        {
            title: "Prevádzkovateľ",
            text: [
                "Prevádzkovateľom služby Vaše Správy (ďalej len „Služba“) je:",
                "\n",
                "Vaše Správy",
                "IČO: 57011265",
                "Sídlo: Bajkalská 18831/45G 821 05 Bratislava",
                "Bankové spojenie: SK0411000000002942275533",
                "E-mail: info@vasespravy.sk",
                "\n",
                "Služba je určená používateľom v Slovenskej republike.",
                "Dáta sú spracúvané na serveroch umiestnených v Nemecku (EÚ). Frontend je poskytovaný prostredníctvom platformy Vercel, pričom prevádzka prebieha cez sieť Cloudflare."
            ]
        },
        {
            title: "Aké údaje spracúvame",
            text: [
                "Spracúvame iba e-mailové adresy, a to len v prípade, že používateľ výslovne súhlasí s týmito zásadami a podmienkami používania."
            ]
        },
        {
            title: "Účel spracúvania",
            text: [
                "E-mailová adresa sa spracúva výhradne na tieto účely:",
                "\n",
                "- komunikácia súvisiaca s používaním Služby (napr. potvrdenia, notifikácie),",
                "- zasielanie informačných a marketingových oznámení (napr. newsletter, novinky o Službe),",
                "\n",
                "Používateľ môže svoj súhlas so zasielaním marketingových správ kedykoľvek odvolať kliknutím na odkaz na odhlásenie v e-maili alebo kontaktovaním prevádzkovateľa.",
                "\n",
                "Údaje sa neposkytujú tretím stranám na ich vlastné marketingové účely a nepredávajú sa žiadnym subjektom."
            ]
        },
        {
            title: "Doba uchovávania",
            text: [
                "E-mailové adresy sa uchovávajú do doby, kým má používateľ aktívny účet alebo kým neodvolá svoj súhlas.", 
                "Po deaktivácii účtu zostáva e-mailová adresa deaktivovaná, nie však okamžite vymazaná.", 
                "Úplné (tzv. „hard“) vymazanie prebehne najneskôr do 4 rokov od deaktivácie účtu, alebo skôr, ak to bude vyžadovať platná legislatíva EÚ alebo SR."
            ]
        },
        {
            title: "Právny základ spracúvania",
            text: [
                "Spracúvanie osobných údajov sa vykonáva na základe:",
                "\n",
                "- súhlasu dotknutej osoby podľa článku 6 ods. 1 písm. a) Nariadenia GDPR (pre zasielanie marketingových oznámení a správu používateľského účtu),",
                "- oprávneného záujmu prevádzkovateľa podľa článku 6 ods. 1 písm. f) GDPR (na zabezpečenie funkčnosti a bezpečnosti služby)."
            ]
        },
        {
            title: "Miesto a spôsob spracúvania",
            text: [
                "Údaje sú spracúvané v rámci Európskej únie, pričom sa uplatňujú všetky opatrenia na ochranu osobných údajov podľa GDPR.",
                "Prenos údajov mimo EÚ sa nevykonáva."
            ]
        },
        {
            title: "Práva používateľa",
            text: [
                "Používateľ má právo:",
                "\n",
                "- požiadať o prístup k svojim osobným údajom,",
                "- požadovať opravu alebo vymazanie údajov,",
                "- obmedziť spracúvanie,",
                "- odvolať súhlas so spracúvaním (najmä pre marketingové účely),",
                "- podať sťažnosť na Úrad na ochranu osobných údajov SR."
            ]
        },
        {
            title: "Kontakt",
            text: [
                "V prípade otázok alebo uplatnenia práv nás môžete kontaktovať na e-mailovej adrese: info@vasespravy.sk"
            ]
        }
    ]

    return (
        <main className={styles.container}>
            <h1 className='title-serif-large'>Zásady ochrany osobných údajov</h1>
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

export default PrivacyPolicyPage;