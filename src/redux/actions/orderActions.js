import {
  EDIT_ORDER,
  DELETE_ORDER,
  ADD_ORDER,
  SET_IS_EDIT_ORDER,
  REMOVE_FROM_ORDER,
  EDIT_ITEM_IN_ORDER,
  SET_EDITED_ORDER,
} from "../reducers/orderReducer";
export const setEditedOrder = (item) => ({
  type: SET_EDITED_ORDER,
  payload: item,
});
export const editItemInOrder = (item) => ({
  type: EDIT_ITEM_IN_ORDER,
  payload: item,
});
export const deleteFromOrder = (id) => ({
  type: REMOVE_FROM_ORDER,
  payload: id,
});
export const setIsEditOrder = (status) => ({
  type: SET_IS_EDIT_ORDER,
  payload: status,
});
export const addOrder = (order) => ({
  type: ADD_ORDER,
  payload: order,
});
export const editOrder = () => ({
  type: EDIT_ORDER,
});
export const removeOrder = (id) => ({
  type: DELETE_ORDER,
  payload: id,
});
