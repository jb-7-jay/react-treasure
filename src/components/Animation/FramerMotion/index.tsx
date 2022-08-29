import { useState } from 'react';
import Sample from './Sample';

const FramerMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <h3>Magic Of Framer Motion</h3>
      <div>
        <button className="btn-primary" onClick={() => setIsVisible(!isVisible)}>
          Click Me !!
        </button>
        <Sample isVisible={isVisible} />
      </div>
    </div>
  );
};

export default FramerMotion;
