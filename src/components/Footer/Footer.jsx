import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='bg-primary-500 py-3'>
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
        <div className='flex gap-5 justify-center'>
          <Link className=' text-white' href='#'>
            О нас
          </Link>
          <Link className=' text-white' href='#'>
            Контакты
          </Link>
          <Link className=' text-white' href='#'>
            Документы
          </Link>
          <Link className=' text-white' href='#'>
            Каталог
          </Link>
          <Link className=' text-white' href='#'>
            Проекты
          </Link>
        </div>
        <h6 className='text-center text-xs text-white'>
          INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By:
          Mahesh
        </h6>
      </div>
    </footer>
  );
}
