import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/service/app/app';
import { dataBase } from './components/service/data-base';
import { store } from './components/service/store/store';
import Provider from 'react-redux/es/components/Provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App dataBase={dataBase} />
    </Provider>
  </React.StrictMode>
);
