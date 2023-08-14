import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global_styles.css';
import { Home } from './templates/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home numberToIncrement={2} />
  </React.StrictMode>
);

