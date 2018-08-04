import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import {
  Container,
  TableContainer,
  TableHeader,
  TableBody,
  Tr,
  Th,
  AddButton,
  Spinner
} from './Table.styled';

export class Table extends Component {
  static propTypes = {};

  render() {
    const {
      data,
      columns,
      addNewItem,
      removeItem,
      changeItem,
      isLoading
    } = this.props;

    return (
      <Container isLoading={isLoading}>
        <TableContainer>
          <TableHeader>
            <Tr>
              {columns.map(({ key, title }) => (
                <Th key={key}>{title}</Th>
              ))}
            </Tr>
          </TableHeader>
          <TableBody>
            {data.map(rowData => (
              <TableRow
                removeItem={removeItem}
                changeItem={changeItem}
                key={rowData.id}
                rowData={rowData}
                columns={columns}
              />
            ))}
          </TableBody>
        </TableContainer>
        <AddButton onClick={addNewItem}>Add new row +</AddButton>
        {isLoading && <Spinner />}
      </Container>
    );
  }
}

export default Table;
