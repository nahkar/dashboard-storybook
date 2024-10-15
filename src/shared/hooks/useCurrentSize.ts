import { theme } from '@/app/styles/theme';
import { useLayoutEffect, useState } from 'react';

type BreakpointKey = keyof typeof theme.breakpoints;

export const useCurrentSize = () => {
	const [breakPont, setBreakPont] = useState<BreakpointKey>();
	const [browserHeight, setBrowserHeight] = useState(window.innerHeight);
	useLayoutEffect(() => {
		const getCurrentBreakpoint = () => {
			setBrowserHeight(window.innerHeight);
			const innerWidth = window.innerWidth;
			const outerWidth = window.outerWidth;
			const { breakpoints } = theme;
			let result: keyof typeof theme.breakpoints = 'desktop';
			for (const key of Object.keys(breakpoints)) {
				const breakpoint = parseInt(breakpoints[key as BreakpointKey]);
				if (innerWidth <= breakpoint || outerWidth <= breakpoint) {
					result = key as BreakpointKey;
					break;
				}
			}

			setBreakPont(result);
		};
		getCurrentBreakpoint();

		window.addEventListener('resize', getCurrentBreakpoint);

		return () => {
			window.removeEventListener('resize', getCurrentBreakpoint);
		};
	}, []);

	return {
		breakPont,
		browserHeight,
		isMobile: breakPont === 'mobile',
		isTablet: breakPont === 'tablet',
		isMiniTablet: breakPont === 'miniTablet',
		isDesktop: breakPont === 'desktop',
	};
};
