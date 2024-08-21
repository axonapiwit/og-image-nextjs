import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [`${product.image}`, ...previousImages],
      url: `http://localhost:3000/products/${id}`,
    },
  }
}


export default function Page({ params, searchParams }: Props) {

  const product = fetch(`https://fakestoreapi.com/products/${params.id}`).then((res) => res.json())

  console.log(product);
  
  
  return (
    <div>
      <h1>Product</h1>
      <p>{'test'}</p>
    </div>
  )
}