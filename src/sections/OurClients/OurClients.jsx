'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ClientCard } from '@/components/ClientCard/ClientCard';

import 'swiper/css';
import 'swiper/css/navigation';

export const OurClients = ({ clientsList }) => {
  return (
    <section className='py-14'>
      <div className='default-content'>
        <h2 className='pb-10 text-5xl'>Наші клієнти</h2>
        <Swiper modules={[Navigation]} slidesPerView={1} navigation>
          {clientsList.map((item, index) => (
            <SwiperSlide key={index}>
              <ClientCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
