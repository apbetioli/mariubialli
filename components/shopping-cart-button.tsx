import { ShoppingCartIcon } from 'lucide-react'
import { useState } from 'react'
import { Badge } from './ui/badge'

export default function ShoppingCartButton() {
  const [itemCount, setItemCount] = useState(3)

  return (
    <div
      className="relative inline-flex items-center justify-center w-6 h-10 text-foreground hover:text-primary transition-colors cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      <ShoppingCartIcon />
      {itemCount > 0 && (
        <Badge
          variant="destructive"
          className="absolute top-0 -right-2 px-1.5 py-0.5 text-xs min-w-[1.2rem] h-[1.2rem] flex items-center justify-center"
        >
          {itemCount}
        </Badge>
      )}
    </div>
  )
}
