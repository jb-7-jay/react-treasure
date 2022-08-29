import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../utils/axiosBaseQuery';

interface Todo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.REACT_APP_APIBASE || '',
  }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    todos: builder.query<{ data: Todo[] }, void>({
      query: () => ({ url: '/todo' }),
      providesTags: ['Todo'],
    }),
    todoById: builder.query<{ data: Todo }, string>({
      query: (id) => ({ url: `/todo/${id}` }),
      providesTags: (result, error, id) => [{ type: 'Todo', id }],
    }),
    addTodo: builder.mutation<any, any>({
      query: (body) => ({
        url: '/todo',
        method: 'POST',
        data: body,
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation<void, string>({
      query: (id) => ({
        url: `/todo/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const { useTodosQuery, useTodoByIdQuery, useDeleteTodoMutation, useAddTodoMutation } =
  todoApi;
