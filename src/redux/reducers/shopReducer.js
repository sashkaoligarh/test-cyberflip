export const ADD_TO_SHOP = "ADD_TO_SHOP";
export const EDIT_ITEM_IN_SHOP = "EDIT_ITEM_IN_SHOP";
export const REMOVE_FROM_SHOP = "REMOVE_FROM_SHOP";
export const CLEAR_SHOP = "CLEAR_SHOP";
const initialState = {
  shop: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SHOP:
      if (state.shop.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          shop: state.shop.map((item) =>
            item.id === action.payload.id
              ? { ...item, count: item.count + action.payload.count }
              : item
          ),
        };
      } else {
        return {
          ...state,
          shop: [...state.shop, action.payload],
        };
      }
    case REMOVE_FROM_SHOP:
      return {
        ...state,
        shop: state.shop.filter((item) => item.id !== action.payload),
      };
    case EDIT_ITEM_IN_SHOP:
      return {
        ...state,
        shop: state.shop.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: action.payload.count }
            : item
        ),
      };
    case CLEAR_SHOP:
      return {
        shop: [],
      };
    default:
      return state;
  }
};

export default shopReducer;
