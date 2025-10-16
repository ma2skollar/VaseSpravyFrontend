import ClientEvent from './ClientEvent';
import { notFound } from 'next/navigation';
import { revalidate } from '@/app/api/articles/route';
import { GLOBAL_PROCESSED_EVENTS } from '@/util/constants';

interface EventPageProps {
	params: { 'event-id': string }
}

export const ARTICLE_PAGE_SIZE = 8;

const fetchEventData = async (eventId: string) => {
	const res = await fetch(`https://api.vasespravy.sk/events/${eventId}`,{
		method: 'GET',
		headers: { 
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.BEARER_AUTH_TOKEN}`
		},
		next: { revalidate: 60 },
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
			next: { revalidate: revalidate},
		});
	if (!res.ok) return null;
	return res.json();
}

const EventPage = async (props: EventPageProps) => {
	// Nextjs async params
	const { 'event-id': eventId } = await props.params;
	const data = await fetchEventData(eventId);
	const articlesArray = await fetchEventArticles(eventId);
	if (GLOBAL_PROCESSED_EVENTS) {
		if (!data || !data.processed) return notFound()
	} else {
		if (!data) return notFound()
	}
	return <ClientEvent eventData={data} eventArticles={articlesArray} />;
}

export default EventPage;