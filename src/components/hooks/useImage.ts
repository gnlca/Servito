import { useCallback, useLayoutEffect, useState } from 'react'

type ImageStatus = 'loaded' | 'failed'

export const useImageStatus = () => {
  const [status, setStatus] = useState<ImageStatus>()

  // ImageNode saved with a callbackRef
  const [imgNode, setImageNode] = useState<HTMLImageElement>()
  const imgRef = useCallback((node: HTMLImageElement) => setImageNode(node), [])

  useLayoutEffect(() => {
    if (imgNode) {
      // imgNode.onloadstart = () => setStatus('loading')  // no loading event available for images (as the loadstart for videos and audio)
      imgNode.onload = () => setStatus('loaded')
      imgNode.onerror = () => setStatus('failed')
      return () => {
        imgNode.onload = null
        imgNode.onerror = null
      }
    }
  }, [imgNode])

  return [status, imgRef] as [ImageStatus, typeof imgRef]
}
