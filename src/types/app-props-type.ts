import { mockThumbnailOffer } from '../mock/offer-mock';

type Offers = ReturnType<typeof mockThumbnailOffer>;

export type AppProps = {
  offers: Offers[];
  offersCount: number;
};
