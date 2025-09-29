import ClientEvent from './ClientEvent';
import { notFound } from 'next/navigation';
import {  revalidate } from '@/app/api/articles/route';

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
	const processed = false;
	// TODO: switch to true for production

	const res = await fetch(`https://api.vasespravy.sk/events/${eventId}/articles/all?processed=${processed}&amount=${ARTICLE_PAGE_SIZE}&startIndex=0`,{
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
	// TODO: uncomment and replace for production
	// if (!data || !data.processed) return notFound();
	if (!data) return notFound();
	return <ClientEvent eventData={data} eventArticles={articlesArray} />;
}

export default EventPage;