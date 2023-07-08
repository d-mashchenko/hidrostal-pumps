'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ClientCard } from '@/components/ClientCard/ClientCard';
import { clientsList } from '@/app/clients/page';
import { Button } from '@/components/Button/Button';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export const OurClients = () => {
  return (
    <section className='py-14'>
      <div className='default-content'>
        <div className='flex justify-between'>
          <h2 className='pb-10 text-5xl'>Наші клієнти</h2>
          <Button href='/clients' text='Дивитись всіх клієнтів' />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            el: '.clients-pagination',
          }}
          autoplay
          navigation>
          {clientsList.map((item, index) => (
            <SwiperSlide key={index}>
              <ClientCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='clients-pagination text-center py-1'>pagination</div>
      </div>
    </section>
  );
};
