'use client'

import styles from '@/app/FeedPage.module.scss'
import EventContainer from '@/components/organisms/EventContainer/EventContainer'
import NavBar from '@/components/molecules/NavBar/NavBar'
import LineSeparator from '@/components/atoms/LineSeparator/LineSeparator';
import { Fragment } from 'react';

export interface ClientHomeProps {
	eventsArray: {
		id: number;
		title: string;
		location: string;
		description: string;
		imageUrls: string[];
		category: string;
		region: string;
		createdAt: string;
		latestUpdate: string;
		firstPublication: string;
		liberalCount: number;
		conservativeCount: number;
		centerCount: number;
		summaryLiberal: string | null;
		summaryConservative: string | null;
		summaryCenter: string | null;
		processed: boolean;
		processedArticleCount: number;
		totalArticleCount: number;
	}[];
}

// TODO: Add infinite scroll with lazy loading of events

const ClientHome = (props: ClientHomeProps) => {
	return (
		<>
			<NavBar canSwitchContent={false} contentPrimaryText={'Najnovšie udalosti'} />
			<main className={styles.container}>
				{props.eventsArray.map((event, index) => 
					<Fragment key={event.id}>
						{index !== 0 && <LineSeparator inNavMenu={false} isColored={false} />}
						<EventContainer key={event.id} title={event.title} category={event.category} location={event.location} imageUrl={event.imageUrls[0]} altText={event.title} distribution={{
							liberal: 20,
							conservative: 45,
							center: 1005
						}} description='lorem ipsum dolor sit amet consectetur adipiscing elit' onClick={() => window.location.href = `/udalosti/${event.id}`} />
					</Fragment>
				)}
			</main>
		</>
	)
}

export default ClientHome;