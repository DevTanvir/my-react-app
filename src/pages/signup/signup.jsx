import React from 'react'
import './styleSignup.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialValues = {
  email: "",
  password: "",
  username: "",
  firstname: "",
  lastname: "",
  phone: "",
  city: "",
  street: "",
  zipcode: "",
  number: "",
  lat: "",
  lng: ""

}

const Signup = () => {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState()
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    setLoading(false)
  }, [])

  const signupBtnPressed = ()=> {
    axios.post('http://localhost:8080/signup', {
      email: values.email,
      phone: values.phone,
      username: values.username,
      firstname: values.firstname,
      lastname: values.lastname,
      password: values.password,
      addrees: {
        street: values.street,
        zipcode: values.zipcode,
        city: values.city,
        number: values.number,
        geoloc: {
          lat: values.lat,
          long: values.lng
        }
      }
    }).then(response => {
        console.log(response)
        history.push('/login');
    }).catch((err) => {
      console.log(err)
    })

  }

  return (
    <>
      <div className="signup-login-modal">
        <form>
          <div className="logncontainer">
            <h1>Signup</h1>
          </div>

          <div className="Signup-container">
            <label><b>Email</b></label>
            <input
              className="input"
              value={values.email}
              onChange={handleInputChange}
              name="email"
              placeholder="Email"
              required
            />
            <label><b>Password</b></label>
            <input
              className="input"
              value={values.password}
              onChange={handleInputChange}
              name="password"
              placeholder="Password"
              type="password"
              required
            />
            <label><b>Phone</b></label>
            <input
              className="input"
              value={values.phone}
              onChange={handleInputChange}
              name="phone"
              placeholder="Phone"
              required
            />
            <label><b>Username</b></label>
            <input
              className="input"
              value={values.username}
              onChange={handleInputChange}
              name="username"
              placeholder="Username"
              required
            />
            <label><b>First Name</b></label>
            <input
              className="input"
              value={values.firstname}
              onChange={handleInputChange}
              name="firstname"
              placeholder="First Name"
              required
            />
            <label><b>Last Name</b></label>
            <input
              className="input"
              value={values.lastname}
              onChange={handleInputChange}
              name="lastname"
              placeholder="Last Name"
              required
            />
            <label><b>City</b></label>
            <input
              className="input"
              value={values.city}
              onChange={handleInputChange}
              name="city"
              placeholder="City"
            />
            <label><b>Street</b></label>
            <input
              className="input"
              value={values.street}
              onChange={handleInputChange}
              name="street"
              placeholder="Street"
            />
            <label><b>Number</b></label>
            <input
              className="input"
              value={values.number}
              onChange={handleInputChange}
              name="number"
              placeholder="Number"
            />
            <label><b>Zipcode</b></label>
            <input
              className="input"
              value={values.zipcode}
              onChange={handleInputChange}
              name="zipcode"
              placeholder="Zipcode"
            />
            <label><b>Lattitude</b></label>
            <input
              className="input"
              value={values.lat}
              onChange={handleInputChange}
              name="lat"
              placeholder="Lattitude"
            />
            <label><b>Longtitude</b></label>
            <input
              className="input"
              value={values.lng}
              onChange={handleInputChange}
              name="lng"
              placeholder="Longtitude"
            />

            <div>
              <button className="Signup-button" onClick={signupBtnPressed}>Signup</button>
            </div>
          </div>
        </form>

      </div>
    </>
  )
}

export default Signup