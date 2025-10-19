export type Event = {
    id: string;
    title: string;
    location: string;
    description: string;
    imageUrls: string[];
    category: EventCategory;
    region: EventRegion;
    createdAt: string;
    latestUpdate: string;
    firstPublication: string;
    liberalCount: number;
    conservativeCount: number;
    centerCount: number;
    summaryLiberal: string | null;
    summaryConservative: string | null;
    summaryCenter: string | null;
    summaryComparison: string | null;
    processed: boolean;
    processedArticleCount: number;
    totalArticleCount: number;
}

export enum EventCategory {
    zahranicna_politika = "zahranicna_politika",
    domaca_politika = "domaca_politika",
    ekonomika = "ekonomika",
    kultura = "kultura",
    sport = "sport",
}

export enum EventRegion {
    zapadne_slovensko = "zapadne_slovensko",
    stredne_slovensko = "stredne_slovensko",
    vychodne_slovensko = "vychodne_slovensko",
}