import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';

import type { ReactComponents } from '../../lit/dist/react'; // TODO not from lib
import '@local/lit/react';


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements extends ReactComponents {
      //
    }
  }
}

const root = document.getElementById('root') as HTMLElement;

ReactDOM
  .createRoot(root)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
