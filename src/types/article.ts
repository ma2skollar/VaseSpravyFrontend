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