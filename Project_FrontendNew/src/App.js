import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import useToken from './useToken';
import Signin from "./Views/SigninPage/Signin";
import Hello from './Views/HelloPage/Hello';

const App = () => {
  const { token, setToken } = useToken();
  console.log("My Token : " + token)

  if (!token) {
    return <Signin setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <h1>Application</h1>
      <Switch>
        <Route exact path="/">
          <Hello />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
