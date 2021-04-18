import React from 'react'
import logo from '../logo.svg';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  var sumOfAllProducts = 0
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const cartStore = useSelector((state) => state.cart);
  useEffect(()=>{
    setProductList(cartStore)
    setLoading(false)

  }, [cartStore])
  for(let i = 0; i < productList.length; i++) {
    sumOfAllProducts += productList[i].price
  }
  console.log('Product', productList)
  return (
    <>
      {
        loading === true ? (<div className="Logo-style"><img src={logo} className="App-logo" alt="logo" /></div>) : (
          <div>
            <h1>Total Price: ${sumOfAllProducts}</h1>
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