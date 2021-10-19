import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signInGoogle, userLogin } = useAuth()

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        userLogin(email, password)
    }
    return (
        <div>
            <div className="registration">
                <div className="registration__logo">

                    <h4 className="registration__logo-text"><i className="fas fa-clinic-medical"></i>  City Psychiatric Hospital</h4>
                </div>
                <form onSubmit={handleSubmitLogin}>
                    <input type="email" name="" id="" placeholder="Enter Your Email" className="input__field" onBlur={(e) => setEmail(e.target.value)} />
                    <input type="password" name="" id="" placeholder="Enter Your Password" className="input__field" onBlur={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="registration__btn">Login</button>
                </form>
                <div className="text-center">
                    <h6 className="registration__or">OR</h6>
                </div>
                <div className="social__icon d-flex justify-content-center">
                    <img src="https://img.icons8.com/color/50/000000/google-logo.png" alt="" style={{ cursor: "pointer" }} onClick={signInGoogle} />
                </div>
                <Link to="/registration" className="registration__account">Please Register</Link>
            </div>

        </div>
    )
}

export default Login
