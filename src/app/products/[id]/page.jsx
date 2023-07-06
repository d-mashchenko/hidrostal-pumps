const productList = [
  {
    src: 'https://www.hidrostal.com/Pictures/Bilder/SpaltenBoxen_97/Thumb/end-suction-bearing-frame-pumps.jpg',
    title: 'The first pump',
    description: 'Some dedcription of the first pump',
  },
  {
    src: 'https://www.hidrostal.com/Pictures/Bilder/SpaltenBoxen_94/Thumb/compact-pump.jpg',
    title: 'The second pump',
    description: 'Some dedcription of the second pump',
  },
  {
    src: 'https://www.hidrostal.com/Pictures/Bilder/SpaltenBoxen_97/Thumb/end-suction-bearing-frame-pumps.jpg',
    title: 'The third pump',
    description: 'Some dedcription of the third pump',
  },
  {
    src: 'https://www.hidrostal.com/Pictures/Bilder/SpaltenBoxen_94/Thumb/compact-pump.jpg',
    title: 'The fourth pump',
    description: 'Some dedcription of the fourth pump',
  },
  {
    src: 'https://www.hidrostal.com/Pictures/Bilder/SpaltenBoxen_97/Thumb/end-suction-bearing-frame-pumps.jpg',
    title: 'The fivth pump',
    description: 'Some dedcription of the fivth pump',
  },
  {
    src: 'https://www.hidrostal.com/Pictures/Bilder/SpaltenBoxen_94/Thumb/compact-pump.jpg',
    title: 'The sixth pump',
    description: 'Some dedcription of the sixth pump',
  },
];

export default function Product({ params }) {
  return (
    <>
      <h2 className='text-5xl'>Separate product page id: {params.id}</h2>
    </>
  );
}
