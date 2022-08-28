import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from '../../redux/store';
import StickyFooterButton from '../common/StickyFooterButton';

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
