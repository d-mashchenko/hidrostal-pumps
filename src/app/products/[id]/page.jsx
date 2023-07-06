import { productsList } from '@/data/data';

export default function Product({ params }) {
  const currentProduct = productsList.find((product) => {
    return product.id === params.id;
  });

  return (
    <div>
      <div className='relative'>
        <img
          className='w-full object-cover h-[540px]'
          src={currentProduct.headerImage}
          alt={currentProduct.title}
        />
        <div className='absolute right-0 bottom-0 w-2/3 p-10 bg-primary-600 text-white rounded-t-lg'>
          <h3 className='text-4xl mb-6'>{currentProduct.headerTitle}</h3>
          <h5 className='text-lg'>{currentProduct.headerSubtitle}</h5>
        </div>
      </div>

      <div className='default-content py-14'>
        <div className='flex gap-8'>
          <img
            className='w-1/3 object-cover h-[400px]'
            src={currentProduct.image}
            alt={currentProduct.title}
          />
          <div>
            <h3 className='text-4xl mb-12 text-primary-600'>
              {currentProduct.contentTitle}
            </h3>
            <div className='flex flex-col gap-7'>
              {currentProduct.contentContent.map((item) => (
                <div>
                  <h4 className='text-2xl mb-5 text-primary-600'>
                    {item.heading}
                  </h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className='my-5'>
              <h4 className='text-2xl mb-3 text-primary-600'>Highlights</h4>
              <ul>
                {currentProduct.highlights.map((product) => (
                  <li className='py-1'>- {product.title}</li>
                ))}
              </ul>
            </div>
            <div className='my-5'>
              <h4 className='text-2xl mb-3 text-primary-600'>Applications</h4>
              <ul>
                {currentProduct.applications.map((product) => (
                  <li className='py-1'>- {product.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='relative'>
        <img
          className='w-full h-[540px]'
          src='https://www.sspumpsindia.com/frontend/images/main-slider/slider9/slide1.jpg'
          alt='img'
        />
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg  backdrop-blur p-5'>
          <h3 className='text-white text-4xl mb-6'>Specifications</h3>
          <ul>
            {currentProduct.specifications.map((item) => (
              <li className='text-white py-1 text-lg '>- {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
