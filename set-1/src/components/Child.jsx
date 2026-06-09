export default function Child({ name, age }) {
  return (
    <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
      <h3>Child Component</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}