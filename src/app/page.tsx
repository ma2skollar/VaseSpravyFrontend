import ClientHome from "@/app/ClientHome";
import { PAGE_SIZE, revalidate } from "./api/events/route";

export default async function Page() {
	const processed = false;

	const data = await fetch(
		`https://api.vasespravy.sk/events/all?processed=${processed}&amount=${PAGE_SIZE}&startIndex=0`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.BEARER_AUTH_TOKEN}`,
			},
			next: { revalidate: revalidate },
		}
	).then(async (res) => {
		if (res.status === 404) return [];
		if (!res.ok) throw new Error(`Upstream error: ${res.status}`);
		return res.json();
	});

	return <ClientHome eventsArray={data} pageSize={PAGE_SIZE} processed={processed} />;
}