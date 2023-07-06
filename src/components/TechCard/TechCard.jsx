export const TechCard = ({ title, description, number }) => {
  return (
    <div className='p-4'>
      <h2 className='text-6xl text-primary-500 mb-10 italic'>{number}</h2>
      <h3 className='text-xl font-bold mb-5'>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
