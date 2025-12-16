import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./signin.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

 const Signin = () => {
 const[name,setName]=useState()
 const[email,setEmail]=useState()
 const[password,setPassword]=useState()
 const[phoneno,setPhoneno]=useState()
 const usenavigation= useNavigate()
 const handlesubmit= (e)=>{
  e.preventDefault()
  axios.post('http://localhost:3001/signin',{name,email,password,phoneno})
  .then(result =>{console.log(result)
    usenavigation('/')
  })
  .catch(err=>console.log(err))
 }
  return (
    <div className='subha'>
        <div className="container2">
          <h2>Signin</h2>
          <form onSubmit={handlesubmit}>
            <div className="ip">
              <input type="text"
              placeholder=''
              required 
              onChange={(e)=>setName(e.target.value)}
              />
              <label>Name</label>
            </div>
            <div className="ip">
              <input type="email"
              placeholder=''
              required 
              onChange={(e)=>setEmail(e.target.value)}
              />
              <label >Email</label>
            </div>
            <div className="ip">
              <input type="password"
              placeholder=''
              required 
              onChange={(e)=>setPassword(e.target.value)}
              />
              <label >Password</label>
            </div>
            <div className="ip">
              <input type="tel"
              placeholder=''
              required 
              onChange={(e)=>setPhoneno(e.target.value)}
              />
              <label >Phone No</label>
            </div>
            <button className='butt'>Signin</button>
          </form>
          <div className="op">
            Already have an account?
            <Link to= "/" >Login</Link>
           </div>

        </div>
    </div>
  )
}
export default Signin;