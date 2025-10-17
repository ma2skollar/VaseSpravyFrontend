import { GLOBAL_PROCESSED_EVENTS, ARTICLE_PAGE_SIZE, ARTICLES_REVALIDATE } from "@/util/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const eventId = url.searchParams.get("eventId");
    if (!eventId) {
        return NextResponse.json(
            { error: "Missing eventId parameter" },
            { status: 400 }
        );
    }
    const amount = url.searchParams.get("amount") ?? String(ARTICLE_PAGE_SIZE);
    const startIndex = url.searchParams.get("startIndex") ?? "0";
    const processed = url.searchParams.get("processed") ?? String(GLOBAL_PROCESSED_EVENTS);

    const upstream = await fetch(
        `https://api.vasespravy.sk/events/${eventId}/articles/all?processed=${processed}&amount=${amount}&startIndex=${startIndex}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.BEARER_AUTH_TOKEN}`,
            },
            cache: "no-store",
        }
    );

    if (upstream.status === 404) {
        return NextResponse.json({ articles: [] }, { status: 404 });
    }

    if (!upstream.ok) {
        return NextResponse.json(
            { error: "Upstream error" },
            { status: upstream.status }
        );
    }

    const articles = await upstream.json();

    return NextResponse.json(
        { articles },
        { status: 200, headers: { "Cache-Control": `s-maxage=${ARTICLES_REVALIDATE}, stale-while-revalidate=${ARTICLES_REVALIDATE}` } }
    );
}