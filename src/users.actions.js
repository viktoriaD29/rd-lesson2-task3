export const ADD_USER = 'USERS/ADD';
export const DELETE_USER = 'USERS/DELETE';

export const addCreator = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const deleteCreator = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
