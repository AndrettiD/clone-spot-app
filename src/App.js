import React, { useEffect } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spot"

function App() {
  
  //run code on a given condition
  useEffect(() => {
    const token = getTokenFromUrl();
  }, []);

  return (
     //BEM
     <div className="app">
     <Login />
   </div>
 );
}

export default App;
