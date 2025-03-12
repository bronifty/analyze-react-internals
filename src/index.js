import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// This will help us analyze React's rendering process
console.log('React version:', React.version);
console.log('React object:', React);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// We can set breakpoints here to step into React's internals
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 