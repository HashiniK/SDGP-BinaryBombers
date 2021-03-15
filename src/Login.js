import React from 'react'
import Footer from "./Footer"; 
import "./Login.css";
import {Link, useHistory} from "react-router-dom";



function Login() {
    return (
        
            <div className="login">
    
                
                <Link to="/">
                    <img
                        className="login__logo"
                        src="21.png"
                        alt="logo"
                    />
                </Link>
                
                {/* <Link to="/">
                
            </Link> */}
    
            <div className="login__middlle">
                <div className="login__container">
                    <h1>Sign In</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input type="email" className="login__email" name="email"/>
                        <h5>Password</h5>
                        <input type="password" className="login__password" name="password"/>
                        <button type="submit" className="login__signInButton">Sign in</button>
                        <button className="login__registerButton">Create Account</button>
                        <input type="hidden" name="new" />
                    </form>
                    
                    </div>
                    <div className="login__image">
                    <img
                        className="login__Side"
                        src="22.jpg"
                        alt="logo"
                    />
                </div>    
            </div>
        </div>
        )
    }





       
    


export default Login;   
