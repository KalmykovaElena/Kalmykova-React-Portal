import React from 'react';
import ReactDOM from 'react-dom/client';
import '././styles/index.scss';
import App from './App';
import ThemeProvider from 'providers/ThemeProvider/ThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
