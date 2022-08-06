import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useTodosQuery,
} from '../../redux/services/todo';

const Todos = () => {
  const { data, isFetching } = useTodosQuery();

  const [todoInput, setTodoInput] = useState('');

  const [deleteTodo] = useDeleteTodoMutation();
  const [addTodo] = useAddTodoMutation();

  return (
    <div>
      <h1>
        Cached Todos - <Link to="todos">Todos</Link>
      </h1>
      <div>
        <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />{' '}
        <button
          onClick={() =>
            addTodo({
              title: todoInput ? todoInput : 'Default Todo',
              description: 'This is description',
            })
          }
        >
          Add Todo
        </button>
      </div>
      {isFetching && !data ? (
        <div>Loading...</div>
      ) : (
        (data?.data || []).map((data) => (
          <div key={data._id}>
            {data.title}-------{data.description} --- <Link to={`${data._id}`}>Details</Link>
            <button onClick={() => deleteTodo(data._id)}>DELETE</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Todos;
