import Main from './Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData, addNewItem, removeItem, changeItem } from '../../actions';

const mapStateToProps = store => ({
  data: store.mainReducer.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getDataAction: getData,
      addNewItemAction: addNewItem,
      removeItemAction: removeItem,
      changeItemAction: changeItem
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
