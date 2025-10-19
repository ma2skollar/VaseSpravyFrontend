import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const mail = url.searchParams.get("mail");
    if (!mail) {
        return NextResponse.json({ error: "Missing mail" }, { status: 400 });
    }

    const upstream = await fetch(
        `https://api.vasespravy.sk/mail/request-unsubscribe?mail=${encodeURIComponent(mail)}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.BEARER_AUTH_TOKEN}`,
            },
            cache: "no-store",
        }
    );

    if (upstream.status === 404) {
        return NextResponse.json({ error: "Mail not found" }, { status: 404 });
    }

    if (!upstream.ok) {
        return NextResponse.json({ error: "Upstream error" }, { status: upstream.status });
    }

    return NextResponse.json(await upstream.json(), { status: upstream.status });
}