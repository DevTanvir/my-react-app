import React from 'react'
import logo from '../logo.svg';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Product = ({ productList }) => {
  const [loading, setLoading] = useState(true);
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const clicked = (id)=> {
    history.push(`/product-details/${id}`)
  }

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
                    <div onClick={() => clicked(index)} className="Product">
                      <h3>{item.name}</h3> 
                      <h4>| Price: {item.price} Golds |</h4>
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

export default Product