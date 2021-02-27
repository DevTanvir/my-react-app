import React from 'react'
import { useState, useEffect } from 'react';
import logo from '../logo.svg';

const ProductDetail = (props) => {

  
  useEffect(() => {
    // component rendering
    setState(true)
  });
  
  useEffect(() => {
    // component unmounting
    return (() => {
      setState(false)
    })
  });
  const [loading, setState] = useState(false)
  
  return (
    <>
      { loading && <>
        <img src={logo} className="App-logo" alt="logo" />
        <span>Loader</span>
      </> }

      <h2>Product Details</h2>
      <h1>{props.productname}</h1>
      <h2>{props.productInformation}</h2>

    </>
  )
}

export default ProductDetail