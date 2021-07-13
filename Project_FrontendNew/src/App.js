import React, { useState } from "react";
import Signin from "./Views/SigninPage/Signin";
import Hello from './Views/HelloPage/Hello';
import Signup from "./Views/SignupPage/Signup";
import Theam from "./Pages/Theam/Theam";

function App() {

  const [UserSignin, setUserSignin] = useState(false)
  
  return (
    <div>
      {/* {UserSignin ?
        <Hello />
        : <Signin />
      } */}
      {/* <Signup/> */}
      <Theam/>

    </div>
  )
}

export default App;
