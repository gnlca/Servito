import { DetailedHTMLProps, ImgHTMLAttributes, type CSSProperties } from 'react'
import styled, { css } from 'styled-components'
import { ColorsKeys } from '../styles/theme'
import { useImageStatus } from './hooks/useImage'
import { skeletonAnimationStyle } from './Skeleton'

export type ImageProps = {
  width?: string
  height?: string
  $objectFit?: CSSProperties['objectFit']
}

const Image = styled.img<ImageProps & { hasLoaded?: boolean }>`
  ${({ width, height, $objectFit, hasLoaded = true }) => css`
    height: ${height};
    width: ${width};
    object-fit: ${$objectFit};
    opacity: ${hasLoaded ? 1 : 0};
  `}
`

const ImageWrapper = styled.div<{ isSkeletonVisible: boolean; $backgroundColor: ColorsKeys }>`
  width: 100%;
  height: 100%;
  overflow: hidden;

  background-color: ${({ theme, $backgroundColor }) => theme.colors[$backgroundColor]};
  ${({ isSkeletonVisible }) => (isSkeletonVisible ? skeletonAnimationStyle : null)};
`

type ContentImageProps = {
  src?: string
  showSkeleton?: boolean
  className?: string
  imgClassName?: string // needed to pass the swiper-lazy classname to lazy load images
  fallbackSrc?: string
  isLazy?: boolean
  backgroundColor?: ColorsKeys
} & ImageProps &
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export const ContentImage = ({
  src,
  className,
  width = '100%',
  height = '100%',
  $objectFit = 'contain',
  fallbackSrc,
  isLazy = false,
  imgClassName,
  showSkeleton = true,
  backgroundColor = 'lightGrey',
  ...props
}: ContentImageProps) => {
  const [status, imgRef] = useImageStatus()
  const [fallbackStatus, fallbackImgRef] = useImageStatus()

  const switchToFallback = status == 'failed' && fallbackSrc
  const hasLoaded = status == 'loaded' || fallbackStatus == 'loaded'
  const isSkeletonVisible = showSkeleton && !hasLoaded

  return (
    <ImageWrapper
      className={`Servito__image-wrapper Servito__image-wrapper-skeleton--${
        isSkeletonVisible ? 'active' : 'inactive'
      } ${className || ''}`}
      isSkeletonVisible={isSkeletonVisible}
      $backgroundColor={backgroundColor}
    >
      <Image
        {...props}
        alt={props.alt}
        className={`Servito__image ${imgClassName || ''}`}
        ref={switchToFallback ? fallbackImgRef : imgRef}
        loading={isLazy ? 'lazy' : 'eager'}
        hasLoaded={hasLoaded}
        src={switchToFallback ? fallbackSrc : src}
        width={width}
        height={height}
        $objectFit={switchToFallback ? 'contain' : $objectFit}
      />
    </ImageWrapper>
  )
}
