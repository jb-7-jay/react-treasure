import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { type PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';

import { AppStore, AppRootState, setupStore } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

/**
 *
 * Knowledge:
 *
 * 1) Adding BrowserRoute here resolve error comming while running
 *    unit tests which is "can't navigate with out useRef() null something"
 * 2) Upgraded Render method of RTL (React Testing Library) which can put here
 *    global variables, HOC, Redux Provider and Theme
 */

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<AppRootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<any>): JSX.Element {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

// re-export everything
export * from '@testing-library/react';
