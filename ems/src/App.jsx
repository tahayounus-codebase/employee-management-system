import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from './components/Dashboard/AdminDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null)

  const authData = useContext(AuthContext);


  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser({role:'admin'})
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if (authData) {
      const employee = authData.employees.find((e)=>email == e.email && password == e.password)
      if(employee){
        setUser({role:'employee'})
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      }
    }
    else{
      alert("Invalid Credential")
    }
  }
  
  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem("LoggedInUser");
      console.log(loggedInUser);
      if(loggedInUser){
        setUser(loggedInUser.role);
      }
      
    }
  }, [authData])

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>} 
    
    </>
  );
};

export default App;
