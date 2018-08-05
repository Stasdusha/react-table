import {
  GET_DATA_SUCCESS,
  ADD_NEW_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  CHANGE_ITEM_SUCCESS,
  GET_DATA_ERROR,
  ADD_NEW_ITEM_ERROR,
  REMOVE_ITEM_ERROR,
  CHANGE_ITEM_ERROR
} from '../actionTypes';

const initialState = {
  data: [],
  error: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_SUCCESS:
    case ADD_NEW_ITEM_SUCCESS:
    case REMOVE_ITEM_SUCCESS:
    case CHANGE_ITEM_SUCCESS:
      return { ...state, data: payload.data };
    case GET_DATA_ERROR:
    case ADD_NEW_ITEM_ERROR:
    case REMOVE_ITEM_ERROR:
    case CHANGE_ITEM_ERROR:
      return { ...state, error: payload.error, data: [...state.data] };
    default:
      return state;
  }
};
