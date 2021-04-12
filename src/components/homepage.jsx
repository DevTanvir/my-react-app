import React from 'react'
import logo from '../logo.svg';
import model1 from '../img/model1.jpeg';
import model2 from '../img/model2.jpg';
import abstract1 from '../img/abstract1.jpg';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Homepage = () => {
  var sumOfAllProducts = 0
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const cartStore = useSelector((state) => state.cart);
  useEffect(() => {
    setProductList(cartStore)
    setLoading(false)

  }, [cartStore])
  for (let i = 0; i < productList.length; i++) {
    sumOfAllProducts += productList[i].price
  }
  console.log('Product', productList)

  const boldpargraphright = {
    fontSize: "72px",
    fontFamily: "Roboto",
    fontWeight: "Bolder",
    textAllign: "right"
  }
  const boldpargraphleft = {
    fontSize: "72px",
    fontFamily: "Roboto",
    fontWeight: "Bolder",
    textAllign: "left"
  }
  return (
    <>
      {
        loading === true ? (<div className="Logo-style"><img src={logo} className="App-logo" alt="logo" /></div>) : (
          <div>
            <div>
              <div style={{display:"inline-block"}}>
                <div className="Float-left">
                  <img src={model1} style={{marginTop:"76px"}}></img>
                </div>
                <div style={boldpargraphleft}>
                  <p>ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE</p>
                </div>
              </div>
            </div>

            <div style={{ display: "inline-block" }}>
              <div>
                <div className="Float-right">
                  <img src={model2}></img>
                </div>
                <div style={boldpargraphright}>
                  <p style={{textAlign:"right"}}>ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE</p>
                </div>
              </div>
            </div>

            <div style={{ display: "inline-block" }}>
              <div>
                <div className="Float-left">
                  <img src={abstract1}></img>
                </div>
                <div style={boldpargraphleft}>
                  <p>ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE ATTITUDE</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Homepage