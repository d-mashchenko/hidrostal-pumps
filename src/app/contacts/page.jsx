import { Contacts } from '@/sections/Contacts/Contacts';
import { ProductHero } from '@/sections/ProductHero/ProductHero';

export default function Products() {
  return (
    <>
      <ProductHero
        headerImage='https://static.vecteezy.com/system/resources/previews/007/721/801/original/polygonal-ukraine-map-low-poly-design-map-made-of-triangles-on-white-background-geometric-rumpled-triangular-low-poly-style-gradient-graphic-line-dots-ui-design-free-vector.jpg'
        title='ukraine'
        headerTitle='Контакти'
        headerSubtitle='Працюємо по всій Україні'
      />
      <Contacts />
    </>
  );
}
