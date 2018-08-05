import React from 'react';
import Table from './Table.jsx';
import renderer from 'react-test-renderer';

const mockData = [
  {
    id: '1',
    name: 'Shelley Cabrera',
    gender: 'female',
    company: 'NIQUENT',
    email: 'shelleycabrera@niquent.com'
  },
  {
    id: '2',
    name: 'Alyce Reyes',
    ge1nder: 'female',
    company: 'RAMEON',
    email: 'alycereyes@rameon.com'
  },
  {
    id: '3',
    name: 'Lela Ellis',
    gender: 'female',
    company: 'PAPRICUT',
    email: 'lelaellis@papricut.com'
  }
];

const mockColumns = [
  { title: 'Name', key: 'name' },
  { title: 'Gender', key: 'gender' },
  { title: 'Company', key: 'company' }
];

const spyAddNewItemCallback = jest.fn();

const spyRemoveItemCallback = jest.fn();

const spyChangeItemCallback = jest.fn();

let table;

beforeEach(() => {
  const component = renderer.create(
    <Table
      data={mockData}
      columns={mockColumns}
      addNewItemCallback={spyAddNewItemCallback}
      removeItemCallback={spyRemoveItemCallback}
      changeItemCallback={spyChangeItemCallback}
    />
  );
  table = component.getInstance();
});

test('Table : addNewItem', () => {
  table.addNewItem();
  expect(table.state.localData.length).toBe(4);
});

test('Table : removeItem', () => {
  table.removeItem('2');
  expect(table.state.localData.findIndex(({ id }) => id === '2')).toBe(-1);
});

test('Table : changeItem', () => {
  table.changeItem('2', 'name', 'test');
  expect(table.state.localData[1].name).toBe('test');
});

test('Table : addNewItemCallback calling', () => {
  table.addNewItem();
  expect(spyAddNewItemCallback).toHaveBeenCalled();
});

test('Table : removeItemCallback calling', () => {
  table.removeItem('2');
  expect(spyRemoveItemCallback).toHaveBeenCalled();
});

test('Table : changeItemCallback calling', () => {
  table.changeItem('2', 'name', 'test');
  expect(spyChangeItemCallback).toHaveBeenCalled();
});
