import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <motion.div
      className="flex font-serif justify-center items-center h-[100vh] text-white bg-primary-main"
      // initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <ul className="text-center text-3xl m-0 ">
        {links.map(({ path, label }) => (
          <li key={label} className="py-4 text-white">
            <NavLink to={path}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Home;
