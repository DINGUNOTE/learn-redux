import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
  const id = useParams().id;
  const toDos = useSelector((state) => state);
  const toDo = toDos.find((item) => item.id === parseInt(id));
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h3>Created at: {toDo?.id}</h3>
    </>
  );
};

export default Detail;
