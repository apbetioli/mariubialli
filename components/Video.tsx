import { AspectRatio } from './ui/aspect-ratio'

type VideoProps = {
  src: string
}

const sanitize = (src: string) => {
  if (src.startsWith('https://youtu.be/')) {
    return src.replace('https://youtu.be/', 'https://www.youtube.com/embed/')
  }
}

export default function Video({ src }: VideoProps) {
  const newSrc = sanitize(src)

  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        width="100%"
        height="100%"
        src={newSrc}
        title=""
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </AspectRatio>
  )
}
