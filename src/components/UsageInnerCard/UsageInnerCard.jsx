export const UsageInnerCard = ({ image, title, description }) => {
  return (
    <div>
      <div className='relative pb-[80%]'>
        <img
          className='absolute left-0 top-0 h-full w-full object-cover'
          src={image}
          alt={title}
        />
      </div>
      <div className='p-8 bg-slate-600'>
        <h4 className='text-white text-xl mb-6'>{title}</h4>
        <p className='text-white'>{description}</p>
      </div>
    </div>
  );
};
