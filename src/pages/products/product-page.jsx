import React from 'react'
import logo from '../../logo.svg';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const history = useHistory();

  const cartStore = useSelector((state) => state);
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      console.log(response.data)
      setProductList(response.data)
      setLoading(false);
    })
    .catch(err => {
      setLoading(false)
      console.log(err.data)
    })
  }, []);
  
  console.log(cartStore, "Cart Details")
  const clicked = (id)=> {
    history.push(`/product-details/${id}`)
  }

  return (
    <>
      {
        loading === true ? (<div className="Logo-style"><img src={logo} className="App-logo" alt="logo" /></div>) : (
          <>
            <div className="Product-page">
              <h1 style={{marginLeft: '16px', fontFamily:"vibes", fontSize:"75px"}}>l' atelier</h1>
              {
                productList.map((item, index) => {
                  return (
                    <div key={index} className="Product">
                      <div onClick={() => clicked(item.id)} className="Product-Item">
                        <img src={item.image} width="200px" height="200px"></img>
                        <h3>{item.title}</h3> 
                        <h4 style={{color: "green"}}>Price | ${item.price}</h4>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </>
        )
      }
    </>
  )
}

export default Product