import { UsageCard } from '@/components/UsageCard/UsageCard';

const usageCardList = [
  {
    title: 'The first',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page. It is a long established fact that a reader will be distracted by the readable content of a page. It is a long established fact that a reader will be distracted by the readable content of a page',
  },
  {
    title: 'The second',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page',
  },
  {
    title: 'The third',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page. It is a long established fact that a reader will be distracted by the readable content of a page',
  },
  {
    title: 'The fourth',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page',
  },
];

export const Usage = () => {
  return (
    <section className='py-14 default-content'>
      <h2 className='text-5xl mb-10'>Сфери застосування</h2>
      <div className='grid grid-cols-4 gap-1'>
        {usageCardList.map((card) => (
          <UsageCard {...card} />
        ))}
      </div>
    </section>
  );
};
