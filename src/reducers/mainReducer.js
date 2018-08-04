const initialState = {
  data: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_DATA_SUCCESS':
    case 'ADD_NEW_ITEM_SUCCESS':
    case 'REMOVE_ITEM_SUCCESS':
      return { ...state, data: payload.data };
    default:
      return state;
  }
};
