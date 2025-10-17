'use client'

import styles from './EventPage.module.scss'
import ClickBox, { IconSize } from '@/components/atoms/ClickBox/ClickBox'
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
import { Article, ArticleBias, ArticleSource } from '@/types/article'
import { useAppSelector } from '@/lib/hooks'
import { getTimeDiff } from '@/util/getTimeDiff'
import { GLOBAL_PROCESSED_EVENTS, MAX_LOAD_ARTICLES_AUTO } from '@/util/constants'
import { copy } from '@/util/copy'

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
	const [nextStartIndex, setNextStartIndex] = useState(() => props.eventArticles.length);

	const loadMore = useCallback(async () => {
		if (isLoading || !hasMore) return;
		setIsLoading(true);
		setError(null);

		try {
			const params = new URLSearchParams({
				eventId: props.eventData.id,
				amount: String(8),
				startIndex: String(nextStartIndex),
				processed: String(GLOBAL_PROCESSED_EVENTS),
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

			setNextStartIndex(prev => prev + (newArticles?.length ?? 0));

			if (!newArticles || newArticles.length === 0) {
				setHasMore(false);
				return;
			} 
			
			let appended = 0;
			setArticles(prev => {
				const seen = new Set(prev.map(a => a.id));
				const deduped = newArticles.filter(a => !seen.has(a.id));
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
	}, [hasMore, isLoading, nextStartIndex, props.eventData.id]);

	const sentinelRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!sentinelRef.current) return;

		const observer = new IntersectionObserver(
			entries => {
				const first = entries[0];
				if (
					first.isIntersecting && 
					!isLoading && 
					hasMore &&
					articles.length < MAX_LOAD_ARTICLES_AUTO
				) {
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
	}, [loadMore, isLoading, hasMore])

	const timeInfo = {
		published: getTimeDiff(new Date(props.eventData.firstPublication), new Date()),
		updated: getTimeDiff(new Date(props.eventData.latestUpdate), new Date()),
	}

	const handleCopyCurrentUrl = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
		console.log('Copying current URL to clipboard...');
		// const ok = await copy(window.location.href);
		// console.log('Copy URL:', ok ? 'Success' : 'Failed');
	};

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

	const summary = renderSummary();

	return (
		<main className={styles.container}>
			<EventTitle
				title={props.eventData.title}
				category={props.eventData.category}
				location={props.eventData.location}
				onClick={handleCopyCurrentUrl}
				publishedAgo={timeInfo.published.ago}
				publishedUnit={timeInfo.published.unit}
				updatedAgo={timeInfo.updated.ago}
				updatedUnit={timeInfo.updated.unit}
			/>
			<ImageContainer
				imageUrls={props.eventData.imageUrls}
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
										sourceBias={article.politicalBias as ArticleBias}
										sourceLogo={article.source as ArticleSource}
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