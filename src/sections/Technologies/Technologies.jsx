import { TechCard } from '@/components/TechCard/TechCard';

export const Technologies = ({ technologiesList }) => {
  return (
    <section className='py-14 default-content'>
      <h2 className='text-5xl mb-10'>Технолгії Hidrostal</h2>
      <div className='grid grid-cols-4 gap-10 border-t-4 border-black pt-10'>
        {technologiesList.map((card) => (
          <TechCard {...card} />
        ))}
      </div>
    </section>
  );
};
