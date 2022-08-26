import { NavLink } from 'react-router-dom';

const Animation = () => {
  return (
    <div>
      <h4 className="page-header mb-10">Animations</h4>
      <div className="flex justify-center gap-2">
        <NavLink to="/animation/hexagon">
          <button className="btn-primary">Hexagon</button>
        </NavLink>
        <NavLink to="/animation/hexagon-tailed">
          <button className="btn-primary">Hexagon Tailed</button>
        </NavLink>
        <NavLink to="/animation/flip-3d">
          <button className="btn-primary">3D Flip</button>
        </NavLink>
        <NavLink to="/animation/buttons">
          <button className="btn-primary">Animated Buttons</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Animation;
