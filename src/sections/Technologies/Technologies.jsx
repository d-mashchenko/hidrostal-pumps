import { TechCard } from '@/components/TechCard/TechCard';

export const Technologies = ({ technologiesList }) => {
  return (
    <section className='section default-content'>
      <h2 className='title'>Технолгії Hidrostal</h2>
      <div className='grid grid-cols-4 gap-10 border-t-4 border-black pt-10'>
        {technologiesList.map((card) => (
          <TechCard {...card} />
        ))}
      </div>
    </section>
  );
};
