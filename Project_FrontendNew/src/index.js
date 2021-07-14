import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Appbar from './Components/Appbar/MyAppBar'
import Singin from './Public/SigninPage/Signin';
import TabbarPublic from './Public/Tabbar/TabbarPublic'

ReactDOM.render(
  <React.StrictMode>
    {/* <Singin /> */}
    <TabbarPublic/>
  </React.StrictMode>,
  document.getElementById('root')
);