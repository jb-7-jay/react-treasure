import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// router will be here,

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
