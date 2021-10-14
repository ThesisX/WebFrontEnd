import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';

import { BrowserRouter as Router } from "react-router-dom";

import RoutesPublic from "./Public/RoutesPublic";
import RoutesPrivate from "./Private/RoutesPrivate";

import { get } from 'axios';
import { BASE_URL } from './service';

const App = () => {
  const [auth, setAuth] = useState(false);
  // const [token, setToken] = useState("");

  const readCookie = async () => {
    let tokenCookies = Cookies.get("token");
    // tokenCookies ?  : setAuth(false);
    if(tokenCookies){
      const headers = {
        Authorization: `Bearer ${tokenCookies}`,
      };
  
      await get(BASE_URL + '/users/info', { headers })
        .then(res => {
          let info = res.data;
          // console.log(info)
          if(info)
            setAuth(true);
          else
            setAuth(false);

        })
        .catch(err => {
          alert('กรุณาเข้าสู่ระบบ');
          setAuth(false);
        });
    }
    

  };


  useEffect(() => {
    readCookie();
  }, [])

  return (
    <div>
      <Router basename={'/'}>
        {!auth ? <RoutesPublic />
          : <RoutesPrivate />
        }
        {/* <RoutesPrivate /> */}
      </Router>
    </div>
  )
}

export default App;