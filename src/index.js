import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, BrowserRouter, HashRouter } from 'react-router-dom'
// import 'antd/dist/antd.css';
import App from './App';

ReactDOM.render(
      <BrowserRouter>
          <App />
      </BrowserRouter>,
  document.getElementById('root')
);

