import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { ProductHero } from '@/sections/ProductHero/ProductHero';
import { VideoBlock } from '@/sections/VideoBLock/VideoBlock';

export default function Video() {
  return (
    <>
      <ProductHero
        headerImage='https://i.ytimg.com/vi/FjMDemnQD_U/hq720.jpg'
        title='video'
        headerTitle='Відео'
        headerSubtitle='Щось знімаємо'
      />
      <BreadCrumbs />
      <VideoBlock />
    </>
  );
}
