export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose lg:prose-xl container p-8">{children}</article>
  )
}
