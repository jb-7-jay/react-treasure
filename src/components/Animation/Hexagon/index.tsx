import './index.css';
import { useEffect, useRef } from 'react';

const HexagonTailed = () => {
  const mouseRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (mouseRef.current) {
      mouseRef.current.style.left = e.clientX + 'px';
      mouseRef.current.style.top = e.clientY + 'px';
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-black h-[100vh]">
      <div id="cursor" ref={mouseRef}></div>
      <div className="container-main">
        {Array(11)
          .fill(0)
          .map((_, outerkey) => (
            <div key={outerkey} className="tail-row-main">
              {Array(16)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="tail-hexagon" />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default HexagonTailed;
