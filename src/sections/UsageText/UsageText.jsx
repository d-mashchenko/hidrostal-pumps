export const UsageText = ({ title, strongText, text }) => {
  return (
    <section className='section'>
      <div className='default-content'>
        <h3 className='text-3xl text-primary-600 mb-5'>{title}</h3>
        <div className='flex gap-8'>
          <p className='text-primary-600 w-1/2 font-bold'>{strongText}</p>
          <p className='text-primary-600 w-1/2'>{text}</p>
        </div>
      </div>
    </section>
  );
};
