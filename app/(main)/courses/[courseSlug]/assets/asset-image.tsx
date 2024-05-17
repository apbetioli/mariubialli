import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'
import Image from 'next/image'

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
