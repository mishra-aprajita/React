import React, { useState } from 'react';

const DarkLight = () => {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh",
        padding: "20px",
        textAlign: "center"
      }}
    >
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
};

export default DarkLight;
