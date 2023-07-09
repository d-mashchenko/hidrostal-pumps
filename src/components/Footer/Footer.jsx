import Link from 'next/link';

import InstagramIcon from '../../../public/icons/instagram.svg';
import FacebookIcon from '../../../public/icons/facebook.svg';
import TelegramIcon from '../../../public/icons/telegram.svg';

const footerLinks = [
  {
    title: 'Компанія Hidrostal',
    href: '/about',
  },
  {
    title: 'Контакти',
    href: '/contacts',
  },
  {
    title: 'Відео',
    href: '/video',
  },
  {
    title: 'Каталог',
    href: '/products',
  },
  {
    title: 'Наші клієнти',
    href: '/clients',
  },
];

export function Footer() {
  return (
    <footer className='bg-primary-600 py-3'>
      <div className='default-content flex flex-col gap-3'>
        <div className='flex gap-5 justify-center'>
          <FacebookIcon
            className=' fill-gray-300 hover:fill-white duration-300'
            width={30}
            height={30}
          />
          <InstagramIcon
            className='fill-gray-300 hover:fill-white duration-300'
            width={30}
            height={30}
          />
          <TelegramIcon
            className='fill-gray-300 hover:fill-white duration-300'
            width={30}
            height={30}
          />
        </div>
        <ul className='flex gap-5 justify-center text-white'>
          {footerLinks.map((link) => (
            <li>
              <Link className='hover:underline' href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <h6 className='text-center text-xs text-white'>
          INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By:
          Mahesh
        </h6>
      </div>
    </footer>
  );
}
