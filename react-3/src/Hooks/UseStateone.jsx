import React, { useState } from 'react';

const UseStateone = () => {

  const [count, setCount] = useState(0);
  console.log(count);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <div>UseStateone</div>
      <h1>Count: {count}</h1>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default UseStateone;