import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './globalStyles';
import Router from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router/>
    <GlobalStyle/>
  </React.StrictMode>
);

