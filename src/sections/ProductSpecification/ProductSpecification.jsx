export const ProductSpecification = ({ specifications }) => {
  return (
    <section>
      <div className='relative'>
        <img
          className='w-full h-[540px] object-cover'
          src='https://www.sspumpsindia.com/frontend/images/main-slider/slider9/slide1.jpg'
          alt='img'
        />
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg  backdrop-blur p-5'>
          <h3 className='text-white text-4xl mb-6'>Specifications</h3>
          <ul>
            {specifications.map((item) => (
              <li className='text-white py-1 text-lg '>- {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
