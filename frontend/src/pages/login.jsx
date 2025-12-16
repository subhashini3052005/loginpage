import React, { useState } from 'react'
import './login.css'
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const[email,setEmail]=useState()
const[password,setPassword]=useState() 
const usenavigation=useNavigate()
const handlesubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{console.log(result)
        if(result.data==="success"){
        usenavigation('/home')}
    })
    .catch(err=>console.log(err))
    
}
  return (
    <div className='react'>
        <div className="container">
            <h2>Welcome</h2>
            <p>login to your account</p>
            <form onSubmit={handlesubmit}>
                <div className="field">
                    <input type="email"
                    placeholder=''
                     required
                     onChange={(e)=>setEmail(e.target.value)}
                     />
                    <label >email</label>

                </div>
                <div className="field">
                    <input type="password" 
                    placeholder=''
                     required 
                     onChange={(e)=>setPassword(e.target.value)}
                     />
                    <label >password</label>

                </div>
                <button className='bu'>login</button>
            </form>
            <div className="options">
                <label>
                <input type="checkbox" />
                remember me
                </label>
                <a href="">forgot password</a>
            </div>
            <div className="signin">
                Don't have an account?
                <Link to= "/signin">signin</Link>
            </div>
        </div>
    </div>
  )
}
export default Login;