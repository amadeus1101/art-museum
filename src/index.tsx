import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './constants/GlobalStyle';
import FontStyles from './constants/FontStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <GlobalStyle />
    <FontStyles />
    <App />
  </>
);
