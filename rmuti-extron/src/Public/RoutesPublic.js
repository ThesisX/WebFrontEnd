import React from "react";
import {
  BrowserRouter,
  // Switch,
  // Route,
  // Link,
} from "react-router-dom";

// import Signin from "./SigninPage/Signin";
import Signup from "./SignupPage/Signup";
import TabbarPublic from "./Tabbar/TabbarPublic";

const RoutesPublic = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <nav>
          <ul>

            <li><Link to="/">เข้าสู่ระบบ</Link></li>
            <Button variant="outlined" color="secondary"><Link to="/sign-up">สมัครสมาชิก</Link></Button>
          </ul>
        </nav> */}
        {/* <Signin />  */}
        {/* <Signup/> */}
      </div>
      <TabbarPublic/>
    </BrowserRouter>
  );
};

// const Publics = () => {
//   return (
//     <div>
//       <Switch>
//         <Route exact path="/">
//           <Signin />
//         </Route>
//         <Route path="/sign-up">
//           <Signup />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

export default RoutesPublic