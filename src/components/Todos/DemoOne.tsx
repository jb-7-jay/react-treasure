import { useTodosQuery } from '../../redux/services/todo';

const DemoOne = () => {
  const { data } = useTodosQuery();
  console.log('todos', data);

  return (
    <div>
      <h1>DemoOne</h1>
      todo length - {data?.data ? data.data.length : 0}
    </div>
  );
};

export default DemoOne;
