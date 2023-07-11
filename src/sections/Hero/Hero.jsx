'use client';

import Image from 'next/image';

import './Hero.css';

export function Hero() {
  const scrollHandler = () => {
    const screenHeight = window.innerHeight;
    window.scrollTo({ top: screenHeight, behavior: 'smooth' });
  };

  return (
    <section className='w-full relative'>
      <video
        className='w-full h-screen object-cover'
        muted
        autoPlay
        playsInline
        loop>
        <source src='/videos/video.mp4' type='video/mp4'></source>
      </video>
      <div className='absolute default-content left-1/2 -translate-x-1/2 bottom-[15%] flex'>
        <button
          onClick={scrollHandler}
          className='Hero__button text-white backdrop-blur-sm bg-primary-600 p-4 flex flex-col items-center rounded-md font-bold ml-auto hover:bg-primary-500 duration-300'>
          Дізнатись більше
          <Image
            className='Hero__arrow'
            src='/img/arrow-down.png'
            alt='arrow'
            width={50}
            height={50}
          />
        </button>
      </div>
    </section>
  );
}
