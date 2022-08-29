import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Todos from '../components/Todos';
import Todo from '../components/Todos/Todo';
import HexagonTailed from '../components/Animation/HexagonTailed';
import Hexagon from '../components/Animation/Hexagon';
import UserTable from '../components/UserTable';
import Animation from '../components/Animation';
import Flip3D from '../components/Animation/Flip3D';
import AnimatedButtons from '../components/Animation/AnimatedButtons';
import GlowingCards from '../components/Animation/GlowingCards';
import ScrollingText from '../components/Animation/ScrollingText';
import Spinner from '../components/Animation/Spinner';
import CursorCircle from '../components/Animation/CursorCircle';
import Navbar3D from '../components/Animation/Navbar3D';
import Seesaw from '../components/Animation/Seesaw';
import FramerMotion from '../components/Animation/FramerMotion';

const AppRoutes = () => {
  const publicRoutes = (
    <>
      <Route path="/" element={<Home />} />
      <Route path="todos" element={<Todos />} />
      <Route path="/todos/:id" element={<Todo />} />
      <Route path="/animation/hexagon" element={<Hexagon />} />
      <Route path="/custom-table" element={<UserTable />} />
      <Route path="/animation" element={<Animation />} />
      <Route path="/animation/hexagon-tailed" element={<HexagonTailed />} />
      <Route path="/animation/flip-3d" element={<Flip3D />} />
      <Route path="/animation/buttons" element={<AnimatedButtons />} />
      <Route path="/animation/glowing-cards" element={<GlowingCards />} />
      <Route path="/animation/scrolling-text" element={<ScrollingText />} />
      <Route path="/animation/spinner" element={<Spinner />} />
      <Route path="/animation/cursor-circle" element={<CursorCircle />} />
      <Route path="/animation/navbar-3d" element={<Navbar3D />} />
      <Route path="/animation/seesaw" element={<Seesaw />} />
      <Route path="/animation/framer-motion" element={<FramerMotion />} />
    </>
  );
  return <Routes>{publicRoutes}</Routes>;
};

export default AppRoutes;
