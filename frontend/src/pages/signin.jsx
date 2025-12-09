import React from 'react'
import { Link } from 'react-router-dom';
import "./signin.css"


 const Signin = () => {
  return (
    <div className='subha'>
        <div className="container2">
          <h2>Signin</h2>
          <form >
            <div className="ip">
              <input type="text"placeholder=''required />
              <label>Name</label>
            </div>
            <div className="ip">
              <input type="email"placeholder=''required />
              <label >Email</label>
            </div>
            <div className="ip">
              <input type="password"placeholder=''required />
              <label >Password</label>
            </div>
            <div className="ip">
              <input type="tel"placeholder=''required />
              <label >Phone No</label>
            </div>
          </form>
          <button className='butt'>Signin</button>
          <div className="op">
            Already have an account?
            <Link to= "/" >Login</Link>
           </div>

        </div>
    </div>
  )
}
export default Signin;