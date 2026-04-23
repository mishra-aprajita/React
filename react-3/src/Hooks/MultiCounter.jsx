import React, { useState } from 'react';

const MultiCounter = () => {
  const [count, setCount] = useState([0, 0]);

  const increment = (index) => {
    setCount((prevCount) => {
      const newCount = [...prevCount];
      newCount[index] += 1;
      return newCount;
    });
  };

  return (
    <div>
      {count.map((counter, index) => (
        <div key={index}>
          <h1>count: {counter}</h1>
          <button onClick={() => increment(index)}>increment</button>
        </div>
      ))}
    </div>
  );
};

export default MultiCounter;