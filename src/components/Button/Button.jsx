import Link from 'next/link';

export const Button = ({ text, href, utilityClasses }) => {
  return (
    <Link
      href={href}
      className={`text-white py-3 px-4 rounded bg-primary-600 hover:bg-primary-500 duration-300 self-start ${
        utilityClasses ? utilityClasses : ''
      } `}>
      {text}
    </Link>
  );
};
