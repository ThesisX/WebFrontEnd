import React, { useState } from "react";
import Signin from "./Views/SigninPage/Signin";
import Hello from './Views/HelloPage/Hello';

function App() {

  const [UserSignin, setUserSignin] = useState(false)
  
  return (
    <div>
      {UserSignin ?
        <Hello />
        : <Signin />
      }
    </div>
  )
}

export default App;
