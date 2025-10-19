export type Article = {
    id: string;
    title: string;
    publicationDate: string;
    link: string;
    source: string;
    politicalBias: ArticleBias;
}

export enum ArticleBias {
    liberal = 'liberal',
	conservative = 'conservative',
	center = 'center'
}

export enum ArticleSource {
    aktuality = 'aktuality',
    cas = 'cas',
    dennikn = 'dennikn',
    dobrenoviny = 'dobrenoviny',
    hlavnespravy = 'hlavnespravy',
    hn = 'hnonline',
    newssk = 'news',
    novinysk = 'noviny',
    postoj = 'postoj',
    pravda = 'pravda',
    sme = 'sme',
    standard = 'standard',
    stvr = 'stvr',
    topky = 'topky',
    tvnoviny = 'tvnoviny',
    // add  more later
}