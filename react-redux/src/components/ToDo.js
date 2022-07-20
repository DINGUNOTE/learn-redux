import { removeToDo } from '../store';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();
  const removeHandle = () => {
    dispatch(removeToDo(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>📌 {text} </Link>
      <button type="button" onClick={removeHandle}>
        ❌
      </button>
    </li>
  );
};

export default ToDo;
