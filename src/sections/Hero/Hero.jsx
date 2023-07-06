'use client';

import Image from 'next/image';

export function Hero() {
  const scrollHandler = () => {
    const screenHeight = window.innerHeight;
    window.scrollTo({ top: screenHeight, behavior: 'smooth' });
  };

  return (
    <section className='w-full relative'>
      <video
        className='w-full h-[90vh] object-cover'
        muted
        autoPlay
        playsInline
        loop>
        <source src='/videos/video.mp4' type='video/mp4'></source>
      </video>
      <div className='absolute default-content flex items-center justify-between left-1/2 -translate-x-1/2 bottom-[10%]'>
        <h2 className=' max-w-xl text-3xl font-bold text-white uppercase backdrop-blur-sm bg-primary-500/70 p-4 rounded-md'>
          Насосное оборудование и технологии перекачивания
        </h2>
        <button
          onClick={scrollHandler}
          className='text-white backdrop-blur-sm bg-primary-500/70 p-4 flex flex-col items-center rounded-md font-bold'>
          Узнать больше
          <Image src='/img/arrow-down.png' alt='arrow' width={50} height={50} />
        </button>
      </div>
    </section>
  );
}
