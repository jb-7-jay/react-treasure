import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from '../../redux/store';
import StickyFooterButton from '../common/StickyFooterButton';
// import Todos from '../Todos';
// import Todo from '../Todos/Todo';
// import Home from '../Home';
// import UserTable from '../UserTable/index';
// import Animation from '../Animation';
// import Hexagon from '../Animation/HexagonTailed';
// import HexagonTailed from '../Animation/Hexagon';
// import Flip3D from '../Animation/Flip3D';

import AppRoutes from '../../AppRoutes';

import '../../index.css';

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppRoutes />
          <StickyFooterButton />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
