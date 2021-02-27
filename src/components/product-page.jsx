import React from 'react'
import logo from '../logo.svg';
import ProductDetail from './product-details-page';
import { useState, useEffect } from 'react';

const Product = ()=> {
  const [products, setProducts] = useState([
    {
      name: 'Élixir de Courage',
      price: 30,
      category: 'Medicine',
      description: 'Imaginary medicine from a mythical realm which provides courage to the carrier, for a moment'
    },
    {
      name: 'SeracZelg',
      price: 50,
      category: 'Weapon',
      description: 'A simple sword named uniquely, for selling purposes ofcourse!'
    },
    {
      name: 'Flask',
      price: 10,
      category: 'Utility',
      description: 'Self explanotry for the clever people, for everyone else you store your drinking water here'
    },
  ])

  useEffect(() => {
    // component rendering
    setState(true)
  });

  useEffect(() => {
    // component unmounting
    return (()=> {
      setState(false)
    })
  });


  const [loading, setState] = useState(false)
  const [info, setInfo] = useState('')
  const [name, setName] = useState('')
  const clicked = (desc, name)=> {
    setInfo(desc)
    setName(name)
  }
  return (
    <>
      
      { loading && <>
      <img src={logo} className="App-logo" alt="logo" />
      <span>Loader</span>
      </> }

      <h1>Product Page</h1>
      {
        products.map((item, index)=> {
          return (
            <div key={index}>
              <h3 >{index + 1}. Name: {item.name} | Price: {item.price} Golds</h3>
              <button onClick={() => clicked(item.description, item.name)}>Details</button>
            </div>
          )
          
        })
      }
      <ProductDetail productInformation={info} productname={name} />
      
      
    </>
  )
}

export default Product