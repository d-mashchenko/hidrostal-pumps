'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProductCard } from '@/components/ProductCard/ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';
import './ProductsSlider.css';

export const ProductsSlider = ({ productsList }) => {
  return (
    <section className='py-14'>
      <div className='default-content'>
        <h2 className='pb-10 text-5xl'>Продукти hidrostal</h2>
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          navigation>
          {productsList.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
