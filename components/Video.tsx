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
    <div className="relative h-0 pb-[50%]">
      <iframe
        width="100%"
        height="100%"
        src={newSrc}
        title=""
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute"
      ></iframe>
    </div>
  )
}
