import { createSlice, configureStore } from '@reduxjs/toolkit';

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: JSON.parse(localStorage.getItem('todos')) || [],
  reducers: {
    add: (state, action) => {
      const addItem = [{ text: action.payload, id: Date.now() }, ...state];
      localStorage.setItem('todos', JSON.stringify(addItem));
      return addItem;
    },
    remove: (state, action) => {
      const removeItem = state.filter((toDo) => toDo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(removeItem));
      return removeItem;
    },
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
