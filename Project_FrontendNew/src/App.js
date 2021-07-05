import React, { useState } from "react";
import Signin from "./Views/SigninPage/Signin";
import Hello from './Views/HelloPage/Hello';
import Signup from "./Views/SignupPage/Signup";

function App() {

  const [UserSignin, setUserSignin] = useState(false)
  
  return (
    <div>
      {/* {UserSignin ?
        <Hello />
        : <Signin />
      } */}
      <Signup/>
    </div>
  )
}

export default App;
