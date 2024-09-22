// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.css'; // Import global CSS here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
