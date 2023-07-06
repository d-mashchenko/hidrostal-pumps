import { ProductCard } from '@/components/ProductCard/ProductCard';
import { productsList } from '@/data/data';

export const ProductsGrid = () => {
  return (
    <section className='section'>
      <div className='default-content'>
        <h2 className='title'>Продукція hidrostal</h2>
        <div className='grid grid-cols-3 gap-5'>
          {productsList.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
