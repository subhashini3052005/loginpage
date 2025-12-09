import React from 'react'
import './login.css'
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className='react'>
        <div className="container">
            <h2>Welcome</h2>
            <p>login to your account</p>
            <form >
                <div className="field">
                    <input type="email"placeholder='' required />
                    <label >email</label>

                </div>
                <div className="field">
                    <input type="password" placeholder='' required />
                    <label >password</label>

                </div>
            </form>
            <div className="options">
                <label>
                <input type="checkbox" />
                remember me
                </label>
                <a href="">forgot password</a>
            </div>
            <button>login</button>
            <div className="signin">
                Don't have an account?
                <Link to= "/signin">signin</Link>
            </div>
        </div>
    </div>
  )
}
export default Login;