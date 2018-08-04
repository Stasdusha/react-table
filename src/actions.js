import {
  GET_DATA_SUCCESS,
  ADD_NEW_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  CHANGE_ITEM_SUCCESS
} from './actionTypes';

export const getData = data => ({
  type: GET_DATA_SUCCESS,
  payload: { data }
});

export const addNewItem = data => ({
  type: ADD_NEW_ITEM_SUCCESS,
  payload: { data }
});

export const removeItem = data => ({
  type: REMOVE_ITEM_SUCCESS,
  payload: { data }
});

export const changeItem = data => ({
  type: CHANGE_ITEM_SUCCESS,
  payload: { data }
});
