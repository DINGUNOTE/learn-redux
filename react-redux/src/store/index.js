import { createStore } from 'redux';

const ADD = 'ADD';
const REMOVE = 'REMOVE';

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const removeToDo = (id) => {
  return {
    type: REMOVE,
    id: parseInt(id),
  };
};

const reducer = (
  state = JSON.parse(localStorage.getItem('todos')) || [],
  action
) => {
  switch (action.type) {
    case ADD:
      const addItem = [{ text: action.text, id: Date.now() }, ...state];
      localStorage.setItem('todos', JSON.stringify(addItem));
      return addItem;
    case REMOVE:
      const removeItem = state.filter((toDo) => toDo.id !== action.id);
      localStorage.setItem('todos', JSON.stringify(removeItem));
      return removeItem;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
