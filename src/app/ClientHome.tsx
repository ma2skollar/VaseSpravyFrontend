"use client";

import styles from "@/app/FeedPage.module.scss";
import EventContainer from "@/components/organisms/EventContainer/EventContainer";
import NavBar from "@/components/molecules/NavBar/NavBar";
import LineSeparator from "@/components/atoms/LineSeparator/LineSeparator";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Event } from "@/types/event";
import { MAX_LOAD_EVENTS_AUTO } from "@/util/constants";


interface ClientHomeProps {
	eventsArray: Event[];
	pageSize: number;
	processed: boolean;
}

const ClientHome = ({ eventsArray, pageSize, processed }: ClientHomeProps) => {
	const [events, setEvents] = useState<Event[]>(eventsArray);
	const [isLoading, setIsLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [nextStartIndex, setNextStartIndex] = useState(() => eventsArray.length);

	const loadMore = useCallback(async () => {
		if (isLoading || !hasMore) return;
		setIsLoading(true);
		setError(null);

		try {
			const params = new URLSearchParams({
				amount: String(pageSize),
				startIndex: String(nextStartIndex),
				processed: String(processed),
			});

			const res = await fetch(`/api/events?${params.toString()}`, {
				method: "GET",
				cache: "no-store",
			});

			if (res.status === 404) {
				setHasMore(false);
				setIsLoading(false);
				return;
			}

			if (!res.ok) {
				throw new Error(`Fetch failed: ${res.status}`);
			}

			const { events: newEvents } = (await res.json()) as { events: Event[] };

			const serverCount = newEvents?.length ?? 0;
			setNextStartIndex((prev) => prev + serverCount);

			if (!newEvents || newEvents.length === 0) {
				setHasMore(false);
				return;
			}

			let appended = 0
			setEvents(prev => {
				const seen = new Set(prev.map(e => e.id));
				const deduped = newEvents.filter(e => !seen.has(e.id));
				appended = deduped.length;
				return [...prev, ...deduped];
			});
			
			if (appended === 0) {
				setHasMore(false);
			}
		} catch (e: unknown) {
			setError((e as Error)?.message ?? "Unknown error");
		} finally {
			setIsLoading(false);
		}
	}, [hasMore, isLoading, nextStartIndex, pageSize, processed]);

	const sentinelRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!sentinelRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const first = entries[0];
				if (
					first.isIntersecting &&
					!isLoading &&
					hasMore &&
					events.length < MAX_LOAD_EVENTS_AUTO
				) {
					loadMore();
				}
			},
			{
				root: null,
				rootMargin: "800px 0px",
				threshold: 0,
			}
		);

		observer.observe(sentinelRef.current);
		return () => observer.disconnect();
	}, [loadMore, isLoading, hasMore, events.length]);

	return (
		<>
			<NavBar canSwitchContent={false} contentPrimaryText={"Najnovšie udalosti"} />
			<main className={styles.container}>
				{events.map((event, index) => (
					<Fragment key={event.id}>
						<EventContainer
							title={event.title}
							category={event.category}
							location={event.location}
							imageUrls={event.imageUrls}
							altText={event.title}
							distribution={{
								liberal: event.liberalCount ?? 0,
								conservative: event.conservativeCount ?? 0,
								center: event.centerCount ?? 0,
							}}
							description={event.description || ""}
							onClick={() => (window.location.href = `/udalosti/${event.id}`)}
						/>
						{index !== events.length - 1 && (
							<LineSeparator inNavMenu={false} isColored={false} />
						)}
					</Fragment>
				))}

				{error && (
					<>
						<LineSeparator inNavMenu={false} isColored={false} />
						<div className={styles.error}>
							<p className="label-sans-heavy">
								Nepodarilo sa nám načítať udalosti.
							</p>
							<button className={styles.button} onClick={loadMore}>
								<p className="label-sans-heavy">Skúsiť znova</p>
							</button>
						</div>
					</>
				)}

				{events.length >= MAX_LOAD_EVENTS_AUTO && hasMore && !isLoading && !error && (
					<>
						<LineSeparator inNavMenu={false} isColored={false} />
						<button className={styles.button} onClick={loadMore}>
							<p className="label-sans-heavy">Načítaj viac udalostí</p>
						</button>
					</>
				)}

				{(!hasMore && !isLoading) && (
					<>
						<LineSeparator inNavMenu={false} isColored={false} />
						<div className={styles.end}>
							<p className="label-sans-heavy">Žiadne ďalšie udalosti.</p>
						</div>
					</>
				)}

				{hasMore && (
					<div ref={sentinelRef} className={styles.sentinel}>
						{isLoading ? (
							<>
								<LineSeparator inNavMenu={false} isColored={false} />
								<div className={styles.sentinelText}>
									{/* Add some kind of visual element maybe? */}
									<p className="label-sans-heavy">Načítavam...</p>
								</div>
							</>
						) : null}
					</div>
				)}
			</main>
		</>
	);
};

export default ClientHome;