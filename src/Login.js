import React from 'react';
import './Login.css';
import { loginUrl } from "./spot";

function Login() {
    return (
        <div className="login">
            <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png" alt="spot logo"/>
            
            <a href={loginUrl}>LOGIN WITH SPOT</a>
  
        </div>
    );
}

export default Login;
