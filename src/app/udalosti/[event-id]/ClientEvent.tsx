'use client'

import styles from '@/app/EventPage.module.scss'
import { BiasMarkerType } from '@/components/atoms/BiasMarker/BiasMarker'
import ClickBox, { IconSize } from '@/components/atoms/ClickBox/ClickBox'
import SmeCustomIcon from '@/components/atoms/Icon/Custom/SmeCustomIcon'
import FilterIcon from '@/components/atoms/Icon/Material/FilterIcon'
import LineSeparator from '@/components/atoms/LineSeparator/LineSeparator'
import EventTitle from '@/components/molecules/EventTitle/EventTitle'
import ImageContainer from '@/components/molecules/ImageContainer/ImageContainer'
import InformationDescriptionLabel from '@/components/molecules/InformationDescriptionLabel/InformationDescriptionLabel'
import SearchBar from '@/components/molecules/SearchBar/SearchBar'
import TitleListItem from '@/components/molecules/TitleListItem/TitleListItem'
import CoverageDetailContainer from '@/components/organisms/CoverageDetailContainer/CoverageDetailContainer'
import EventSourcesFilter from '@/components/organisms/EventSourcesFilter/EventSourcesFilter'
import HoverSwitchComponent from '@/components/organisms/HoverSwitchComponent/HoverSwitchComponent'
import { Fragment, JSX, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Event } from '@/types/event'
import { Article } from '@/types/article'
import { useAppSelector } from '@/lib/hooks'

interface ClientEventProps {
	eventData: Event;
	eventArticles: Article[];
}

