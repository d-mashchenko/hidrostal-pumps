import Image from 'next/image';
import Link from 'next/link';

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
          <Image
            src='/icons/facebook.svg'
            alt='facebook'
            width={30}
            height={30}
          />
          <Image
            src='/icons/instagram.svg'
            alt='instagram'
            width={30}
            height={30}
          />
          <Image
            src='/icons/telegram.svg'
            alt='telegram'
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
