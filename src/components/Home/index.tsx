import { NavLink } from 'react-router-dom';

const links = [
  {
    path: '/',
    label: 'Design - Flex Box',
  },
  {
    path: '/',
    label: 'Design - Grid',
  },
  {
    path: '/custom-table',
    label: 'Custom Table',
  },
  {
    path: '/todos',
    label: 'Redux Toolkit',
  },
  {
    path: '/',
    label: 'Chat Application',
  },
  {
    path: '/',
    label: 'Video Application',
  },
];

const Home = () => {
  return (
    <div className="flex font-serif justify-center items-center h-[100vh] text-white bg-primary-light">
      <ul className="text-center text-3xl m-0 ">
        {links.map(({ path, label }) => (
          <li key={label} className="py-4 text-white">
            <NavLink to={path}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
