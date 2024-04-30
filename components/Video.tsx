import { AspectRatio } from './ui/aspect-ratio'

type VideoProps = {
  src: string
}

export default function Video({ src }: VideoProps) {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        width="100%"
        height="100%"
        src={src}
        title=""
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </AspectRatio>
  )
}
