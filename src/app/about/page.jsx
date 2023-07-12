import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { ProductHero } from '@/sections/ProductHero/ProductHero';

export default function Products() {
  return (
    <>
      <ProductHero
        headerImage='https://media.licdn.com/dms/image/C4D12AQHdrEXrN7ZRkg/article-cover_image-shrink_600_2000/0/1520278169079?e=2147483647&v=beta&t=Qhpo9zLL1OInpy-WzGoGNwGB6vD627mDBktHKa2X8M0'
        title='factory'
        headerTitle='Наша компанія'
        headerSubtitle='Щось робимо'
      />
      <BreadCrumbs />
      <h2 className='default-content title mt-20'>About page</h2>
    </>
  );
}
