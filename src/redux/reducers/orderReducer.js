export const EDIT_ORDER = "EDIT_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";
export const ADD_ORDER = "ADD_ORDER";
export const SET_IS_EDIT_ORDER = "SET_IS_EDIT_ORDER";
export const REMOVE_FROM_ORDER = "REMOVE_FROM_ORDER";
export const EDIT_ITEM_IN_ORDER = "EDIT_ITEM_IN_ORDER";
export const SET_EDITED_ORDER = "SET_EDITED_ORDER";
const initialState = {
  orders: [],
  isEditOrder: false,
  editedOrder: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case SET_EDITED_ORDER:
      return {
        ...state,
        editedOrder: action.payload,
      };
    case EDIT_ORDER:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id !== state.editedOrder.id ? order : state.editedOrder
        ),
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    case SET_IS_EDIT_ORDER:
      return {
        ...state,
        isEditOrder: action.payload,
      };
    case REMOVE_FROM_ORDER:
      return {
        ...state,
        editedOrder: {
          ...state.editedOrder,
          items: state.editedOrder.items.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    case EDIT_ITEM_IN_ORDER:
      return {
        ...state,
        editedOrder: {
          ...state.editedOrder,
          items: state.editedOrder.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, count: action.payload.count }
              : item
          ),
        },
      };
    default:
      return state;
  }
};

export default orderReducer;
