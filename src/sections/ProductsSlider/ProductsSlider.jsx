'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import { productsList } from '@/data/data';

import 'swiper/css';
import 'swiper/css/navigation';
import './ProductsSlider.css';

export const ProductsSlider = () => {
  return (
    <section className='section'>
      <div className='default-content'>
        <h2 className='title'>Продукція hidrostal</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          pagination
          navigation>
          {productsList.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
