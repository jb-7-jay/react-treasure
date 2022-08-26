import { combineReducers } from '@reduxjs/toolkit';

import { todoApi } from '../services/todo';
// import demo from './demo';

const rootReducer = combineReducers({
  // demo,
  [todoApi.reducerPath]: todoApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// baseQuery: fetchBaseQuery({
//   baseUrl: `${BASE_URL}/api`,
//   prepareHeaders: (headers) => {
//     const bearerToken = getBearerToken();
//     headers.set("Accept", "*/*");
//     headers.set("Authorization", bearerToken);
//     return headers;
//   },
//   paramsSerializer: (params) => {
//     return queryString.stringify(params, { arrayFormat: "repeat" });
//   },
// }),

export default rootReducer;
