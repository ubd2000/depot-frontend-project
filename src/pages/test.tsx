import React, { useState } from 'react';
import viteLogo from '../assets/images/vite.svg'

const Test: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      Test
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={`${viteLogo}`} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};

export default Test;