import { useState } from 'react';

export default function LiveInput() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: '20px', border: '1px solid orange', marginBottom: '20px' }}>
      <h2>Form Handling</h2>
      <input 
        type="text" 
        placeholder="Type your name..." 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
        Live Preview: {name ? name : "Waiting for you to type..."}
      </p>
    </div>
  );
}