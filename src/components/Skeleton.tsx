import React, { type CSSProperties, type HTMLProps } from 'react'
import styled, { css, keyframes } from 'styled-components'

const breatheAnimation = keyframes`
	from {
    background-position-x: 200%;
  }
	to {
    background-position-x: -200%;
  }
`

export const skeletonAnimationStyle = css`
  cursor: progress;
  background: ${({ theme }) =>
    `linear-gradient(to right, transparent, ${theme.colors.white}, transparent), ${theme.colors.lightGrey}`};
  background-size: 200% 100%;
  background-repeat: no-repeat;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: ${breatheAnimation};
`

const Wrapper = styled.div<{ $width: CSSProperties['width']; $height: CSSProperties['width'] }>`
  ${({ $width, $height }) => css`
    width: ${$width};
    height: ${$height};
    ${skeletonAnimationStyle}
    margin: 0;
  `}
`

interface SkeletonProps {
  className?: HTMLProps<HTMLDivElement>['className']
  width?: CSSProperties['width']
  height?: CSSProperties['height']
}

export const Skeleton = ({ width = '100%', height = '100%', className }: SkeletonProps) => {
  return (
    <Wrapper className={`Servito__skeleton ${className || ''}`} $width={width} $height={height} />
  )
}
