import styled, { css } from 'styled-components';

export const CenterGrid = css`
	display: grid;
	place-items: center;
`;

export const spaceBetween = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const justifyCenter = css`
	display: flex;
	justify-items: center;
`;
export const noMarginPadding = css`
	margin: 0;
	padding: 0;
`;

export const Center = styled.div`
	display: grid;
	place-items: center;
`;

export const Container = styled.div``;

export const Button = styled.button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`;

export const Content = styled.div`
	max-width: 42rem;
	margin-left: auto;
	margin-right: auto;
	padding-left: 2rem;
	padding-right: 2rem;
`;

export const PageWrapper = styled.div``;

export const Title = styled.h1`
	padding: 0;
`;
