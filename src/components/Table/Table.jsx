import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableRow from '../TableRow';
import {
  Container,
  TableContainer,
  TableHeader,
  TableBody,
  Tr,
  Th,
  AddButton
} from './Table.styled';

export class Table extends Component {
  state = {};
  static getDerivedStateFromProps(props, state) {
    const { data } = props;
    if (state && state.data === data) {
      return state;
    }
    return { localData: [...data], data: data };
  }

  static defaultProps = {
    addNewItemCallback: () => {},
    removeItemCallback: () => {},
    changeItemCallback: () => {}
  };

  static propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired
      })
    ),
    addNewItemCallback: PropTypes.func,
    removeItemCallback: PropTypes.func,
    changeItemCallback: PropTypes.func
  };

  addNewItem = () => {
    const { addNewItemCallback } = this.props;
    this.setState(({ localData }) => ({
      localData: [...localData, { id: 'temp' }]
    }));
    addNewItemCallback();
  };

  removeItem = id => {
    const { removeItemCallback } = this.props;
    this.setState(({ localData }) => ({
      localData: localData.filter(item => item.id !== id)
    }));
    removeItemCallback(id);
  };

  changeItem = (id, key, value) => {
    const { changeItemCallback } = this.props;
    const { localData } = this.state;
    const index = localData.findIndex(item => item.id === id);
    const newItem = { ...localData[index], [key]: value };
    this.setState(() => ({
      localData: [
        ...localData.slice(0, index),
        newItem,
        ...localData.slice(index + 1)
      ]
    }));
    changeItemCallback(id, key, value);
  };

  render() {
    const { columns } = this.props;
    const { localData } = this.state;

    return (
      <Container>
        <TableContainer>
          <TableHeader>
            <Tr>
              {columns.map(({ key, title }) => (
                <Th key={key}>{title}</Th>
              ))}
            </Tr>
          </TableHeader>
          <TableBody>
            {localData.map(rowData => (
              <TableRow
                removeItem={this.removeItem}
                changeItem={this.changeItem}
                key={rowData.id}
                rowData={rowData}
                columns={columns}
              />
            ))}
          </TableBody>
        </TableContainer>
        <AddButton onClick={this.addNewItem}>Add new row +</AddButton>
      </Container>
    );
  }
}

export default Table;
