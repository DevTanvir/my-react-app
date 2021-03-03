import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../logo.svg';

const ProductDetail = ({ productList }) => {
  const params = useParams()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  const productDetails = productList[params.id]

  return (
    <>
      {
        loading === true ? (<div className="Logo-style"><img src={logo} className="App-logo" alt="logo" /></div>) : 
        (
          <div>
            <div className="Details">
              <h2>Product Details</h2>
              <h1>{productDetails.name}</h1>
              <h3>{productDetails.description}</h3>
            </div>
          </div>
        )
      }

    </>
  )
}

export default ProductDetail