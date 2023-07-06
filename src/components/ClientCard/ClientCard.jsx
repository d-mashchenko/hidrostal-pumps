export const ClientCard = ({ src, title, description }) => {
  return (
    <div className='border border-gray-300 flex'>
      <div className='relative pb-[35%] w-1/2'>
        <img
          className='absolute left-0 top-0 h-full w-full object-cover'
          src={src}
          alt={title}
        />
      </div>
      <div className='p-4 w-1/2 flex flex-col justify-center'>
        <h3 className='pb-10 text-xl'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
