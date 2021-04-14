import React from 'react'
import './style.css';
import { useState, useEffect } from 'react';


const Login = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {/* <div className="Login">
        <span>LOGIN PAGE</span>
        <div style={{display:"inline"}}>
          <h4>Name</h4>
          <input type="text" label="Name" value={name} onChange={(e) => {
            setName(e.target.value)
          }} />
        </div>
        <div style={{display:"inline"}}>
          <h4>Password</h4>
          <input type="password" label="Password" value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} />
        </div>
      </div> */}
      <div className="modal">
        
        <form method="post">
          <div className="logncontainer">
            <h1>LOGIN</h1>
          </div>

          <div className="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Name" value={name} onChange={(e) => {
              setName(e.target.value)
            }} required/>

            <label><b>Password</b></label>
            <input type="password" placeholder="Password" value={password} required onChange={(e) => {
              setPassword(e.target.value)
            }} />

            <div style={{display:"inline-block"}}>
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
              <span style={{marginRight:"240px"}}></span>
              <button type="submit">Login</button>
            </div>
          </div>

          <div className="container">
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>

      </div>
    </>
  )
}

export default Login