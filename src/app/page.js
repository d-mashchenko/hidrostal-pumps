import { Hero } from '@/sections/Hero/Hero';
import { Info } from '@/sections/Info/Info';
import { OurClients } from '@/sections/OurClients/OurClients';
import { ProductsSlider } from '@/sections/ProductsSlider/ProductsSlider';
import { Technologies } from '@/sections/Technologies/Technologies';
import { Usage } from '@/sections/Usage/Usage';

const productList = [
  {
    src: 'https://www.hidrostal.com/Pictures/Bilder/SpaltenBoxen_97/Thumb/end-suction-bearing-frame-pumps.jpg',
    title: 'The first pump',
    description: 'Some dedcription of the first pump',
  },
  {
    src: 'https://www.hidrostal.com/Pictures/Bilder/SpaltenBoxen_94/Thumb/compact-pump.jpg',
    title: 'The second pump',
    description: 'Some dedcription of the second pump',
  },
  {
    src: 'https://www.hidrostal.com/Pictures/Bilder/SpaltenBoxen_97/Thumb/end-suction-bearing-frame-pumps.jpg',
    title: 'The third pump',
    description: 'Some dedcription of the third pump',
  },
  {
    src: 'https://www.hidrostal.com/Pictures/Bilder/SpaltenBoxen_94/Thumb/compact-pump.jpg',
    title: 'The fourth pump',
    description: 'Some dedcription of the fourth pump',
  },
  {
    src: 'https://www.hidrostal.com/Pictures/Bilder/SpaltenBoxen_97/Thumb/end-suction-bearing-frame-pumps.jpg',
    title: 'The fivth pump',
    description: 'Some dedcription of the fivth pump',
  },
  {
    src: 'https://www.hidrostal.com/Pictures/Bilder/SpaltenBoxen_94/Thumb/compact-pump.jpg',
    title: 'The sixth pump',
    description: 'Some dedcription of the sixth pump',
  },
];

const clientsList = [
  {
    src: 'https://photocdn.photogoroda.com/source2/cn9908/r10535/c10550/26187559.jpg?v=20171213112136',
    title: 'The first client',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  },
  {
    src: 'https://photocdn.photogoroda.com/source2/cn9908/r10535/c10550/26187559.jpg?v=20171213112136',
    title: 'The second client',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  },
  {
    src: 'https://photocdn.photogoroda.com/source2/cn9908/r10535/c10550/26187559.jpg?v=20171213112136',
    title: 'The third client',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSlider productsList={productList} />
      <OurClients clientsList={clientsList} />
      <Usage />
      <Info />
      <Technologies />
    </>
  );
}
