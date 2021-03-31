import logo from './logo.svg';
import './App.css';
import Cart from './components/cart-page';
import Product from './components/product-page';
import ProductDetail from './components/product-details-page';
import CreateProduct from './components/create-product-page'
import EditProduct from './components/edit-product-page';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';



function App() {
  const cartReducer = useSelector((state) => state.productQuantity)

  return (
    <>
      <Router>
        <nav className="Navbar">
          <div className="">
            <Link to='/'><strong>Homepage</strong></Link>
            &nbsp;
            &nbsp;
            <Link to='/cart-page'><strong>Cart</strong></Link>
            &nbsp;
            &nbsp;
            <span><strong>Total Product: {cartReducer}</strong></span>
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
            <Route exact path={"/cart-page"}>
              <Cart />           
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
