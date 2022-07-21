import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToDo from '../components/ToDo';
import { add } from '../store';

const Home = () => {
  const [text, setText] = useState('');
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  const onChange = (e) => {
    setText(e.target.value);
  };
  const addHandle = (e) => {
    e.preventDefault();
    dispatch(add(text));
    setText('');
  };

  return (
    <>
      <h1>TODO</h1>
      <form onSubmit={addHandle}>
        <input type="text" onChange={onChange} value={text} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
};

export default Home;
