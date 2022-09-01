import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './index.css';

const dummyArray11Length = Array(20).fill(0);

const HexagonTailed = () => {
  const mouseRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (mouseRef.current) {
      mouseRef.current.style.left = e.clientX + 'px';
      mouseRef.current.style.top = e.clientY + 'px';
      mouseRef.current.style.visibility = 'visible';
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
    // className="bg-purple-800 h-[100vh] overflow-hidden relative"
    // initial={{ opacity: 0, x: '100%' }}
    // animate={{ opacity: 1, x: 0 }}
    // exit={{ opacity: 0, x: '-100%' }}
    // transition={{ duration: 0.25 }}
    >
      <motion.div
        className="bg-black h-[100vh] overflow-hidden relative"
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div id="cursor" ref={mouseRef}></div>
        <div className="container-main">
          {dummyArray11Length.map((_, outerkey) => (
            <div key={outerkey} className="tail-row-main">
              {dummyArray11Length.map((_, innerKey) => (
                <div key={innerKey} className="tail-hexagon" />
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HexagonTailed;
