import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Signin from "./SigninPage/Signin";
import Signup from "./SignupPage/Signup";
import TabbarPublic from "./Tabbar/TabbarPublic";

const RoutesPublic = () => {
  return (
    <BrowserRouter>
    <div>
      {/* <nav>
        <ul>
          <li><Link to="/">เข้าสู่ระบบ</Link></li>
          <li><Link to="/sign-up">สมัครสมาชิก</Link></li>
        </ul>
      </nav> */}
      <TabbarPublic/>

      <Publics />
    </div>
    </BrowserRouter>
  );
};

const Publics = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Signin />
        </Route>
        <Route path="/sign-up">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}



// const Home = ({AuthApi, TokenApi}) => {
//   const [data, setData] = useState("");
//   const Auth = useContext(AuthApi);
//   const Token = useContext(TokenApi);

//   const handleonclick = () => {
//     Auth.setAuth(false);
//     Cookies.remove("token");
//   };
//   let toke = Token.token;
//   const headers = {
//     Authorization: `Bearer ${toke}`,
//   };
//   const getdata = async () => {
//     let res = await axios
//       .get("http://127.0.0.1:8000/", { headers })
//       .then((response) => {
//         return response.data.data;
//       });
//     return res;
//   };
//   useEffect(async () => {
//     let x = await getdata();
//     setData(x);
//     console.log(x);
//   }, []);
//   return (
//     <div>
//       <h2>Home</h2>
//       <button onClick={handleonclick}>Logout</button>
//       <h1>{data}</h1>
//     </div>
//   );
// };

// const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={() => (auth ? <Component /> : <Redirect to="/sign-in" />)}
//     />
//   );
// };

// const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={() => (!auth ? <Component /> : <Redirect to="/" />)}
//     />
//   );
// };

export default RoutesPublic