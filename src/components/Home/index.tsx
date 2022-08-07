import { NavLink } from 'react-router-dom';

const links = [
  {
    path: '/animation',
    label: 'Animations',
  },
  {
    path: '/custom-table',
    label: 'Custom Table with Cell Renderer',
  },
  {
    path: '/todos',
    label: 'Redux Toolkit',
  },
];

const Home = () => {
  return (
    <div className="flex font-serif justify-center items-center h-[100vh] text-white bg-primary-main">
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
