const videoList = [
  {
    iframeLink: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    description:
      'Some descirption of video Some descirption of video Some descirption of video',
  },
  {
    iframeLink: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    description: 'Some descirption of video',
  },
  {
    iframeLink: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    description: 'Some descirption of video',
  },
  {
    iframeLink: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    description: 'Some descirption of video ',
  },
  {
    iframeLink: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    description: 'Some descirption of video Some descirption of video',
  },
  {
    iframeLink: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    description: 'Some descirption of video',
  },
];

export const VideoBlock = () => {
  return (
    <section className='section'>
      <div className='default-content'>
        <h2 className='title'>Видеообзоры оборудования Hidrostal</h2>
        <div className='grid grid-cols-3 gap-6'>
          {videoList.map((video) => (
            <div>
              <div className='relative overflow-hidden pt-[56.25%]'>
                <iframe
                  className='absolute left-0 top-0 h-full w-full'
                  src={video.iframeLink}></iframe>
              </div>
              <h4 className='mt-1'>{video.description}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
