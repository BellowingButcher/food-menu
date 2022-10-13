import React from 'react';
import ReactDOM from 'react-dom/client';
import Api from './Api';
import HomePage from './HomePage';
const page = 'home';
const root = ReactDOM.createRoot(document.getElementById('root'));

if (page === 'home') {

    root.render(
      <React.StrictMode>
      <HomePage />
      {/* <Api /> */}
    </React.StrictMode>
);
}
