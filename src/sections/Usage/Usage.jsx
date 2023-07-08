import { UsageCard } from '@/components/UsageCard/UsageCard';

import { usageList } from '@/app/[sphere]/page';

export const Usage = () => {
  return (
    <section className='py-14 default-content'>
      <h2 className='text-5xl mb-10'>Сфери застосування</h2>
      <div className='grid grid-cols-4 gap-1'>
        {usageList.map((card) => (
          <UsageCard {...card} />
        ))}
      </div>
    </section>
  );
};
