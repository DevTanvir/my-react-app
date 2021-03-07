import React from 'react'
import logo from '../logo.svg';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Product = () => {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([])
  const history = useHistory()

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response.data)
        setUserList(response.data)
        setLoading(false);
      })
      .catch(err => {
        setLoading(false)
        console.log(err.data)
      })
  }, []);

  const clicked = (id)=> {
    history.push(`/product-details/${id}`)
  }

  return (
    <>
      {
        loading === true ? (<div className="Logo-style"><img src={logo} className="App-logo" alt="logo" /></div>) : (
          <div>
            <h1>Users</h1>
            {
              userList.map((item, index) => {
                return (
                  <div key={index}>
                    <div onClick={() => clicked(item.id)} className="Product">
                      <h3>{item.name}</h3> 
                      <h4>| {item.email} | {item.phone}</h4>
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