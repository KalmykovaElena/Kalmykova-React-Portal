import React from 'react';
import ReactDOM from 'react-dom/client';
import '././styles/index.scss';
import App from './App';
import ThemeProvider from 'providers/ThemeProvider/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
