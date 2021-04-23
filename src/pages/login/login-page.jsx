import React from 'react'
import './style.css';
import bgimg from './logo.svg'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [notFoundMsg, setMessage] = useState('')
  const history = useHistory();
  
  useEffect(() => {
    setLoading(false)
  }, [])

  const loginBtnPressed = ()=> {
    
    axios.post('http://localhost:8080/signin', {
      email: email,
      password: password

    }).then(response => {
      if (response.data.userInfo) {
        window.sessionStorage.setItem('jwtToken', JSON.stringify(response.data.userInfo));
        history.push('/');
      }
      else {
        setMessage('User Not found');
        console.log(notFoundMsg);
      }
     }).catch((err) => {
      console.log(err);
    })

  }

  const crtAccntBtnPressed = () => {
    history.push('/signup');
  }


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
      <div className="login-modal">
        
        <form>
          <div className="logncontainer">
            <h1>LOGIN</h1>
          </div>

          <div className="container">
            <label><b>Email</b></label>
            <input className="input" type="text" placeholder="Email" value={email} onChange={(e) => {
              setEmail(e.target.value)
            }} required/>

            <label><b>Password</b></label>
            <input className="input" type="password" placeholder="Password" value={password} required onChange={(e) => {
              setPassword(e.target.value)
            }} />

            <div style={{display:"inline-block"}}>
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
              <span style={{marginRight:"240px"}}></span>
              <button className="button" onClick={() => loginBtnPressed()}>Login</button>
            </div>
          </div>

          <div className="container-create-account">
            <button type="button" className="crtAccntBtn" onClick={() => crtAccntBtnPressed()}>Create an account</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Login