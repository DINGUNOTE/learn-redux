import { createStore } from 'redux';
import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

export const addToDo = createAction('ADD');
export const removeToDo = createAction('REMOVE');

const reducer = createReducer(JSON.parse(localStorage.getItem('todos')) || [], {
  [addToDo]: (state, action) => {
    const addItem = [{ text: action.payload, id: Date.now() }, ...state];
    localStorage.setItem('todos', JSON.stringify(addItem));
    return addItem;
  },
  [removeToDo]: (state, action) => {
    const removeItem = state.filter((toDo) => toDo.id !== action.payload);
    localStorage.setItem('todos', JSON.stringify(removeItem));
    return removeItem;
  },
});

const store = configureStore({ reducer });

export default store;
