import CoreWrapper from "@/app/(core)/_components/core-wrapper"
import ProductDetails from "./product-details"

interface ProductPageProps {
  params: {
    id: string
  }
}

const ProductPage = ({ params }: ProductPageProps) => {
  return (
    <CoreWrapper>
      <ProductDetails productId={params.id} />
    </CoreWrapper>
  )
}

export default ProductPage
