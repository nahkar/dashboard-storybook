import { ThemeT } from '@/app/styles/theme';
import { styled } from 'styled-components';

export const MainLayout__Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	justify-content: space-between;
	transition: all 0.2s;
	min-width: 1129px;
	max-width: 1334px;
	margin: auto;
`;
export const MainLayout__ContentWrapper = styled.div<{ theme: ThemeT }>`
	margin: 0 auto;
	padding: 30px;
`;
export const MainLayout__Inner = styled.div``;
