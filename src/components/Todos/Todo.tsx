import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteTodoMutation, useTodoByIdQuery } from '../../redux/services/todo';

const Todo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data } = useTodoByIdQuery(params?.id || '', {
    skip: !params.id,
  });
  const [deleteTodo] = useDeleteTodoMutation();
  return (
    <div>
      Todo Details = {params.id} {data ? data.data.title : ''}
      <button
        onClick={async () => {
          if (data?.data._id) {
            await deleteTodo(data?.data._id);
            navigate('/todos');
          }
        }}
      >
        DELETE
      </button>
    </div>
  );
};

export default Todo;
