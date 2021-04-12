import React from 'react'
import logo from '../logo.svg';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Login = () => {
  var sumOfAllProducts = 0
  const [loading, setLoading] = useState(true);
  const [title, setName] = useState('')
  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <div className="Login">
        <span>LOGIN PAGE</span>
        <div style={{display:"inline"}}>
          <h4>Name</h4>
          <input type="text" label="Name" value={title} onChange={(e) => {
            setName(e.target.value)
          }} />
        </div>
      </div>
    </>
  )
}

export default Login