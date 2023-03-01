import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCrousel from './ImageCrousel'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
