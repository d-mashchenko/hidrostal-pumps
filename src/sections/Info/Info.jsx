import { InfoCard } from '@/components/InfoCard/InfoCard';

const infoCardList = [
  {
    id: '1',
    image:
      'https://www.hidrostal.com/Pictures/Bilder/SpaltenBoxen_65/hinlnetherlands-rwzidenbosch-returnactivatedsludge-h12klagerstuhlpumpenhorizontal-hidrostal28092021-0749.jpg',
    title: 'The first',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page',
  },
];

export const Info = () => {
  return (
    <section className='py-14 default-content'>
      <div className='grid grid-cols-3 gap-3'>
        {infoCardList.map((card) => (
          <InfoCard {...card} />
        ))}
      </div>
    </section>
  );
};
