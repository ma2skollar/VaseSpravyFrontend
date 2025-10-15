export type Article = {
    id: string;
    title: string;
    publicationDate: string;
    link: string;
    source: string;
    politicalBias: ArticleBias;
}

// Map to BiasMarkerType in TitleListItem component using Record
export enum ArticleBias {
    liberal = 'liberal',
	conservative = 'conservative',
	center = 'center'
}

// Map to Icons in TitleListItem component using Record
export enum ArticleSource {
    aktuality = 'https://www.aktuality.sk',
    dennikn = 'https://dennikn.sk',
    dobrenoviny = 'https://www.dobrenoviny.sk',
    hlavnespravy = 'https://www.hlavnespravy.sk',
    hn = 'https://hn24.hnonline.sk',
    newssk = 'https://www.news.sk',
    novinysk = 'https://www.noviny.sk',
    // novycas
    // postoj
    pravda = 'https://spravy.pravda.sk',
    sme = 'https://domov.sme.sk',
    standard = 'https://standard.sk',
    // stvr = 'https://spravy.stvr.sk',
    topky = 'https://www.topky.sk',
    tvnoviny = 'https://tvnoviny.sk',
    // add  more later
}