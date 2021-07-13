import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import useToken from './useToken';
import Signin from "./Views/SigninPage/Signin";
import Hello from './Views/HelloPage/Hello';
import MyAppBar from './Components/Appbar/MyAppBar';

const App = () => {
  // const { token, setToken } = useToken();
  // console.log("My Token : " + token)

  // if (!token) {
  //   return <Signin setToken={setToken} />
  // }

  return (
    // <BrowserRouter>
    //   <h1>Application</h1>
    //   <Switch>
    //     <Route exact path="/">
    //       {/* <Hello /> */}
    //      
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
    <MyAppBar/>
  )
}

export default App;
