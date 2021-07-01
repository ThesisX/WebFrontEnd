import React  from 'react'
import './App.less';
import {BrowserRouter} from 'react-router-dom';
import PublicLayouts from './Pages/public/Layout/PublicLayouts';

const App = () => {
  return(
    <BrowserRouter>
      <PublicLayouts/>
    </BrowserRouter>
  ) 
}

export default App;
