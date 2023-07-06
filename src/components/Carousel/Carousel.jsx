'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

export const Carousel = ({ pumpsList }) => {
  return (
    <Swiper
      className='default-content'
      modules={[Navigation, Scrollbar]}
      slidesPerView={2}
      spaceBetween={50}
      scrollbar={{ draggable: true }}
      navigation>
      {pumpsList.map((pump, index) => (
        <SwiperSlide key={index}>
          <Image
            className='w-full  object-cover'
            src={pump.source}
            alt={pump.describe}
            width={640}
            height={380}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
