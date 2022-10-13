import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Api from './Api';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render
  (
        <React.StrictMode>
            <Api />
          </React.StrictMode>
      )
      
