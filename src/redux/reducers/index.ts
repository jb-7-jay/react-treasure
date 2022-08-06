import { combineReducers } from '@reduxjs/toolkit';

import { todoApi } from '../services/todo';
// import demo from './demo';

const rootReducer = combineReducers({
  // demo,
  [todoApi.reducerPath]: todoApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
