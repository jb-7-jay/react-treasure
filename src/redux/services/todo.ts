import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Todo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_APIBASE,
  }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    todos: builder.query<{ data: Todo[] }, void>({
      query: () => '/todo',
      providesTags: ['Todo'],
      // providesTags: (result, error, arg) =>
      //   result
      //     ? [
      //         ...result.data.map(({ _id: id }) => ({
      //           type: "Todo" as const,
      //           id,
      //         })),
      //         { type: "Todo", id: "LIST" },
      //       ]
      //     : [{ type: "Todo", id: "LIST" }],
    }),
    todoById: builder.query<{ data: Todo }, string>({
      query: (id) => `/todo/${id}`,
      providesTags: (result, error, id) => [{ type: 'Todo', id }],
    }),
    addTodo: builder.mutation<any, any>({
      query: (body) => ({
        url: '/todo',
        method: 'POST',
        body,
      }),
      // invalidatesTags: [{ type: "Todo", id: "LIST" }],
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation<void, string>({
      query: (id) => ({
        url: `/todo/${id}`,
        method: 'DELETE',
      }),
      // invalidatesTags: (result, error, id) => {
      //   console.log("arg", id);
      //   return [{ type: "Todo", id }];
      // },
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const { useTodosQuery, useTodoByIdQuery, useDeleteTodoMutation, useAddTodoMutation } =
  todoApi;
