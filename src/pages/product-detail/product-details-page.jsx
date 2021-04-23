import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import logo from '../../logo.svg';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
  const cartStore = useSelector((state)=> state)
  const dispatch = useDispatch();
  const params = useParams()
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([])
  const history = useHistory()

  const id = params.id

  useEffect(() => {
    axios.get(`http://54.162.199.74/products/${id}`)
      .then((response) => {
        console.log(response.data)
        setProduct(response.data)
        setLoading(false);
      })
      .catch(err => {
        setLoading(false)
        console.log(err.data)
      })
  }, []);
  
  const AddtoCart = (item)=> {
    console.log(item)
    let user = window.sessionStorage.getItem('jwtToken')
    if (user) {
      
    }
    dispatch({
      type: 'ADD_TO_CART',
      payload: item
    })

    dispatch({
      type: 'PRODUCT_QUANTITY_PLUS',
      payload: 1
    })
  }

  return (
    <>
      {
        loading === true ? (<div className="Logo-style"><img src={logo} className="App-logo" alt="logo" /></div>) : 
        (
          <div>
            <div className="Category">Category: {product.category}</div>
            <div className="Edit-Button">
              <button onClick={()=> { AddtoCart(product) } } style={{backgroundColor: 'green', color: 'white', fontSize: '18px', borderRadius: '4px'}}>Add to cart</button>
              {/* <button onClick={()=> { goToEditPage(product.id) } }>Edit</button> */}
            </div>
            <div className="Details">
              <div className="">
                  <img src={product.image} width="300px" height="400px" style={{marginTop: '10px'}}></img>
              </div>
              <hr/>
              <div className="">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <div className="Price">Price: ${product.price}</div>
              </div>
            </div>
          </div>
        )
      }

    </>
  )
}

export default ProductDetail