import { mockFullOffer } from '../mock/offer-mock';

type Offer = ReturnType<typeof mockFullOffer>;

export type AppProps = {
  offers: Offer[];
  offersCount: number;
};
