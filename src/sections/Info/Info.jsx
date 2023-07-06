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
  {
    id: '2',
    image:
      'https://fluidpowerco.com.tw/en/wp-content/uploads/2019/05/Hidrostal01.jpg',
    title: 'The second',
    description: 'It is a long established fact that',
  },
  {
    id: '3',
    image:
      'https://axflow.imagevault.media/publishedmedia/1xp3atkhxpq64b6lezpn/Hidrostal_20160630_123640.jpg',
    title: 'The third',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page. It is a long established fact that a reader will be distracted by the readable content of a page',
  },
];

export const Info = () => {
  return (
    <section className='py-14 default-content'>
      <h2 className='text-5xl mb-10'>Додадкова інформація</h2>
      <div className='grid grid-cols-3 gap-3'>
        {infoCardList.map((card) => (
          <InfoCard {...card} />
        ))}
      </div>
    </section>
  );
};
