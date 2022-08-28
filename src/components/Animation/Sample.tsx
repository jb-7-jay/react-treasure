import { useState } from 'react';

const Sample = () => {
  const [number, setNumber] = useState(0);

  const handleIncreament = (inc: number) => {
    setNumber((prev) => prev + inc);
  };

  return (
    <div>
      <h1>This is simple component</h1>
      <h4>Current Number: {number}</h4>
      {false && 'Hello bro'}
      <button onClick={() => handleIncreament(20)}>Increament</button>
    </div>
  );
};

export default Sample;
