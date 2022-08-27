import { NavLink } from 'react-router-dom';

const Animation = () => {
  return (
    <div>
      <h4 className="page-header mb-10">Animations</h4>
      <div className="flex justify-center gap-2 flex-wrap w-[600px] mx-auto gap-3">
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
        <NavLink to="/animation/glowing-cards">
          <button className="btn-primary">Glowing Cards</button>
        </NavLink>
        <NavLink to="/animation/scrolling-text">
          <button className="btn-primary">Auto Scrolling Text</button>
        </NavLink>
        <NavLink to="/animation/spinner">
          <button className="btn-primary">Spinners</button>
        </NavLink>
        <NavLink to="/animation/cursor-circle">
          <button className="btn-primary">Cursor Circle</button>
        </NavLink>
        <NavLink to="/animation/navbar-3d">
          <button className="btn-primary">3D Navbar</button>
        </NavLink>
        <NavLink to="/animation/seesaw">
          <button className="btn-primary">Seesaw</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Animation;
