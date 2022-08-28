import { configureStore, Action, PreloadedState } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkAction } from 'redux-thunk';
import rootReducer, { RootState } from './reducers';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { todoApi } from './services/todo';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

/*
**** Old Configures Store ****

const store = configureStore({
   reducer: persistedReducer,
   devTools: process.env.NODE_ENV !== 'production',
   middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
       serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
       },
     }).concat(thunk).concat(todoApi.middleware),
 });

**** END ***
*/

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .concat(thunk)
        .concat(todoApi.middleware),
  });
};

const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppRootState = ReturnType<typeof persistedReducer>;
export type AppStore = ReturnType<typeof setupStore>;

export default store;
