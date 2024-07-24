import { mockThumbnailOffer } from '../mock/offer-mock';

type Offer = ReturnType<typeof mockThumbnailOffer>;

export type AppProps = {
  offers: Offer[];
  offersCount: number;
};
