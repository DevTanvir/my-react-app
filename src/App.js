import logo from './logo.svg';
import './App.css';
import Product from './components/product-page';
import ProductDetail from './components/product-details-page';
import { useState, useEffect } from 'react';

function App() {
  const [state, setState] = useState(1)
  const clicked = (value) => {
    setState(value)
  }  
  return (
    <div className="App">
      <Product />
      {/* <button onClick={() => clicked(1)}>Product</button>
      <button onClick={() => clicked(2)}>Product Details</button> */}
      {/* {state === 1 ? <Product /> : <ProductDetail /> } */}
      
    </div>
  );
}

export default App;
