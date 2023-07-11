import Link from 'next/link';

import './ProductCard.css';

export const ProductCard = ({ image, title, description, id }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className='ProductCard border border-gray-300 h-full hover:border-primary-600 duration-300 relative'>
        <div className='relative pb-[80%]'>
          <img
            className='absolute left-0 top-0 h-full w-full object-cover'
            src={image}
            alt={title}
          />
        </div>
        <div className='p-4'>
          <h3 className='title title--sm'>{title}</h3>
          <p className='base-text'>{description}</p>
        </div>
      </div>
    </Link>
  );
};
