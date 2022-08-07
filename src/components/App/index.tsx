import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from '../../redux/store';
import Todos from '../Todos';
import Todo from '../Todos/Todo';
import Home from '../Home';
import StickyFooterButton from '../common/StickyFooterButton';

import '../../index.css';
import UserTable from '../UserTable/index';

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todos" element={<Todos />} />
            <Route path="/todos/:id" element={<Todo />} />
            <Route path="/custom-table" element={<UserTable />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <StickyFooterButton />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
