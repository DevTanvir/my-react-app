import logo from './logo.svg';
import './App.css';
import Product from './components/product-page';
import ProductDetail from './components/product-details-page';
import CreateProduct from './components/create-product-page'
import EditProduct from './components/edit-product-page';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

function App() {

  // const [productList, setProductList] = useState([
  //   {
  //     name: 'Élixir de Courage',
  //     price: 30,
  //     category: 'Medicine',
  //     description: 'Imaginary medicine from a mythical realm which provides courage to the carrier, for a moment'
  //   },
  //   {
  //     name: 'SeracZelg',
  //     price: 50,
  //     category: 'Weapon',
  //     description: 'A simple sword named uniquely, for selling purposes ofcourse!'
  //   },
  //   {
  //     name: 'Flask',
  //     price: 10,
  //     category: 'Utility',
  //     description: 'Self explanotry for the clever people, for everyone else you store your drinking water here'
  //   },
  // ]);

  return (
    <>
      {/* <nav>
        {product !== "" ? (<button onClick={() => handleClick("")}>Go to Homepage</button>) : (<h2>Products</h2>)}
      </nav>

      { product === "" ? (<Product productList={productList} handleClick={handleClick} />) : (<ProductDetail product={product} />) } */}

      <Router>
        <nav className="Navbar">
          <div className="Center-text">
            <Link to='/'><strong>Homepage</strong></Link>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <Link to='/create-product'><strong>Create User</strong></Link>
          </div>
        </nav>
        <div className="App">
          <Switch>
            <Route exact path={"/"}>
              <Product />             
            </Route>
            <Route exact path={"/product-details/:id"}>
              <ProductDetail />           
            </Route>
            <Route exact path={"/create-product"}>
              <CreateProduct />           
            </Route>
            <Route exact path={"/edit-product/:id"}>
              <EditProduct />           
            </Route>
            <Route exact path={"/404"}>
              <div className="Center-text"><h1>404 NOT FOUND</h1></div>
            </Route>
            <Route path={"*"} render={()=> <Redirect to="/404" />} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
