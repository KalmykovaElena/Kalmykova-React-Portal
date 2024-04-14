import React from 'react';
import ReactDOM from 'react-dom/client';
import '././styles/index.scss';
import App from './App';
import ThemeProvider from 'src/providers/ThemeProvider/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
    ,
  </BrowserRouter>,
);
