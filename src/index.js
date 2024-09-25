import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/app.tsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from "./services/store.ts";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
  
);

reportWebVitals();
