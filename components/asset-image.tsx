import { cn } from '@/lib/utils'
import Image from 'next/image'
import { AspectRatio } from './ui/aspect-ratio'

export const AssetImage = ({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) => (
  <div className={cn('w-48 relative', className)}>
    <AspectRatio ratio={1 / 1.41}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
    </AspectRatio>
  </div>
)
