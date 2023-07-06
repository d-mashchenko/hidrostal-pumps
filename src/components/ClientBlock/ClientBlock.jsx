'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const ClientBlock = ({ title, subtitle, description, photos }) => {
  return (
    <section className='section border-b-2'>
      <div>
        <h2 className='title'>{title}</h2>
        <Swiper
          className='mb-5'
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          pagination
          navigation>
          {photos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='relative pb-[80%]'>
                <img
                  className='absolute left-0 top-0 h-full w-full object-cover'
                  src={item}
                  alt={item}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <h4 className='text-3xl mb-3'>{subtitle}</h4>
        <p>{description}</p>
      </div>
    </section>
  );
};
