import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { App } from './services/app/app';
import { fetchOffersAction } from './store/api-actions/fetch-offers-action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.dispatch(fetchOffersAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
