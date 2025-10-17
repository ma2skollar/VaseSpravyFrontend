import ClientHome from "@/app/ClientHome";
import { GLOBAL_PROCESSED_EVENTS, EVENTS_REVALIDATE, EVENT_PAGE_SIZE } from "@/util/constants";

export default async function Page() {
	const data = await fetch(
		`https://api.vasespravy.sk/events/all?processed=${GLOBAL_PROCESSED_EVENTS}&amount=${EVENT_PAGE_SIZE}&startIndex=0`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.BEARER_AUTH_TOKEN}`,
			},
			next: { revalidate: EVENTS_REVALIDATE },
		}
	).then(async (res) => {
		if (res.status === 404) return [];
		if (!res.ok) throw new Error(`Upstream error: ${res.status}`);
		return res.json();
	});

	return <ClientHome eventsArray={data} pageSize={EVENT_PAGE_SIZE} processed={GLOBAL_PROCESSED_EVENTS} />;
}