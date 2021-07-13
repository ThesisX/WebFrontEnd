import React, { useState } from "react";
// import Signin from "./Views/SigninPage/Signin";
// import Hello from './Views/HelloPage/Hello';
// import Signup from "./Views/SignupPage/Signup";
import Manager from "./Page/Manager/Manager"
// import Tester from "./Page/tester/Tester"

function App() {

  const [UserSignin, setUserSignin] = useState(false)
  
  return (
    <div>
      {/* {UserSignin ?
        <Hello />
        : <Signin />
      } */}
      {/* <Signup/> */}
      <Manager/>

    </div>
  )
}

export default App;
