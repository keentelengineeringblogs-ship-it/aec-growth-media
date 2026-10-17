import NextImage, { type ImageProps } from 'next/image'

// Preserve the existing Payload image configuration. Reference photos are already
// sized by Unsplash, and the small local brand SVGs do not need optimization.
export default function Image(props: ImageProps) {
  return <NextImage {...props} quality={100} unoptimized />
}
