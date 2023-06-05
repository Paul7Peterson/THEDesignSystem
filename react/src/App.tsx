import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.scss';

/** App */
export default function App () {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <z-button text={`count is ${count}`} onClick={() => setCount((count) => count + 1)} />

        <z-icon icon="cross" />
      </div>
    </>
  );
}
