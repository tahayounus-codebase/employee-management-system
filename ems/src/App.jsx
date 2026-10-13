
import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      console.log("this is admin");
    }
    else if (email == 'user@me.com' && password == 123) {
      console.log('this is user');
      
    }
    else{
      alert("Invalid Credential")
    }
  }

  handleLogin('user@me.com',123);

  return (
    <>
      {!user ? <Login /> : ''}
    </>
  );
};

export default App;
