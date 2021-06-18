import React, {useState} from 'react'
import Header from "./Header"; 
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/search')
            })
            .catch(error => alert(error.message))

    }

    const register = e =>{
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth){
                    history.push('/')
                }
            })

            .catch(error => alert(error.message))
    }

    return (
        
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="21.png"
                    alt="logo"
                />
            </Link>
                
            <div className="login__container">
                <h1>Sign In</h1>
                <form>

                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    
                    <button type="submit" onClick = {signIn} className="login__signInButton">Sign in</button>
                    <button onClick = {register} className="login__registerButton">Create Account</button>
                    <input type="hidden" name="new" />
                </form>
                
            </div>
            
        
            
        </div>
        
    )
    
}

export default Login
