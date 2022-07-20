import { createStore } from 'redux';

/* 
Counter
*/

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0; // 초기값 표시

const ADD = 'ADD';
const MINUS = 'MINUS';

// reducer
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier); // store 생성, reducer는 countModifer다.

const onChange = () => {
  number.innerText = countStore.getState(); // 변경된 state를 number에 표시한다.
};

countStore.subscribe(onChange); // data 변경을 감지할때마다 onChange를 실행시킨다.

add.addEventListener('click', () => countStore.dispatch({ type: ADD }));
minus.addEventListener('click', () => countStore.dispatch({ type: MINUS }));

/* 
TODO
*/
const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addToDo = text => {
  return {
    type: ADD_TODO,
    text,
  };
};

const removeToDo = id => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    case DELETE_TODO:
      const cleaned = state.filter(toDo => toDo.id !== parseInt(action.id));
      return cleaned;
    default:
      return state;
  }
};

const toDoStore = createStore(reducer);

const dispatchAddToDo = text => {
  toDoStore.dispatch(addToDo(text));
};

const dispatchRemoveToDo = e => {
  const id = parseInt(e.target.parentElement.id);
  toDoStore.dispatch(removeToDo(id));
};

const paintToDos = () => {
  const toDos = toDoStore.getState();
  $ul.innerHTML = '';
  toDos.forEach(toDo => {
    const $li = document.createElement('li');
    const $btn = document.createElement('button');
    $btn.innerText = 'DEL';
    $btn.addEventListener('click', dispatchRemoveToDo);
    $li.id = toDo.id;
    $li.innerText = toDo.text;
    $li.appendChild($btn);
    $ul.appendChild($li);
  });
};

toDoStore.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = $input.value;
  $input.value = '';
  dispatchAddToDo(toDo);
};

$form.addEventListener('submit', onSubmit);
