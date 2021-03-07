import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import logo from '../logo.svg';

const ProductDetail = () => {
  const params = useParams()
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([])
  const history = useHistory()

  const id = params.id

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        console.log(response.data)
        setUser(response.data)
        setLoading(false);
      })
      .catch(err => {
        setLoading(false)
        console.log(err.data)
      })
  }, []);
  
  const goToEditPage = (id)=> {
    console.log(id)
    history.push(`/edit-product/${id}`)
  }

  return (
    <>
      {
        loading === true ? (<div className="Logo-style"><img src={logo} className="App-logo" alt="logo" /></div>) : 
        (
          <div>
            <div className="Details">
              <h2>Info Card</h2>
              <hr></hr>
              <h1>{user.name}</h1>
              <h3>Company: {user.company.name}</h3>
              <h4>Website: {user.website}</h4>
              <h4>Address: {user.address.city}, {user.address.street}, {user.address.zipcode}</h4>
            </div>
            <div className="Edit-Button"><button onClick={()=> { goToEditPage(user.id) } }>Edit</button></div>
          </div>
        )
      }

    </>
  )
}

export default ProductDetail