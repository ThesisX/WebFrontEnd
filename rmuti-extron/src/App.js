import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';

import { BrowserRouter as Router } from "react-router-dom";

import RoutesPublic from "./Public/RoutesPublic";
import RoutesPrivate from "./Private/RoutesPrivate";

import { get } from 'axios';
import { BASE_URL } from './service';

const App = () => {
  const [auth, setAuth] = useState(false);
  const [loadding, setLoadding] = useState(true);

  const readCookie = async () => {
    let tokenCookies = Cookies.get("token");

    const headers = {
      Authorization: `Bearer ${tokenCookies}`,
    };

    await get(BASE_URL + '/users/info', { headers })
      .then(res => {
        let info = res.data;
        // console.log(info)
        setAuth(true);
        setLoadding(false);

      })
      .catch(err => {
        alert('กรุณาเข้าสู่ระบบ');
        setAuth(false);
        setLoadding(false);
      });
  };


  useEffect(() => {
    readCookie();
    setLoadding(false);
  }, [])

  return (
    <div>
      <Router basename={'/'}>
        {!loadding ? (
          !auth ? <RoutesPublic /> : <RoutesPrivate />
        ) : (<>กำลังโหลด...</>)}

        {/* <RoutesPrivate /> */}
      </Router>
    </div>
  )
};

export default App;