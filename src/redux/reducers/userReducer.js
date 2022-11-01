export const EDIT_USER = 'EDIT_USER'
export const DELETE_USER = 'DELETE_USER'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const ADD_USER = 'ADD_USER'
const initialState = {
  currentUser:null,
  users: [
    {
      id:'1',
      name:'Alex',
      email:'alex@gmail.com',
      password:'1234',
      img:'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
      orders:[]
    },
    {
      id:'2',
      name:'Oleg',
      email:'oleg@gmail.com',
      password:'1234',
      img:'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
      orders:[]
    },
    {
      id:'3',
      name:'Kerob',
      email:'kerob@gmail.com',
      password:'1234',
      img:'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
      orders:[]
    },
]
}


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: state.users.find(item => item.id === action.payload)
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map(user => user.id !== action.payload.id ? user : action.payload)
      };
    case ADD_USER: 
     return {
      ...state,
      users: [...state.users, action.payload]
     }
    default:
      return state;
  }
};

export default userReducer;
