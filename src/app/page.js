import { Hero } from '@/sections/Hero/Hero';
import { Info } from '@/sections/Info/Info';
import { OurClients } from '@/sections/OurClients/OurClients';
import { ProductsSlider } from '@/sections/ProductsSlider/ProductsSlider';
import { Technologies } from '@/sections/Technologies/Technologies';
import { Usage } from '@/sections/Usage/Usage';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSlider />
      <OurClients />
      <Usage />
      <Info />
      <Technologies />
    </>
  );
}
