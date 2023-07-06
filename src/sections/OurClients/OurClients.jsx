'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ClientCard } from '@/components/ClientCard/ClientCard';
import Link from 'next/link';
import { clientsList } from '@/app/clients/page';

import 'swiper/css';
import 'swiper/css/navigation';

export const OurClients = () => {
  return (
    <section className='py-14'>
      <div className='default-content'>
        <div className='flex justify-between'>
          <h2 className='pb-10 text-5xl'>Наші клієнти</h2>
          <Link
            className='bg-primary-500 py-3 px-4 text-white rounded self-start'
            href='/clients'>
            Дивитись всіх клієнтів
          </Link>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          pagination
          navigation>
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
