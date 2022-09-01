import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from '../../redux/store';
import StickyFooterButton from '../common/StickyFooterButton';

import AppRoutes from '../../AppRoutes';

import '../../index.css';
import './index.scss';

const persistor = persistStore(store);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <AppRoutes />
            <StickyFooterButton />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
