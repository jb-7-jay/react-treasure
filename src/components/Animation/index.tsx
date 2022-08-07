// import { Route, Routes } from 'react-router-dom';
// import Hexagon from './Hexagon';
// import HexagonTailed from './HexagonTailed';
import { NavLink } from 'react-router-dom';

const Animation = () => {
  return (
    <div>
      Animation
      <NavLink to="/animation/hexagon">
        <button className="btn-primary block m-2">Hexagon</button>
      </NavLink>
      <NavLink to="/animation/hexagon-tailed">
        <button className="btn-primary block m-2">Hexagon Tailed</button>
      </NavLink>
    </div>
  );
};

export default Animation;
