import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import { Input, Th, Value, RemoveButton } from './СhangeableTh.styled';

export class СhangeableTh extends Component {
  constructor(props) {
    const { children } = props;
    super(props);
    this.state = { active: false, value: children };
  }

  static propTypes = {};

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  change = () => {
    const { changeItem, children } = this.props;
    const { value } = this.state;
    if (children !== value) {
      changeItem(value);
    }
  };

  onKeyDown = event => {
    const { active } = this.state;
    if (active && event.key === 'Enter') {
      this.change();
      this.setState({ active: false });
    }
  };

  handleClickOutside() {
    const { active } = this.state;
    if (active) {
      this.change();
    }
    this.setState({ active: false });
  }

  render() {
    const { children, hover, last, removeItem } = this.props;
    const { active, value } = this.state;

    return (
      <Th active={active} onClick={() => this.setState({ active: true })}>
        {active ? (
          <Input
            autoFocus
            onKeyDown={this.onKeyDown}
            value={value}
            onChange={this.onChange}
          />
        ) : (
          <Value>{children}</Value>
        )}
        {hover && last && <RemoveButton onClick={removeItem} />}
      </Th>
    );
  }
}

export default enhanceWithClickOutside(СhangeableTh);
