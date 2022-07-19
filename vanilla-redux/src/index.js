import { createStore } from 'redux';

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
