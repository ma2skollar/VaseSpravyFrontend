import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const mail = url.searchParams.get("mail");
    if (!mail) {
        return NextResponse.json({ status: 400 });
    }

    const upstream = await fetch(
        `https://api.vasespravy.sk/mail/unsubscribe?mail=${encodeURIComponent(mail)}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.BEARER_AUTH_TOKEN}`,
            },
        }
    );

    if (upstream.status === 404) {
        return NextResponse.json({ status: 404 });
    }

    if (!upstream.ok) {
        return NextResponse.json({ status: upstream.status });
    }

    return NextResponse.json(await upstream.json());
}