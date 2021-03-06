import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tr } from './TableRow.styled';
import InputTh from '../InputTh';

export class TableRow extends Component {
  state = { hover: false };

  static propTypes = {
    rowData: PropTypes.object.isRequired,
    columns: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired,
    changeItem: PropTypes.func.isRequired
  };

  onMouseEnter = () => this.setState({ hover: true });

  onMouseLeave = () => this.setState({ hover: false });

  render() {
    const { rowData, columns, removeItem, changeItem } = this.props;
    const { hover } = this.state;
    return (
      <Tr
        hover={hover}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {columns.map(({ key }, index) => (
          <InputTh
            removeItem={() => removeItem(rowData.id)}
            changeItem={value => changeItem(rowData.id, key, value)}
            hover={hover}
            last={index === columns.length - 1}
            key={key}
          >
            {rowData[key]}
          </InputTh>
        ))}
      </Tr>
    );
  }
}

export default TableRow;