const ClientEvent = (props: ClientEventProps) => {
	const summarySwitchState = useAppSelector(state => state.singleArticleReducer.summarySwitch);
	const liberalSelected = summarySwitchState.liberal;
    const centerSelected = summarySwitchState.center;
    const conservativeSelected = summarySwitchState.conservative;
    const comparisonSelected = summarySwitchState.comparison;


	const [filterVisible, setFilterVisible] = useState(false);
	const [articles, setArticles] = useState<Article[]>(props.eventArticles);
	const [isLoading, setIsLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const seenArticleIds = useMemo(() => new Set(articles.map((a) => a.id)), [articles]);

	const loadMore = useCallback(async () => {
		if (isLoading || !hasMore) return;
		setIsLoading(true);
		setError(null);

		try {
			const startIndex = articles.length;
			const params = new URLSearchParams({
				eventId: props.eventData.id,
				amount: String(8),
				startIndex: String(startIndex),
				processed: String(false),
			});

			const res = await fetch(`/api/articles?${params.toString()}`, {
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

			const { articles: newArticles } = (await res.json()) as { articles: Article[] };

			if (!newArticles || newArticles.length === 0) {
				setHasMore(false);
			} else {
				setArticles((prev) => [
					...prev,
					...newArticles.filter((a) => !seenArticleIds.has(a.id)),
				]);
			}
		} catch (e: any) {
			setError(e?.message ?? "Unknown error");
		} finally {
			setIsLoading(false);
		}
	}, [articles.length, hasMore, isLoading, seenArticleIds, props.eventData.id]);

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
				rootMargin: "500px 0px",
				threshold: 0,
			}
		);

		observer.observe(sentinelRef.current);
		return () => observer.disconnect();
	}, [loadMore])

	const getTimeDiff = (from: Date, to: Date) => {
		const diffMs = to.getTime() - from.getTime();
		const diffMinutes = Math.floor(diffMs / (1000 * 60));
		const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
		const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
		
		if (diffMinutes < 60) {
			return {
				ago: diffMinutes || 1,
				unit: diffMinutes === 1 ? "minútou" : "minútami",
			};
		} else if (diffHours < 24) {
			return {
				ago: diffHours,
				unit: diffHours === 1 ? "hodinou" : "hodinami",
			};
		} else {
			return {
				ago: diffDays,
				unit: diffDays === 1 ? "dňom" : "dňami",
			};
		}
	};

	const timeInfo = {
		published: getTimeDiff(new Date(props.eventData.latestUpdate), new Date()),
		updated: getTimeDiff(new Date(props.eventData.firstPublication), new Date()),
	}

	const copyToClipboard = async (url: string) => {
		try {
			await navigator.clipboard.writeText(url);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	}

	const formatSummary = (summary: string | null) => {
		if (!summary) {
			return null;
		} else {

		}
		return summary?.split('\n').map((line, index) => (
			<li key={index} className='text-sans-large'>{line}</li>
		));
	}

	const renderSummary = (): JSX.Element | JSX.Element[]  => {
		switch (true) {
			case liberalSelected: {
				const s = formatSummary(props.eventData.summaryLiberal);
				if (s) return s;
				break;
			}
			case centerSelected: {
				const s = formatSummary(props.eventData.summaryCenter);
				if (s) return s;
				break;
			}
			case conservativeSelected: {
				const s = formatSummary(props.eventData.summaryConservative);
				if (s) return s;
				break;
			}
			case comparisonSelected: {
				const s = formatSummary(props.eventData.summaryComparison);
				if (s) return s;
				break;
			}
		}
		return (
			<li className="text-sans-large" style={{ listStyleType: "none" }}>
				Zhrnutie momentálne nie je k dispozícii.
			</li>
		);
	};

	const summary = useMemo(() => renderSummary(), [summarySwitchState, props.eventData]);

	return (
		<main className={styles.container}>
			<EventTitle
				title={props.eventData.title}
				category={props.eventData.category}
				location={props.eventData.location}
				onClick={() => copyToClipboard(window.location.href)}
				publishedAgo={timeInfo.published.ago}
				publishedUnit={timeInfo.published.unit}
				updatedAgo={timeInfo.updated.ago}
				updatedUnit={timeInfo.updated.unit}
			/>
			<ImageContainer
				imageUrl={props.eventData.imageUrls[0]}
				altText={''}
				imageLabel={''}
			/>
			<article className={styles.summary}>
				<ul>
					{summary}
				</ul>
				{<InformationDescriptionLabel
					label={'Zhrnutia sú vytvorené pomocou umelej inteligencie.'}description={'Na zhrnutia článkov využívame vlastné modely umelej inteligencie. Neustále pracujeme na ich zlepšovaní a vyvíjame presnejšie metódy na sumarizáciu. Ak si všimnete chybu, dajte nám vedieť.'}
				/>}
			</article>
			<HoverSwitchComponent />
			<LineSeparator 
				inNavMenu={false}
				isColored={false}
			/>
			<CoverageDetailContainer
				eventName={props.eventData.title}
				distribution={{
					liberal: props.eventData.liberalCount,
					conservative: props.eventData.conservativeCount,
					center: props.eventData.centerCount
				}} 
				publishedAgo={timeInfo.published.ago}
				publishedUnit={timeInfo.published.unit}
				updatedAgo={timeInfo.updated.ago}
				updatedUnit={timeInfo.updated.unit}
			/>
			<LineSeparator 
				inNavMenu={false}
				isColored={false}
			/>
			<div className={styles.sourceListContainer}>
				<div className={styles.sourceListTitle}>
					<h2 className='title-sans-large'>Všetky články</h2>
					<ClickBox
						icon={FilterIcon}
						iconSize={IconSize.Regular}
						onClick={() => setFilterVisible(!filterVisible)}
					/>
				</div>
				{filterVisible && <EventSourcesFilter />}
				<SearchBar
					action={'https://api.vasespravy.sk/events/{eventId}/article/all'}
					promptText='Hľadaj článok alebo zdroj'
				/>
				<ul className={styles.sourceList}>
					{props.eventArticles.map((article, index) => {
						const articleTimeInfo = getTimeDiff(new Date(article.publicationDate), new Date())
						
						return (
							<Fragment key={article.id}>
								{index !== 0 && <LineSeparator inNavMenu={false} isColored={false} />}
								<li>
									<TitleListItem 
										article={true}
										title={article.title}
										publishedAgo={articleTimeInfo.ago}
										publishedUnit={articleTimeInfo.unit}
										// TODO: add map for source bias and source logo based on article.source and article.politicalBias
										sourceBias={BiasMarkerType.Liberal}
										sourceLogo={SmeCustomIcon}
										link={article.link}
									/>
								</li>
							</Fragment>
						)
					})}
				</ul>

				{error && (
					<>
						<LineSeparator inNavMenu={false} isColored={false} />
						<div className={styles.error}>
							<p className="label-sans-heavy">
								Nepodarilo sa nám načítať zdroje.
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
							<p className="label-sans-heavy">Žiadne ďalšie zdroje.</p>
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
			</div>
		</main>
	)
}

export default ClientEvent;