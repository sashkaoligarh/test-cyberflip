export const SET_PRODUCTS = 'SET_PRODUCTS'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

const initialState = {
  products: [
    {
      id:'1',
      title:'Apple iPhone 14',
      img:'https://stylus.ua/thumbs/568x568/15/3a/2498981.jpeg'
    },
    {
      id:'2',
      title:'Apple AirPods Pro',
      img:'https://stylus.ua/thumbs/568x568/54/78/2140810.jpeg'
    },
    {
      id:'3',
      title:'Apple iPad Pro 3',
      img:'https://stylus.ua/thumbs/568x568/e4/08/1906729.jpeg'
    }
  ]
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case EDIT_PRODUCT:
      return { ...state, products: state.products.map(product => product.id !== action.payload.id ? product : action.payload)};
    case DELETE_PRODUCT:
      return { ...state, products: state.products.filter(product => product.id !== action.payload)};
    default:
      return state;
  }
};

export default productsReducer;
