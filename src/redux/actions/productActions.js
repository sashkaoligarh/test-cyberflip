import {
  SET_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from '../reducers/productReducer';

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
export const editProduct = (id) => ({
  type: EDIT_PRODUCT,
  payload: id,
});
export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
})
