import { EVENT_PAGE_SIZE } from "@/app/page";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 60;

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const amount = url.searchParams.get("amount") ?? String(EVENT_PAGE_SIZE);
    const startIndex = url.searchParams.get("startIndex") ?? "0";
    const processed = url.searchParams.get("processed") ?? "false";

    const upstream = await fetch(
        `https://api.vasespravy.sk/events/all?processed=${processed}&amount=${amount}&startIndex=${startIndex}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.BEARER_AUTH_TOKEN}`,
            },
            cache: "no-store",
        }
    );

    if (upstream.status === 404) {
        return NextResponse.json({ events: [] }, { status: 404 });
    }

    if (!upstream.ok) {
        return NextResponse.json(
            { error: "Upstream error" },
            { status: upstream.status }
        );
    }

    const events = await upstream.json();

    return NextResponse.json(
        { events },
        { status: 200, headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=60" } }
    );
}