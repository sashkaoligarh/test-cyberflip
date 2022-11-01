import {
  ADD_TO_SHOP,
  EDIT_ITEM_IN_SHOP,
  REMOVE_FROM_SHOP,
  CLEAR_SHOP,
} from "../reducers/shopReducer";

export const addToShop = (item) => ({
  type: ADD_TO_SHOP,
  payload: item,
});
export const clearShop = () => ({
  type: CLEAR_SHOP,
});
export const editItemInShop = (item) => ({
  type: EDIT_ITEM_IN_SHOP,
  payload: item,
});
export const deleteFromShop = (id) => ({
  type: REMOVE_FROM_SHOP,
  payload: id,
});
