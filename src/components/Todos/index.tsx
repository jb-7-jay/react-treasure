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
      <div className="page-header">
        <h3 className="pb-2">Redux Toolkit Demo</h3>
        <p className="text-base w-2/3 mx-auto">
          Once todo&apos;s fetched from the server and set in redux, then next time someone comes on
          the todo list page, user will see cached todos (no network call again)
        </p>
      </div>
      <div className="bg-blue-500 text-center my-2 py-2">
        <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />{' '}
        <button
          className="btn-primary"
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
        <div className="flex gap-2 flex-col w-[400px] mx-auto">
          {(data?.data || []).map((data) => (
            <div key={data._id} className="flex items-center">
              <div className="flex-1">{data.title}</div>
              <div>
                <Link to={`${data._id}`}>
                  <button type="button" className="btn-primary">
                    Details
                  </button>
                </Link>
                <button
                  className="btn-primary bg-red-600 ml-2"
                  onClick={() => deleteTodo(data._id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Todos;
