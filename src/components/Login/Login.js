import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const history = useHistory();
    const { user, handleGoogleSignin } = useAuth();

    const location = useLocation();
    const redirectUrl = location.state?.from || '/home';
    if (user.email) {
        history.push(redirectUrl);
    } else if (!user.email) {
    }

    // Handle google login by taking info from useFirebase
    const handleGoogleLogin = () => {
        handleGoogleSignin()
            .then(res => {
                history.push(redirectUrl);
            })
    }

    // Intregate firebase email and password login

    // Store auth in auth variable
    const auth = getAuth();

    // Take some of state for storing email and password 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle email field
    const handleEmail = e => {
        const email = e.target.value;
        setEmail(email);
    }

    // Handle password field
    const handlePassword = e => {
        const password = e.target.value;
        setPassword(password);
    }
    // Handle sign in with existing user info
    const handleSignin = e => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {

            });
        e.preventDefault();
    }
    return (
        <div>
            <div className="registration">
                <div className="registration__logo">
                    <h4 className="registration__logo-text"><i className="fas fa-clinic-medical"></i>  City Psychiatric Hospital</h4>
                </div>
                <form onSubmit={handleSignin}>
                    <input type="email" onBlur={handleEmail} name="" id="" placeholder="Enter Your Email" className="input__field" />
                    <input type="password" onBlur={handlePassword} name="" id="" placeholder="Enter Your Password" className="input__field" />
                    <button type="submit" className="registration__btn">Login</button>
                </form>
                <div className="text-center">
                    <h6 className="registration__or">OR</h6>
                </div>
                <div className="social__icon d-flex justify-content-center">
                    <img src="https://img.icons8.com/color/50/000000/google-logo.png" alt="" style={{ cursor: "pointer" }} onClick={handleGoogleLogin} />
                </div>
                <Link to="/registration" className="registration__account">New User ? Please Register</Link>
            </div>

        </div>
    )
};
export default Login;