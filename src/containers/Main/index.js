import Main from './Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  GET_DATA_SUCCESS,
  ADD_NEW_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  CHANGE_ITEM_SUCCESS,
  GET_DATA_ERROR,
  ADD_NEW_ITEM_ERROR,
  REMOVE_ITEM_ERROR,
  CHANGE_ITEM_ERROR
} from '../../actionTypes';

import { defaultAction, defaultError } from '../../actions';

const mapStateToProps = store => ({
  data: store.mainReducer.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getDataAction: defaultAction(GET_DATA_SUCCESS),
      addNewItemAction: defaultAction(ADD_NEW_ITEM_SUCCESS),
      removeItemAction: defaultAction(REMOVE_ITEM_SUCCESS),
      changeItemAction: defaultAction(CHANGE_ITEM_SUCCESS),
      getDataErrorAction: defaultError(GET_DATA_ERROR),
      addNewItemErrorAction: defaultError(ADD_NEW_ITEM_ERROR),
      removeItemErrorAction: defaultError(REMOVE_ITEM_ERROR),
      changeItemErrorAction: defaultError(CHANGE_ITEM_ERROR)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
