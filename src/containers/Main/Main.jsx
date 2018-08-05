import React, { Component } from 'react';
import Table from '../../components/Table';
import api from '../../api';
import { Container, Title } from './Main.styled';

class Main extends Component {
  constructor(props) {
    super(props);
    this.addNewItem = this.addNewItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
  }

  async componentWillMount() {
    const { getDataAction, getDataErrorAction } = this.props;
    try {
      getDataAction(await api.get());
    } catch (error) {
      getDataErrorAction(error);
    }
  }

  async addNewItem() {
    const { addNewItemAction, addNewItemErrorAction } = this.props;
    try {
      addNewItemAction(await api.post());
    } catch (error) {
      addNewItemErrorAction(error);
    }
  }

  async removeItem(id) {
    const { removeItemAction, removeItemErrorAction } = this.props;
    try {
      removeItemAction(await api.delete(id));
    } catch (error) {
      removeItemErrorAction(error);
    }
  }

  async changeItem(id, key, value) {
    const { changeItemAction, changeItemErrorAction } = this.props;
    try {
      changeItemAction(await api.put(id, key, value));
    } catch (error) {
      changeItemErrorAction(error);
    }
  }

  render() {
    const { data } = this.props;
    const columns = [
      { title: 'Name', key: 'name' },
      { title: 'Gender', key: 'gender' },
      { title: 'Company', key: 'company' }
    ];

    return (
      <Container>
        <Title>Example data-table</Title>
        <Table
          data={data}
          removeItemCallback={this.removeItem}
          addNewItemCallback={this.addNewItem}
          changeItemCallback={this.changeItem}
          columns={columns}
        />
      </Container>
    );
  }
}

export default Main;
