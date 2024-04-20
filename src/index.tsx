import React from 'react';
import ReactDOM from 'react-dom/client';
import '././styles/index.scss';
import App from './App';
import ThemeProvider from 'src/providers/ThemeProvider/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ErrorBoundary from './providers/ErrorBoundary/ErrorBoundary';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);
