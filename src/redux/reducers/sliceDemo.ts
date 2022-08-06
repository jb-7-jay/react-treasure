/* Just demo not implementation */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  loading: false,
};

const demoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setTodos(state, action) {
      return {
        ...state,
        todos: action.payload,
      };
    },
  },
});

export const { setTodos, setLoading } = demoSlice.actions;

export default demoSlice.reducer;
