## 📌 Redux에 대한 오해

- Redux가 React와 함께 사용되면서 유명해졌지만 React 환경 외에도 다른 Javascript 프레임워크 환경이나 Vanilla JS에서도 사용할 수 있다.
- React에 의존적인 라이브러리가 아니다.

## 📌 VanillaJS 환경에서 Redux 사용

1. VanillaJS로 Counter 구현
2. Redux로 Counter 구현
3. Reducer 내부의 if문 switch문으로 변경

- String을 값으로 사용했을 때 에러 검출이 되지 않기 때문에 변수로 빼서 사용하는 것이 좋다.

✅ Reducer가 return하는 값이 애플리케이션의 state가 된다.
✅ Action : redux에서 function을 부를 때 쓰는 두 번째 parameter 혹은 argument으로 reducer와 소통하기 위한 방법
✅ Reducer에게 Action을 보내는 방법 : store.dispatch({type: value}); // action은 무조건 Object여야 한다. key 값은 항상 type이어야 한다.(변경할 수 없음)
✅ Subscribe : store 안에 있는 변화 감지 : store.subscribe(func); // store안의 변화를 감지하면 func 실행
✅ state는 변경할 수 없다. state를 수정하는 것이 아니라 새로운 state를 반환하는 것이다.

## 📌 React 환경에서 Redux 사용

1. Redux 활용 TODO 구현
2. react-router-dom 이용해서 아이템 상세 페이지 구현
3. localStorage 이용해서 데이터 저장

✅ react-redux의 `useSelector` Hook을 이용해서 store의 데이터를 쉽게 사용할 수 있다.
✅ react-redux의 `useDispatch` Hook을 이용해서 store에 dispatch 명령을 쉽게 줄 수 있다.

> 출처<br> > [https://nomadcoders.co/redux-for-beginners/](https://nomadcoders.co/redux-for-beginners/)
