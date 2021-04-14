import react from 'react'
import { useState } from 'react';
import axios from 'axios'
import logo from './logo.svg';



const CreateProduct = ()=> {
  const [loading, setLoading] = useState(false);

  const [title, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')


  const addUser = ()=> {
    setLoading(true)
    axios.post('http://54.162.199.74/products', {
      title, price, description, category
    })
    .then(response=> {
      console.log(response.data, 'Successfully inserted')
      setLoading(false)
    })
    .catch(err=> {
      console.log(err.data, "something went wrong!")
      setLoading(false)
    })
  }

  return(
    <>
      { loading === true ? (<div className="Logo-style"><img src={logo} className="App-logo" alt="logo" /></div>) : (
      <>
        <div className="App">
          <h4>Name</h4>
          <input type="text" value={title} onChange={(e)=> {
            setName(e.target.value)
          }}/>
          <h4>Price</h4>
          <input type="number" value={price} onChange={(e) => {
            setPrice(e.target.value)
          }}/>
          <h4>Description</h4>
          <input type="text" value={description} onChange={(e) => {
            setDescription(e.target.value)
          }}/>
          <h4>Category</h4>
          <input type="text" value={category} onChange={(e) => {
            setCategory(e.target.value)
          }}/>
          <h4>Image Link</h4>
          <input type="text" value={image} onChange={(e) => {
            setImage(e.target.value)
          }}/>
        </div>
        <div className="App"><button onClick={addUser}>Submit</button></div>
      </>
      )}
      
    </>
  )
}

export default CreateProduct