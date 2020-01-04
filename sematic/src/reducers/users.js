const initialState = {
  users: [],
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
