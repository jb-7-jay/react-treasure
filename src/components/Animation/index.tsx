import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const routeButtons = [
  { to: 'hexagon', label: 'Hexagon' },
  { to: 'hexagon-tailed', label: 'Hexagon Tailed' },
  { to: 'flip-3d', label: '3D Flip' },
  { to: 'buttons', label: 'Animated Buttons' },
  { to: 'glowing-cards', label: 'Glowing Cards' },
  { to: 'scrolling-text', label: 'Auto Scrolling Text' },
  { to: 'spinner', label: 'Spinners' },
  { to: 'navbar-3d', label: '3D Navbar' },
  { to: 'seesaw', label: 'Seesaw' },
  { to: 'framer-motion', label: 'Framer Motion', dark: true },
];

const Animation = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100%', transition: { duration: 0.3 } }}
      transition={{ duration: 0.3 }}
    >
      <h4 className="page-header mb-10">Animations</h4>
      <div className="flex justify-center gap-2 flex-wrap w-[600px] mx-auto gap-3">
        {routeButtons.map(({ to, label, dark }, index) => (
          <NavLink to={`/animation/${to}`} key={index}>
            <button className={classNames('btn-primary', { 'bg-primary-main': dark })}>
              {label}
            </button>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

export default Animation;
