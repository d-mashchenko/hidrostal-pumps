import { Button } from '../Button/Button';

export const InfoCard = ({ image, title, description, id }) => {
  return (
    <div className='border border-gray-300 h-full flex flex-col'>
      <div className='relative pb-[60%]'>
        <img
          className='absolute left-0 top-0 h-full w-full object-cover'
          src={image}
          alt={title}
        />
      </div>
      <div className='flex flex-col gap-4 items-start p-4 flex-auto'>
        <h3 className='pb-2 text-xl text-primary-600'>{title}</h3>
        <p>{description}</p>
      </div>
      <Button text='Learn more' href='/products' utilityClasses='mb-4 ml-4' />
    </div>
  );
};
