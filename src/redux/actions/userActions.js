import {
  SET_USERS,
  EDIT_USER,
  DELETE_USER,
  SET_CURRENT_USER,
  ADD_USER
} from '../reducers/userReducer';

export const addUser = (users) => ({
  type: ADD_USER,
  payload: users,
});
export const editUser = (id) => ({
  type: EDIT_USER,
  payload: id,
});
export const setCurrentUser = (user) => ({
  type:SET_CURRENT_USER,
  payload: user,
})
export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
})
