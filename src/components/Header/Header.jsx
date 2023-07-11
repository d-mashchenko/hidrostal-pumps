'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import './Header.css';

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
  const [scrollFirstBlock, setScrollFirstBlock] = useState(false);

  const listenScrollEvent = (event) => {
    const screenHeight = window.innerHeight;
    if (window.scrollY >= screenHeight) {
      setScrollFirstBlock(true);
    } else {
      setScrollFirstBlock(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const toggleActiveClassHandler = () => {
    const button = document.querySelector('.Header__menu-button');
    const headerMenu = document.querySelector('.Header__menu-wrapper');
    const blanket = document.querySelector('.blanket');

    button.classList.contains('active')
      ? button.classList.remove('active')
      : button.classList.add('active');

    headerMenu.classList.contains('active')
      ? headerMenu.classList.remove('active')
      : headerMenu.classList.add('active');

    headerMenu.classList.contains('active')
      ? blanket.classList.add('active')
      : blanket.classList.remove('active');

    blanket.addEventListener('click', removeActiveClassHandler);
  };

  const removeActiveClassHandler = () => {
    const button = document.querySelector('.Header__menu-button');
    const headerMenu = document.querySelector('.Header__menu-wrapper');
    const blanket = document.querySelector('.blanket');

    button.classList.remove('active');
    headerMenu.classList.remove('active');
    blanket.classList.remove('active');
  };

  return (
    <header
      className={`Header  ${
        pathname === '/' && !scrollFirstBlock
          ? 'bg-transparent'
          : 'bg-primary-600'
      }`}>
      <div className='Header__container default-content'>
        <Link href='/'>
          <Image src='/img/logo-white.png' alt='logo' width={180} height={40} />
        </Link>
        <div onClick={toggleActiveClassHandler} className='Header__menu-button'>
          <span></span>
        </div>
        <div className='Header__menu-wrapper'>
          <Link onClick={removeActiveClassHandler} href='/'>
            <Image
              className='Header__logo'
              src='/img/logo-white.png'
              alt='logo'
              width={180}
              height={40}
            />
          </Link>
          <ul className='Header__menu'>
            {links.map((link, index) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <li key={index}>
                  <Link
                    className={`font-bold text-white hover:underline ${
                      isActive ? 'underline' : ''
                    }`}
                    onClick={removeActiveClassHandler}
                    href={link.href}>
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
