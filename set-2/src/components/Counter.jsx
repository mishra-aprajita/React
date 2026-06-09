import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid green' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '0 10px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ backgroundColor: '#ffcccc' }}>Reset</button>
    </div>
  );
}