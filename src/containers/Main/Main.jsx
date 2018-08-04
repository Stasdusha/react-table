import React, { Component } from 'react';
import Table from '../../components/Table';
import api from '../../api';
import { Container, Title } from './Main.styled';

class Main extends Component {
  state = { isLoading: false };
  componentWillMount() {
    const { getDataAction } = this.props;
    this.toggleLoading();
    api
      .get()
      .then(getDataAction)
      .then(this.toggleLoading);
  }

  toggleLoading = () => {
    const { isLoading } = this.state;
    this.setState({ isLoading: !isLoading });
  };

  addNewItem = () => {
    this.toggleLoading();
    const { addNewItemAction } = this.props;
    api
      .post()
      .then(addNewItemAction)
      .then(this.toggleLoading);
  };

  removeItem = id => {
    const { removeItemAction } = this.props;
    this.toggleLoading();
    api
      .delete(id)
      .then(removeItemAction)
      .then(this.toggleLoading);
  };

  changeItem = (id, key, value) => {
    const { changeItemAction } = this.props;
    this.toggleLoading();
    api
      .put(id, key, value)
      .then(changeItemAction)
      .then(this.toggleLoading);
  };

  render() {
    const { data } = this.props;
    const { isLoading } = this.state;
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
          removeItem={this.removeItem}
          addNewItem={this.addNewItem}
          changeItem={this.changeItem}
          columns={columns}
          isLoading={isLoading}
        />
      </Container>
    );
  }
}

export default Main;
