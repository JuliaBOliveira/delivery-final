import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalContextProvider } from './Components/_context/GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
