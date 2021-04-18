import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage';
import Login from './pages/login/login-page';
import Signup from './pages/signup/signup';
import Product from './pages/product-page';
import ProductDetail from './pages/product-details-page';
import CreateProduct from './pages/create-product-page'
import EditProduct from './pages/edit-product-page';
import Cart from './pages/cart-page';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';



function App() {
  const cartReducer = useSelector((state) => state.productQuantity)

  return (
    <>
      <Router>
        <nav>
          <div className="Navbar">
            <div><h3 style={{ fontFamily:"vibes", fontSize:"36px"}}>Shop Paragon</h3></div>
            <div style={{display:"block", boxSizing:"border-box"}}>
              <ul style={{display:"flex", alignItems:"center"}}>
                {/* <li><Link to='/products'><strong>Products</strong></Link></li> */}
                <li><Link to='/dashboard'><strong>Dashboard</strong></Link></li>
                <li><Link to='/login'><strong>Login</strong></Link></li>
                <li><Link to='/cart-page'><strong>Cart</strong></Link></li>
                <li><span><strong>Total Product: {cartReducer}</strong></span></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="App">
          <Switch>
            <Route exact path={"/"}>
              <Product />
            </Route>
            <Route exact path={"/login"}>
              <Login />
            </Route>
            <Route exact path={"/signup"}>
              <Signup />
            </Route>
            <Route exact path={"/dashboard"}>
              <CreateProduct />
            </Route>
            <Route exact path={"/products"}>
              <Product />             
            </Route>
            <Route exact path={"/product-details/:id"}>
              <ProductDetail />           
            </Route>
            {/* <Route exact path={"/create-product"}>
              <CreateProduct />           
            </Route> */}
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
