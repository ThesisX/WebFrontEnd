import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Appbar from './Components/Appbar/MyAppBar'
import Tabbar from './Components/Tabbar/Tabbar'

ReactDOM.render(
  <React.StrictMode>
    <Tabbar />
  </React.StrictMode>,
  document.getElementById('root')
);