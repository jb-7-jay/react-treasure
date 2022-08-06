import { useTodosQuery } from '../../redux/services/todo';

const DemoTwo = () => {
  const {
    data,
    // isError,
    //  isLoading,
    //   isFetching,
    //    isSuccess,
    //     isUninitialized
  } = useTodosQuery();
  console.log('todos', data);

  return <div>DemoTwo - todo length - {data?.data ? data.data.length : 0}</div>;
};

export default DemoTwo;
