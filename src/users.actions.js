export const ADD_USER = 'USERS/ADD';
export const DELETE_USER = 'USERS/DELETE';

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
