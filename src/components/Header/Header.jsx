import Image from 'next/image';
import Link from 'next/link';

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
];

const additionalLinks = [
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
  return (
    <header className='bg-primary-500 py-2'>
      <div className='default-content flex items-center justify-between'>
        <div className=' flex items-center gap-5'>
          <Link href='/'>
            <Image
              src='/img/logo-white.png'
              alt='logo'
              width={220}
              height={50}
            />
          </Link>
          <ul className='flex gap-6'>
            {links.map((link) => (
              <li>
                <Link className='font-bold text-white' href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className='flex gap-6'>
          {additionalLinks.map((link) => (
            <li>
              <Link className='font-bold text-white' href={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
