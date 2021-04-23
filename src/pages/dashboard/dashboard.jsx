import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import logo from '../../logo.svg';
import './dashboardStyles.css'


const intialValuesForProduct = {
  title: "",
  price: "",
  description: "",
  image: "",
  stock: "",
  category: null
}

const intialValueForCategory = {
  name: "",
  description: ""
}


const Dashboard = ()=> {
  const [loading, setLoading] = useState(false);
  const [productValues, setProductValues] = useState(intialValuesForProduct);
  const [categoryValues, setCategoryValues] = useState(intialValueForCategory);
  const [productForm, setProductForm] = useState(false)
  const [categoryForm, setCategoryForm] = useState(false)
  const [image, setImage] = useState('')


  const addProduct = ()=> {
    setLoading(true)
    let user = JSON.parse(sessionStorage.getItem('jwtToken'));
    let userToken = user.token
    axios.post('http://localhost:8080/products',{
      headers: {
        authorization: `bearer ${userToken}`
      }
    }, {
      title: productValues.title, 
      price: productValues.price, 
      description: productValues.description, 
      category: {
      _id: 1
      }
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

  const addCategory = ()=> {
    setLoading(true)
    let user = JSON.parse(sessionStorage.getItem('jwtToken'));
    let userToken = user.token
    axios.post('http://localhost:8080/category',{
      headers: {
        authorization: `bearer ${userToken}`
      }
    }, {
      name: categoryValues.name, 
      description: categoryValues.description, 
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

  const handleInputChangeForProduct = (e) => {
    const { name, value } = e.target;
    setProductValues({
      ...productValues,
      [name]: value,
    });
  };

  const handleInputChangeForCategory = (e) => {
    const { name, value } = e.target;
    setCategoryValues({
      ...categoryValues,
      [name]: value,
    });
  };

  const enableProduct = ()=> {
    setProductForm(true)
    setCategoryForm(false)
  }

  const enableCategory = ()=> {
    setCategoryForm(true)
    setProductForm(false)
  }

  return(
    <>
      { loading === true ? (<div className="Logo-style"><img src={logo} className="App-logo" alt="logo" /></div>) : (
      <>
        <div style={{display: "inline-flex", margin:"auto"}}>
          <div className="Add-Product" onClick={() => enableProduct()}>
            <h1>+Add Product</h1>
          </div>
          <div className="Add-Category" onClick={() => enableCategory()}>
            <h1>+Add Category</h1>
          </div>
          <div className="Add-Product" onClick={() => enableProduct()}>
            <h1>Fetch All Products</h1>
          </div>
          <div className="Add-Category" onClick={() => enableCategory()}>
            <h1>Fetch All Category</h1>
          </div>
        </div>
        { productForm === true ? (
            <div className="dashboard-modal">
              <form>
                <div className="logncontainer">
                  <h1>Product</h1>
                </div>

                <div className="Signup-container">
                  <label><b>Title</b></label>
                  <input
                    className="input"
                    value={productValues.title}
                    onChange={handleInputChangeForProduct}
                    name="title"
                    placeholder="Title"
                    required
                  />
                  <label><b>Price</b></label>
                  <input
                    className="input"
                    value={productValues.price}
                    onChange={handleInputChangeForProduct}
                    name="price"
                    placeholder="Price"
                    required
                  />
                  <label><b>Description</b></label>
                  <input
                    className="input"
                    value={productValues.description}
                    onChange={handleInputChangeForProduct}
                    name="description"
                    placeholder="Description"
                  />
                  <label><b>Stock</b></label>
                  <input
                    className="input"
                    value={productValues.stock}
                    onChange={handleInputChangeForProduct}
                    name="stock"
                    placeholder="Stock"
                    required
                  />
                  <label><b>Category</b></label>
                  <input
                    className="input"
                    value={productValues.category}
                    onChange={handleInputChangeForProduct}
                    name="category"
                    placeholder="Category"
                    required
                  />
                  <label><b>Image</b></label>
                  <input
                    className="input"
                    value={productValues.image}
                    onChange={handleInputChangeForProduct}
                    name="image"
                    placeholder="Image"
                    required
                  />
                  <div>
                    <button className="Signup-button" onClick={() => addProduct()}>Add</button>
                  </div>
                </div>
              </form>

            </div>
        ) : (<></>)}
        { categoryForm === true ? (
          <div className="dashboard-modal">
            <form>
              <div className="logncontainer">
                <h1>Category</h1>
              </div>

              <div className="Signup-container">
                <label><b>Name</b></label>
                <input
                  className="input"
                  value={categoryValues.name}
                  onChange={handleInputChangeForCategory}
                  name="name"
                  placeholder="Name"
                  required
                />
                <label><b>Description</b></label>
                <input
                  className="input"
                  value={categoryValues.description}
                  onChange={handleInputChangeForCategory}
                  name="description"
                  placeholder="Description"
                  required
                />
                <div>
                  <button className="Signup-button" onClick={(e) => addCategory()}>Add</button>
                </div>
              </div>
            </form>

          </div>
        ) : (<></>)}
      </>
      )}
      
    </>
  )
}

export default Dashboard