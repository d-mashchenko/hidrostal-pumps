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
  const [isActive, setIsActive] = useState(false);

  const listenScrollEvent = () => {
    const screenHeight = window.innerHeight;
    if (window.scrollY >= screenHeight) {
      setScrollFirstBlock(true);
    } else {
      setScrollFirstBlock(false);
    }
  };

  const toggleActiveClassHandler = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

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
        <div
          onClick={toggleActiveClassHandler}
          className={`Header__menu-button ${isActive ? 'active' : ''}`}>
          <span></span>
        </div>
        <div className={`Header__menu-wrapper ${isActive ? 'active' : ''} `}>
          <Link onClick={toggleActiveClassHandler} href='/'>
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
                    onClick={toggleActiveClassHandler}
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
