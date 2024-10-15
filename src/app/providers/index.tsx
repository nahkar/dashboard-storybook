import { CustomThemeProvider } from '@/app/contexts/CustomThemeContext';
import { RouterProvider } from '@/app/routes';
// Keep RouterProvider here
import { GlobalStyle } from '@/app/styles/global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';

type Props = {
	children?: ReactNode;
};

export const Providers: React.FC<Props> = ({ children }) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});
	return (
		<QueryClientProvider client={queryClient}>
			<CustomThemeProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyle theme={theme} />
					<RouterProvider />
					{children}
				</ThemeProvider>
			</CustomThemeProvider>
		</QueryClientProvider>
	);
};
