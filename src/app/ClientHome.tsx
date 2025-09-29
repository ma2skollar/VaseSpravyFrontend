"use client";

import styles from "@/app/FeedPage.module.scss";
import EventContainer from "@/components/organisms/EventContainer/EventContainer";
import NavBar from "@/components/molecules/NavBar/NavBar";
import LineSeparator from "@/components/atoms/LineSeparator/LineSeparator";
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Event } from "@/types/event";

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

	const seenIds = useMemo(() => new Set(events.map((e) => e.id)), [events]);

	const loadMore = useCallback(async () => {
		if (isLoading || !hasMore) return;
		setIsLoading(true);
		setError(null);

		try {
			const startIndex = events.length;
			const params = new URLSearchParams({
				amount: String(pageSize),
				startIndex: String(startIndex),
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

			if (!newEvents || newEvents.length === 0) {
				setHasMore(false);
			} else {
				setEvents((prev) => [
					...prev,
					...newEvents.filter((e) => !seenIds.has(e.id)),
				]);
			}
		} catch (e: any) {
			setError(e?.message ?? "Unknown error");
		} finally {
			setIsLoading(false);
		}
	}, [events.length, hasMore, isLoading, pageSize, processed, seenIds]);

	const sentinelRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!sentinelRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const first = entries[0];
				if (first.isIntersecting) {
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
	}, [loadMore]);

	return (
		<>
			<NavBar canSwitchContent={false} contentPrimaryText={"Najnovšie udalosti"} />
			<main className={styles.container}>
				{events.map((event, index) => (
					<Fragment key={event.id}>
						{index !== 0 && <LineSeparator inNavMenu={false} isColored={false} />}
						<EventContainer
							title={event.title}
							category={event.category}
							location={event.location}
							imageUrl={event.imageUrls?.[0]}
							altText={event.title}
							distribution={{
								liberal: event.liberalCount ?? 0,
								conservative: event.conservativeCount ?? 0,
								center: event.centerCount ?? 0,
							}}
							description={event.description || ""}
							onClick={() => (window.location.href = `/udalosti/${event.id}`)}
						/>
					</Fragment>
				))}

				{error && (
					<>
						<LineSeparator inNavMenu={false} isColored={false} />
						<div className={styles.error}>
							<p className="label-sans-heavy">
								Nepodarilo sa nám načítať udalosti.
							</p>
							<button onClick={loadMore}>
								<p className="label-sans-heavy">Skúsiť znova</p>
							</button>
						</div>
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
					<>
						<LineSeparator inNavMenu={false} isColored={false} />
						<div ref={sentinelRef} className={styles.sentinel}>
							{isLoading ? (
								<>
									{/* Add some kind of visual element maybe? */}
									<p className="label-sans-heavy">Načítavam...</p>
								</>
							) : null}
						</div>
					</>
				)}
			</main>
		</>
	);
};

export default ClientHome;