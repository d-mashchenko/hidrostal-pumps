import Link from 'next/link';

import './UsageCard.css';

export const UsageCard = ({ title, description, sphere }) => {
  return (
    <Link href={sphere}>
      <div className='UsageCard bg-[url("/img/blue-water.jpg")] py-12 px-6 border bg-cover duration-1000'>
        <h3 className='UsageCard__title text-white w-2/3 mb-5 text-xl backdrop-blur-md p-1'>
          {title}
        </h3>
        <p className='UsageCard__description text-white w-2/3 backdrop-blur-md p-1'>
          {description}
        </p>
      </div>
    </Link>
  );
};
