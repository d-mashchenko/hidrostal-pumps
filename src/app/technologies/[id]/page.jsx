import { ProductContent } from '@/sections/ProductContent/ProductContent';
import { ProductHero } from '@/sections/ProductHero/ProductHero';
import { ProductSpecification } from '@/sections/ProductSpecification/ProductSpecification';

import { technologiesList } from '../page';
import { TechDescription } from '@/sections/TechDescription/TechDescription';

export default function Products({ params }) {
  const currentTechnology = technologiesList.find((tech) => {
    return tech.id === params.id;
  });

  return (
    <>
      <ProductHero {...currentTechnology} />
      <ProductContent {...currentTechnology} />
      <ProductSpecification {...currentTechnology} />
      <TechDescription {...currentTechnology} />
    </>
  );
}
