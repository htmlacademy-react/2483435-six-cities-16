import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/service/app/app';
import { Setting } from './const';
import { mockFullOffer } from './mock/offer-mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={Array.from({ length: Setting.OffersCount }, mockFullOffer)}
      offersCount={Setting.OffersCount}
    />
  </React.StrictMode>
);
