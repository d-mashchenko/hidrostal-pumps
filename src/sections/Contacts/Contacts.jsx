export const Contacts = () => {
  return (
    <section className='section'>
      <div className='default-content flex gap-20'>
        <img
          className='w-1/2'
          src='https://m.media-amazon.com/images/I/71IEAhBMS+L._AC_UY1100_.jpg'
          alt='docs'
        />
        <div className='text-xl flex flex-col gap-3'>
          <p>Київ вул. Якась, буд. 46</p>
          <p>+380501234567</p>
          <a>sergiystepanov228@gmail.com</a>
        </div>
      </div>
    </section>
  );
};
