export const ProductHero = ({
  headerImage,
  title,
  headerTitle,
  headerSubtitle,
}) => {
  return (
    <section>
      <div className='relative'>
        <img
          className='w-full object-cover h-[540px]'
          src={headerImage}
          alt={title}
        />
        <div className='absolute right-0 bottom-0 w-2/3 p-10 bg-primary-600 text-white rounded-t-lg'>
          <h3 className='text-4xl mb-6'>{headerTitle}</h3>
          <h5 className='text-lg'>{headerSubtitle}</h5>
        </div>
      </div>
    </section>
  );
};
