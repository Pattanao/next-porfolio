import NextImage from 'next/image'

interface ImageProps {
  alt?: string
  src: string
}
export const Image = (props: ImageProps) => {
  return <NextImage alt="image" {...props} />
}
