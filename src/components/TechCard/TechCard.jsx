import { Button } from '../Button/Button';

export const TechCard = ({ title, description, id }) => {
  return (
    <div className='p-4 flex flex-col justify-between'>
      <div className='mb-4'>
        <h2 className='text-6xl text-primary-500 mb-10 italic'>{id}</h2>
        <h3 className='text-xl font-bold mb-5'>{title}</h3>
        <p>{description}</p>
      </div>
      <Button text='Lear more' href={`/technologies/${id}`} />
    </div>
  );
};
