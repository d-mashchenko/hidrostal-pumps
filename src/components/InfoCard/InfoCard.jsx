import Link from 'next/link';

export const InfoCard = ({ image, title, description, id }) => {
  return (
    <Link href={`products/${id}`}>
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
        <button className='bg-primary-500 rounded py-2 px-3 text-white text-sm self-start ml-4 mb-4'>
          Read more
        </button>
      </div>
    </Link>
  );
};
