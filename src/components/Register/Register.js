import React, { useState } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signInGoogle, creatUser } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault();
        creatUser(name, email, password)
    }
    return (
        <div>
            <div className="registration">
                <div className="registration__logo">
                    <h4 className="registration__logo-text"><i className="fas fa-clinic-medical"></i> CPH</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="" id="" placeholder="Enter Your Name" className="input__field" onBlur={(e) => setName(e.target.value)} />
                    <input type="email" name="" id="" placeholder="Enter Your Email" className="input__field" onBlur={(e) => setEmail(e.target.value)} />
                    <input type="password" name="" id="" placeholder="Enter Your Password" className="input__field" onBlur={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="registration__btn">registration</button>
                </form>
                <div className="text-center">
                    <h6 className="registration__or">OR</h6>
                </div>
                <div className="social__icon d-flex justify-content-center">
                    <img src="https://img.icons8.com/color/50/000000/google-logo.png" alt='' style={{ cursor: "pointer" }} onClick={signInGoogle} />
                </div>
                <Link to="/login" className="registration__account">All Ready have an Account? </Link>
            </div>


        </div>
    )
}

export default Register
