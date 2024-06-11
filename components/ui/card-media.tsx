import { cn } from '@/lib/utils'
import Image from 'next/image'

type CardMediaType = {
  className?: string
  src: string
  alt: string
}

const CardMedia = ({ className, src, alt }: CardMediaType) => {
  return (
    <div className={cn('relative aspect-video', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  )
}
export { CardMedia }
