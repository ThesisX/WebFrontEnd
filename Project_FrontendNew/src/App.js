import React, {useState, useEffect } from "react";
import Cookies from 'js-cookie';

import { BrowserRouter as Router } from "react-router-dom";

import RoutesPublic from "./Public/RoutesPublic";
import RoutesPrivate from "./Private/RoutesPrivate";

const App = () => {
  const [auth, setAuth] = useState(false);
  // const [token, setToken] = useState("");

  const readCookie = () => {
    let tokenCookies = Cookies.get("token");
    if (tokenCookies) {
      setAuth(true);
      // setToken(tokenCookies);
    }
  };

  useEffect(() => {
    readCookie();
  }, [])

  return (
    <div>
      <Router>
        {/* {!auth ? <RoutesPublic />
          : <RoutesPrivate />
        } */}
       <RoutesPrivate />
      </Router>
    </div>
  )
}

export default App;