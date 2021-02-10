import React, { useEffect } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spot"

function App() {
  const [token, setToken] = useState(null);
  
  //run code on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

  console.log("got token", token) 
}, []);
  return (
     //BEM
     <div className="app">
     {
       token ? (
         <player />
       ) : (

        <Login />
       )
     }
     
   </div>
 );
}

export default App;
