import { StyledContainer } from '@/app/styles/global';
import { useEventInfiniteQuery } from '@/entities/event/model/useEventInfiniteQuery';
import { EventCard } from '@/features/EventCard';
import { Search } from '@/features/Search';
import { useCallback, useEffect, useRef } from 'react';

import { StyledDashboardCardItem, StyledDashboardCardList } from './styled';

export const Events = ({ limit = 10 }) => {
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error } =
		useEventInfiniteQuery(limit);

	const observerRef = useRef<IntersectionObserver>();

	// Intersection Observer callback
	const lastEventElementRef = useCallback(
		(node: HTMLElement | null) => {
			if (isLoading) return;
			if (observerRef.current) observerRef.current.disconnect();

			observerRef.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
					fetchNextPage();
				}
			});

			if (node) observerRef.current.observe(node);
		},
		[fetchNextPage, hasNextPage, isFetchingNextPage, isLoading],
	);

	// Cleanup observer on unmount
	useEffect(() => {
		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, []);

	// Flatten all pages data
	const allEvents = data?.pages.flatMap((page) => page.data) || [];

	// Get total count from the first page meta
	const totalCount = data?.pages[0]?.meta?.count || 0;

	if (isLoading) {
		return null;
	}

	if (isError) {
		return (
			<div style={{ textAlign: 'center', padding: '2rem', color: '#ef4444' }}>
				Error loading events: {error.message}
			</div>
		);
	}

	return (
		<>
			<Search title="Event List" count={totalCount} />
			<StyledContainer $mb={10} />
			<StyledDashboardCardList>
				{allEvents.map((event, index) => {
					const isLastEvent = index === allEvents.length - 3;

					return (
						<StyledDashboardCardItem
							key={event.eventId}
							ref={isLastEvent ? lastEventElementRef : null}
						>
							<EventCard event={event} />
						</StyledDashboardCardItem>
					);
				})}
			</StyledDashboardCardList>

			{/* Loading indicator for next page */}
			{isFetchingNextPage && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						padding: '2rem',
					}}
				>
					<div
						style={{
							width: '24px',
							height: '24px',
							border: '2px solid #e5e7eb',
							borderTop: '2px solid #3b82f6',
							borderRadius: '50%',
							animation: 'spin 1s linear infinite',
						}}
					></div>
					<span style={{ marginLeft: '0.5rem', color: '#6b7280' }}>Loading more events...</span>
				</div>
			)}

			{/* End of results indicator */}
			{!hasNextPage && allEvents.length > 0 && (
				<div
					style={{
						textAlign: 'center',
						padding: '2rem',
						color: '#6b7280',
					}}
				>
					<p>You've reached the end of the events list</p>
				</div>
			)}

			{/* No events found */}
			{allEvents.length === 0 && !isLoading && (
				<div
					style={{
						textAlign: 'center',
						padding: '2rem',
						color: '#6b7280',
					}}
				>
					<p>No events found</p>
				</div>
			)}

			{/* CSS for spinner animation */}
			<style
				dangerouslySetInnerHTML={{
					__html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `,
				}}
			/>
		</>
	);
};
