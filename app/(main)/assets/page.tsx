import { useAssets } from '@/lib/queries/useAssets'
import AssetCard from './asset-card'

export default async function AssetsPage() {
  const assets = await useAssets()

  return (
    <div className="w-full md:container pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4 h-fit">
        {assets.map((asset) => (
          <AssetCard key={asset.id} asset={asset}></AssetCard>
        ))}
      </div>
    </div>
  )
}
