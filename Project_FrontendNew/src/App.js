import React, { useState } from "react";
import Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
} from "react-router-dom";
import axios from 'axios';

import Signin from "./Views/SigninPage/Signin";
import Signup from "./Views/SignupPage/Signup";
// import Hello from './Views/HelloPage/Hello';

// import useToken from './useToken';
// import MyAppBar from './Components/Appbar/MyAppBar';

const AuthApi = React.createContext();
const TokenApi = React.createContext();

const App = () => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const readCookie = () => {
    let token = Cookies.get("token");
    if (token) {
      setAuth(true);
      setToken(token);
    }
  };
  React.useEffect(() => {
    readCookie();
  }, [])
  // const { token, setToken } = useToken();
  // console.log("My Token : " + token)

  // if (!token) {
  //   return <Signin setToken={setToken} />
  // }

  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
      <TokenApi.Provider value={{ token, setToken }}>
        <Router>
            {/* <nav>
              <ul>
                {!auth ? (
                  <li>
                    <Link to="/sign-up">Sign-Up</Link>
                  </li>
                ) : (<div></div>)}
                {!auth ? (
                  <li>
                    <Link to="/sign-in">Sign-In</Link>
                  </li>
                ) : (<div></div>)}
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
            <Routes /> */}
        </Router>
      </TokenApi.Provider>
    </AuthApi.Provider>
  )
}

const Home = () => {
  const [data, setData] = useState("");
  const Auth = React.useContext(AuthApi);
  const Token = React.useContext(TokenApi);
  const handleonclick = () => {
    Auth.setAuth(false);
    Cookies.remove("token");
  };
  let toke = Token.token;
  const headers = {
    Authorization: `Bearer ${toke}`,
  };
  const getdata = async () => {
    let res = await axios
      .get("http://127.0.0.1:8000/", { headers })
      .then((response) => {
        return response.data.data;
      });
    return res;
  };
  React.useEffect(async () => {
    let x = await getdata();
    setData(x);
    console.log(x);
  }, []);
  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleonclick}>Logout</button>
      <h1>{data}</h1>
    </div>
  );
};

const Routes = () => {
  const Auth = React.useContext(AuthApi);
  return (
    <Switch>
      <Route path="/sign-up"><Signup /></Route>
      <ProtectedLogin
        path="/sign-in"
        auth={Auth.auth}
        component={Signin}
      ></ProtectedLogin>
      <ProtectedRoute
        path="/"
        auth={Auth.auth}
        component={Home}
      ></ProtectedRoute>
    </Switch>
  );
};
const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Redirect to="/sign-in" />)}
    />
  );
};
const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (!auth ? <Component /> : <Redirect to="/" />)}
    />
  );
};

export default App;
