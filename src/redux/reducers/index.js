import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import productsReducer from './productReducer';
import shopsReducer from './shopReducer';
import userReducer from './userReducer';
export default combineReducers({
  products:productsReducer,
  shop:shopsReducer,
  users:userReducer,
  orders: orderReducer
});
