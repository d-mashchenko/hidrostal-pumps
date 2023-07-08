export const ProductContent = ({
  image,
  title,
  contentTitle,
  contentContent,
  highlights,
  applications,
}) => {
  return (
    <section>
      <div className='default-content py-14 flex gap-8'>
        <img className='w-1/3 object-cover h-[400px]' src={image} alt={title} />
        <div>
          <h3 className='text-4xl mb-12 text-primary-600'>{contentTitle}</h3>
          <div className='flex flex-col gap-7'>
            {contentContent.map((item) => (
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
              {highlights.map((item) => (
                <li className='py-1'>- {item}</li>
              ))}
            </ul>
          </div>
          <div className='my-5'>
            <h4 className='text-2xl mb-3 text-primary-600'>Applications</h4>
            <ul>
              {applications.map((item) => (
                <li className='py-1'>- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
