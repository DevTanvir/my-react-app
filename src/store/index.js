
import {createStore} from 'redux'

const INTIAL_STATE = {
  cart: [],
  productQuantity: 0
};

const CartReducer = (state = INTIAL_STATE, action) =>{
  switch(action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: state.cart.concat(action.payload)}

    case 'PRODUCT_QUANTITY_PLUS':
      return { ...state, productQuantity: state.productQuantity + 1}

    default:
      break
  }
};

const store = createStore(CartReducer);

console.log(store);

export default store