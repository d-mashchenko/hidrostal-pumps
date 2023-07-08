import React from 'react';

export const TechDescription = ({ technologies }) => {
  return (
    <section className='section'>
      <div className='default-content '>
        <div className=' max-w-3xl text-center mx-auto mb-10'>
          <h3 className='text-4xl text-primary-600 mb-5'>
            {technologies.title}
          </h3>
          <p className='text-lg font-bold'>{technologies.subtitle}</p>
        </div>
        <div className='flex gap-8'>
          <video className='w-1/2' muted autoPlay playsInline loop>
            <source src={technologies.video} type='video/mp4'></source>
          </video>
          <div>
            <div className='my-5'>
              <h4 className='text-2xl mb-3 text-primary-600'>
                {technologies.heading}
              </h4>
              <p>{technologies.text}</p>
            </div>
            <div className='my-5'>
              <h4 className='text-2xl mb-3 text-primary-600'>Application</h4>
              <ul>
                {technologies.applications.map((item) => (
                  <li>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
