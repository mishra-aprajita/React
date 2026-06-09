import { createContext, useContext } from 'react';

// 1. Create the Context
const UserContext = createContext();

// 2. The Provider (Grandparent)
export default function ContextDemo() {
  const sharedData = "Data from the very top!";

  return (
    <UserContext.Provider value={sharedData}>
      <div style={{ padding: '20px', border: '1px solid purple' }}>
        <h2>Grandparent Component</h2>
        <Parent />
      </div>
    </UserContext.Provider>
  );
}

// Intermediate Parent (Doesn't use the data, just passes through)
function Parent() {
  return (
    <div style={{ margin: '10px', border: '1px dashed gray' }}>
      <h3>Middle Parent</h3>
      <Child />
    </div>
  );
}

// 3. The Consumer (Nested Child)
function Child() {
  const data = useContext(UserContext); // Grabbing data directly from context
  return (
    <div style={{ color: 'purple', fontWeight: 'bold' }}>
      <h4>Nested Child</h4>
      <p>Received: {data}</p>
    </div>
  );
}