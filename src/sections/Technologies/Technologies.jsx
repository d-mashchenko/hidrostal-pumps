import { TechCard } from '@/components/TechCard/TechCard';

const infoCardList = [
  {
    title: 'The first',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page',
  },
  {
    title: 'The second',
    description: 'It is a long established fact that',
  },
  {
    title: 'The third',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page. It is a long established fact that a reader will be distracted by the readable content of a page',
  },
  {
    title: 'The fourth',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page. It is a long established fact that a reader will be distracted by the readable content of a page',
  },
];

export const Technologies = () => {
  return (
    <section className='py-14 default-content'>
      <h2 className='text-5xl mb-10'>Технолгії Hidrostal</h2>
      <div className='grid grid-cols-4 gap-5 border-t-4 border-black pt-10'>
        {infoCardList.map((card, index) => (
          <TechCard {...card} number={++index} />
        ))}
      </div>
    </section>
  );
};
