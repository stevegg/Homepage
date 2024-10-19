import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

/**
 * The main App component.
 */
function App() {
  /**
   * The state to keep track of the count.
   */
  const [count, setCount] = useState(0);

  /**
   * The JSX to return.
   */
  return (
    <>
      <div className="logos">
        <a href="https://vitejs.dev" target="_blank">
          {/* The Vite logo. */}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          {/* The React logo. */}
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* The count button. */}
        <button onClick={() => setCount((count) => count + 1)}>
          {/* The count text. */}
          count is: {count}
        </button>
        <p>HI THERE, THIS WORKED!!!</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
