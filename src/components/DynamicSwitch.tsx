import { useCallback, useRef, useState } from 'react';

import styled from 'styled-components';
import { Button } from '../styles/common';

const DynamicSwitchWrapper = styled.div`
	--padding-horizontal: 16px;
	--padding-vertical: 7px;
	position: relative;
	display: flex;
	gap: calc(var(--padding-horizontal) * 2);
	padding: var(--padding-vertical) var(--padding-horizontal);
	border-radius: 64px;
	box-sizing: border-box;
	background-color: ${({ theme }) => theme.colors.white};
	overflow: hidden;
	transition: opacity 0.1s ease 0.3s;
`;

interface SelectedBoxProps {
	left: number;
	width: number;
	offset: number;
	noTransition: boolean;
}

const SelectedBox = styled.div<SelectedBoxProps>`
	position: absolute;
	border-radius: 64px;
	top: 0;
	padding: 0 var(--padding-horizontal);
	box-sizing: content-box;
	background-color: ${({ theme }) => theme.colors.black};
	width: 60px;
	height: 100%;
	width: ${({ width }) => `${width}px`};
	left: ${({ left, offset }) => `calc(${left - offset}px - var(--padding-horizontal))`};
	transition: ${({ noTransition }) => (noTransition ? 'none' : 'left 0.3s, width 0.3s')};
`;
const Option = styled(Button)<{ isActive: boolean }>`
	color: ${({ isActive, theme }) => (isActive ? theme.colors.white : theme.colors.black)};
	font: ${({ theme }) => theme.fonts.buttonText};
	z-index: 1;
	transition: color 0.3s;
	text-transform: uppercase;
	cursor: pointer;
`;

export type entry<T> = {
	key: T;
	label: string;
};

export type DynamicSwitchProps<T> = {
	entries: entry<T>[];
	current: T;
	setCurrent: (key: T) => void;
	className: string;
};

export const DynamicSwitch = <T,>({
	entries,
	current,
	setCurrent,
	className,
}: DynamicSwitchProps<T>) => {
	//   const currentIdx = entries.findIndex(({ key }) => key == current)
	const [firstClick, setFirstClick] = useState(true);

	const wrapperRef = useRef<HTMLDivElement>(null);
	const wrapperLeft = wrapperRef.current?.getBoundingClientRect().left || 0;

	const [activeOption, setActiveOption] = useState<HTMLButtonElement>();
	const activeOptionLeft = activeOption?.getBoundingClientRect().left || 0;
	const activeOptionWidth = activeOption?.getBoundingClientRect().width || 0;

	const isActive = (key: T) => current == key;

	const handleClick = (key: T) => {
		firstClick && setFirstClick(false);
		setCurrent(key);
	};

	const onButtonRefChange = useCallback((node: HTMLButtonElement) => setActiveOption(node), []);

	return (
		<DynamicSwitchWrapper className={`${className} dynamic-switch`} ref={wrapperRef}>
			{entries.map(({ key, label }, idx) => (
				<Option
					isActive={isActive(key)}
					className={`dynamic-switch-option-${idx}`}
					key={`dynamic-switch-option-${idx}`}
					onClick={() => isActive(key) || handleClick(key)}
					ref={isActive(key) ? onButtonRefChange : undefined}
				>
					{label}
				</Option>
			))}
			<SelectedBox
				className="dynamic-switch-slider"
				left={activeOptionLeft}
				width={activeOptionWidth}
				offset={wrapperLeft}
				noTransition={firstClick}
			/>
		</DynamicSwitchWrapper>
	);
};
