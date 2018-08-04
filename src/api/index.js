import mockData from './data.json';

let data = mockData;

const createFakePromis = (data, time = 1000) =>
  new Promise(resolve => {
    setTimeout(() => resolve(data), time);
  });

const get = () => createFakePromis(data);

const post = () => {
  const newId = (Number.parseInt(data[data.length - 1].id, 10) + 1).toString();
  data = [...data, { id: newId }];
  return createFakePromis(data);
};

const deleteItem = id => {
  data = data.filter(item => item.id !== id);
  return createFakePromis(data);
};

const put = (id, key, value) => {
  const index = data.findIndex(item => item.id === id);
  data[index][key] = value;
  return createFakePromis(data, 500);
};

export default { get, post, delete: deleteItem, put };
