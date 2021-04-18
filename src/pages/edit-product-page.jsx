import react from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../logo.svg';

const EditProduct = ()=> {
  const params = useParams()
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([])

  const [name, setName] = useState('')
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [website, setWebsite] = useState('')  

  const id = params.id

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        console.log(response.data)
        const data = response.data
        setUser(data)
        setName(data.name)
        setPhone(data.phone)
        setEmail(data.email)
        setCompany(data.company.name)
        setWebsite(data.website)
        setLoading(false);
      })
      .catch(err => {
        setLoading(false)
        console.log(err.data)
      })
  }, []);



  const editUser = () => {
    setLoading(true);
    axios.patch('https://jsonplaceholder.typicode.com/users', {
      name, phone, email, company, website
    })
    .then(response => {
      setLoading(false);
      console.log(response.data, 'Successfully edited')
    })
    .catch(err => {
      setLoading(false);
      console.log(err.data, "something went wrong!")
    })
  }

  return(
    <>
      { loading === true ? (<div className="Logo-style"><img src={logo} className="App-logo" alt="logo" /></div>) : (
        <div>
          <h1>Edit Page</h1>
          <div className="App">
            <h4>Name</h4>
            <input type="text" value={name} onChange={(e) => {
              setName(e.target.value)
            }} />
            <h4>Phone</h4>
            <input type="text" value={phone} onChange={(e) => {
              setPhone(e.target.value)
            }} />
            <h4>Email</h4>
            <input type="text" value={email} onChange={(e) => {
              setEmail(e.target.value)
            }} />
            <h4>Company</h4>
            <input type="text" value={company} onChange={(e) => {
              setCompany(e.target.value)
            }} />
            <h4>Website</h4>
            <input type="text" value={website} onChange={(e) => {
              setWebsite(e.target.value)
            }} />
          </div>
          <div className="App"><button onClick={editUser}>Submit</button></div>      
        </div>
      )}
    </>
  )
}

export default EditProduct