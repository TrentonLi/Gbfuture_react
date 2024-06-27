import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
       <App />
    </Router>
  </React.StrictMode>
);
reportWebVitals();
/**
 * @Author: TrentonLi
 * @Date: 2024/6/27
 * @LastEditors: TrentonLi
 * @Description: dec
 */
