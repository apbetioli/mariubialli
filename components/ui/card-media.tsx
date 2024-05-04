import { cn } from '@/lib/utils'
import Image from 'next/image'

type CardMediaType = {
  className?: string
  src: string
  alt: string
}

const CardMedia = ({ className, src, alt }: CardMediaType) => {
  return (
    <div className={cn('relative h-44 md:h-72', className)}>
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
