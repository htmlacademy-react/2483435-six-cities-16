import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/service/app/app';
import { dataBase } from './components/service/data-base';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App dataBase={dataBase}/>
  </React.StrictMode>
);
