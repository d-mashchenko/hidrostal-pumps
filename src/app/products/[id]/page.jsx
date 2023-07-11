import { productsList } from '../page';
import { ProductContent } from '@/sections/ProductContent/ProductContent';
import { ProductHero } from '@/sections/ProductHero/ProductHero';
import { ProductSpecification } from '@/sections/ProductSpecification/ProductSpecification';

export default function Product({ params }) {
  const currentProduct = productsList.find((product) => {
    return product.id === params.id;
  });

  return (
    <>
      <ProductHero {...currentProduct} />
      <ProductContent {...currentProduct} />
      <ProductSpecification {...currentProduct} />
    </>
  );
}
