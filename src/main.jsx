import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App'; // they asked not to import it like this
import { App } from './App'; //but like this but I don't see anymore the text Welcome!

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
