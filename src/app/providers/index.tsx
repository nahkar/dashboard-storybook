import { CustomThemeProvider } from '@/app/contexts/CustomThemeContext';
import { RouterProvider } from '@/app/routes';
import { GlobalStyle } from '@/app/styles/global';
import { useMenu } from '@/widgets/Menu/hooks/useMenu';
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
	const { isOpen } = useMenu();
	return (
		<QueryClientProvider client={queryClient}>
			<CustomThemeProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyle theme={theme} $isMenuOpen={isOpen} />
					<RouterProvider />
					{children}
				</ThemeProvider>
			</CustomThemeProvider>
		</QueryClientProvider>
	);
};
