'use client';

import Breadcrumbs from '@marketsystems/nextjs13-appdir-breadcrumbs';
import './BreadCrumbs.css';
import HomeIcon from '../../../public/icons/home.svg';
import Link from 'next/link';

const transliteration = {
  about: 'Компанія Hidrostal',
  products: 'Каталог',
  clients: 'Клієнти',
  technologies: 'Технології',
  video: 'Видео',
  service: 'Сервіс',
  contacts: 'Контакти',
};

export const BreadCrumbs = () => {
  return (
    <>
      <div className='default-content flex items-center gap-2 py-5'>
        <Link href='/'>
          <HomeIcon className='fill-gray-400 hover:fill-primary-600 duration-300' />
        </Link>
        <span className='text-lg'>/ </span>
        <Breadcrumbs
          listClassName='breadcumbs__list'
          activeItemClassName='breadcumbs__item breadcumbs__item--active'
          inactiveItemClassName='breadcumbs__item breadcumbs__item--inactive'
          omitRootLabel
          transformLabel={(title) => {
            if (transliteration[title]) return transliteration[title];
            return title;
          }}
        />
      </div>
    </>
  );
};
