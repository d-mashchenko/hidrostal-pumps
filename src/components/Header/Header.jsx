'use client';

import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

const links = [
  {
    title: 'Компанія Hidrostal',
    href: '/about',
  },
  {
    title: 'Каталог',
    href: '/products',
  },
  {
    title: 'Наші клієнти',
    href: '/clients',
  },
  {
    title: 'Технолгії Hidrostal',
    href: '/technologies',
  },
  {
    title: 'Відео',
    href: '/video',
  },
  {
    title: 'Сервіс',
    href: '/service',
  },
  {
    title: 'Контакти',
    href: '/contacts',
  },
];

export function Header() {
  const pathname = usePathname();

  const homePageClasses =
    'absolute z-10 w-full hover:backdrop-blur-sm hover:bg-primary-600/30';
  const anyPageClasses = 'bg-primary-600';

  return (
    <header
      className={`py-1 duration-300 ${
        pathname === '/' ? homePageClasses : anyPageClasses
      }`}>
      <div className='default-content flex items-center justify-between'>
        <Link href='/'>
          <Image src='/img/logo-white.png' alt='logo' width={220} height={50} />
        </Link>
        <ul className='flex gap-6'>
          {links.map((link, index) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={index}>
                <Link
                  className={`font-bold text-white hover:underline ${
                    isActive ? 'underline' : ''
                  }`}
                  href={link.href}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
