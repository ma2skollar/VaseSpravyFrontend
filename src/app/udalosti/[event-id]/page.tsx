import ClientEvent from './ClientEvent';
import { notFound } from 'next/navigation';

interface EventPageProps {
	params: { 'event-id': string }
}

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

const EventPage = async (props: EventPageProps) => {
	const eventData = await fetchEventData(props.params['event-id']);
	// if (!eventData || !eventData.processed) return notFound();
	if (!eventData) return notFound();
	return <ClientEvent eventData={eventData} />;
}

export default EventPage;