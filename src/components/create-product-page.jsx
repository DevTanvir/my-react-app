import react from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import logo from '../logo.svg';



const CreateProduct = ()=> {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [website, setWebsite] = useState('')

  const addUser = ()=> {
    setLoading(true)
    axios.post('https://jsonplaceholder.typicode.com/users', {
      name, phone, email, company, website
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
          <input type="text" value={name} onChange={(e)=> {
            setName(e.target.value)
          }}/>
          <h4>Phone</h4>
          <input type="number" value={phone} onChange={(e) => {
            setPhone(e.target.value)
          }}/>
          <h4>Email</h4>
          <input type="text" value={email} onChange={(e) => {
            setEmail(e.target.value)
          }}/>
          <h4>Company</h4>
          <input type="text" value={company} onChange={(e) => {
            setCompany(e.target.value)
          }}/>
          <h4>Website</h4>
          <input type="text" value={website} onChange={(e) => {
            setWebsite(e.target.value)
          }}/>
        </div>
        <div className="App"><button onClick={addUser}>Submit</button></div>
      </>
      )}
      
    </>
  )
}

export default CreateProduct