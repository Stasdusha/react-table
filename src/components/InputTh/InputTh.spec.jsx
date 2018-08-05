import React from 'react';
import { InputTh } from './InputTh.jsx';
import renderer from 'react-test-renderer';

const mockValue = 'test';

const spyRemoveItem = jest.fn();

const spyChangeItem = jest.fn();

let inputTh;

beforeEach(() => {
  const component = renderer.create(
    <InputTh
      removeItem={spyRemoveItem}
      last={true}
      hover={false}
      changeItem={spyChangeItem}
    >
      {mockValue}
    </InputTh>
  );
  inputTh = component.getInstance();
});

test('inputTh : onChange', () => {
  inputTh.onChange({ target: { value: 'new test' } });
  expect(inputTh.state.value).toBe('new test');
});

test('inputTh : change', () => {
  inputTh.onChange({ target: { value: 'new test' } });
  inputTh.change();
  expect(spyChangeItem).toHaveBeenCalledWith('new test');
});

test('inputTh : onKeyDown', () => {
  inputTh.onChange({ target: { value: 'new test' } });
  inputTh.onKeyDown({ event: { key: 'Enter' } });
  expect(spyChangeItem).toHaveBeenCalledWith('new test');
});
