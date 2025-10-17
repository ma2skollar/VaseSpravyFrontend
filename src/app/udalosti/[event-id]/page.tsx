import ClientEvent from './ClientEvent';
import { notFound } from 'next/navigation';
import { GLOBAL_PROCESSED_EVENTS, ARTICLES_REVALIDATE, ARTICLE_PAGE_SIZE, EVENTS_REVALIDATE } from '@/util/constants';

interface EventPageProps {
	eventParams: Promise<{ 'event-id': string }>;
}

const fetchEventData = async (eventId: string) => {
	const res = await fetch(`https://api.vasespravy.sk/events/${eventId}`,{
		method: 'GET',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.BEARER_AUTH_TOKEN}`
		},
		next: { revalidate: EVENTS_REVALIDATE },
	});
	if (!res.ok) return null;
	return res.json();
}

const fetchEventArticles = async (eventId: string) => {
	const res = await fetch(`https://api.vasespravy.sk/events/${eventId}/articles/all?processed=${GLOBAL_PROCESSED_EVENTS}&amount=${ARTICLE_PAGE_SIZE}&startIndex=0`,{
			method: 'GET',
			headers: { 
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${process.env.BEARER_AUTH_TOKEN}`
			},
			next: { revalidate: ARTICLES_REVALIDATE },
		});
	if (!res.ok) return null;
	return res.json();
}

const EventPage = async (props: EventPageProps) => {
	const { 'event-id': eventId } = await props.eventParams;
	const data = await fetchEventData(eventId);
	const articlesArray = await fetchEventArticles(eventId);
	if (GLOBAL_PROCESSED_EVENTS) {
		if (!data || !data.processed) return notFound()
	} else {
		if (!data) return notFound()
	}
	return <ClientEvent eventData={data} eventArticles={articlesArray ?? []} />;
}

export default EventPage;