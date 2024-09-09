import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Listing from "./Components/Listing";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement

);

root.render(

  <React.StrictMode>
    <Listing/>
  </React.StrictMode>
);
reportWebVitals();
