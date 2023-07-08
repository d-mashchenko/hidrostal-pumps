import { Hero } from '@/sections/Hero/Hero';
import { Info } from '@/sections/Info/Info';
import { OurClients } from '@/sections/OurClients/OurClients';
import { ProductsSlider } from '@/sections/ProductsSlider/ProductsSlider';
import { Technologies } from '@/sections/Technologies/Technologies';
import { Usage } from '@/sections/Usage/Usage';

import { technologiesList } from './technologies/page';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSlider />
      <Technologies technologiesList={technologiesList} />
      <OurClients />
      <Usage />
      <Info />
    </>
  );
}
