export const ClientCard = ({ src, title }) => {
  return (
    <div className='border border-gray-300'>
      <div className='relative pb-[80%]'>
        <img
          className='absolute left-0 top-0 h-full w-full object-cover'
          src={src}
          alt={title}
        />
      </div>
    </div>
  );
};
