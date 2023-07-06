export const UsageCard = ({ title, description }) => {
  return (
    <div className='bg-[url("/img/blue-water.jpg")] py-12 px-6 border bg-cover'>
      <h3 className='text-white w-2/3 mb-5 text-xl backdrop-blur-md p-1'>
        {title}
      </h3>
      <p className='text-white w-2/3 backdrop-blur-md p-1'>{description}</p>
    </div>
  );
};
