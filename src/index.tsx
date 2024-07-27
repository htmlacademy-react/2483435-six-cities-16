import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/service/app/app';
import DataBase from './components/service/data-base';
import { Setting } from './const';
import { mockFullOffer } from './mock/offer-mock';

export const dataBase = new DataBase(Array.from({ length: Setting.OffersCount }, mockFullOffer));

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
