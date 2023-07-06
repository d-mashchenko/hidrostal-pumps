import Link from 'next/link';

export const ProductCard = ({ image, title, description, id }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className='border border-gray-300 h-full'>
        <div className='relative pb-[80%]'>
          <img
            className='absolute left-0 top-0 h-full w-full object-cover'
            src={image}
            alt={title}
          />
        </div>
        <div className='p-4'>
          <h3 className='pb-2 text-xl'>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};
