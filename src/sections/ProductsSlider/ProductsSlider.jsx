'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import { Button } from '@/components/Button/Button';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './ProductsSlider.css';

export const ProductsSlider = ({ productsList }) => {
  return (
    <section className='section'>
      <div className='default-content'>
        <div className='flex justify-between'>
          <h2 className='title'>Продукція hidrostal</h2>
          <Button href='/products' text='Дивитись всю продукцію' />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            el: '.products-pagination',
          }}
          loop
          autoplay={{
            pauseOnMouseEnter: true,
          }}
          navigation>
          {productsList.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='products-pagination text-center py-1'></div>
      </div>
    </section>
  );
};
