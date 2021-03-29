import React from 'react'
import logo from '../logo.svg';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const cartStore = useSelector((state) => state);
  console.log(cartStore, "Cart Details")
  setLoading(false)

  return (
    <>
      {
        loading === true ? (<div className="Logo-style"><img src={logo} className="App-logo" alt="logo" /></div>) : (
          <div>
            <h1>Products</h1>
            {
              productList.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="Product">
                      <img src={item.image} width="200px" height="200px"></img>
                      <h3>{item.title}</h3>
                      <h4>Price | ${item.price}</h4>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
      }
    </>
  )
}

export default Cart