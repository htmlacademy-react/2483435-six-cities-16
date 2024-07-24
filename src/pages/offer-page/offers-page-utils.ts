import { Offer, ThumbnailOffer } from '../../types/offer-type';

export const getCurrentOffer = (offers: Offer[], offerId: string) =>
  offers.find((offer: Offer) => offer.id === offerId);

export const getNearOffers = (offers: ThumbnailOffer[], offerId: string) => {
  const currentCity = offers.find(
    (offer: ThumbnailOffer) => offer.id === offerId
  )!.city.name;
  const nearOffers: ThumbnailOffer[] = [];

  offers.map(
    (offer: ThumbnailOffer) =>
      offer.city.name === currentCity && nearOffers.push(offer)
  );

  return nearOffers;
};
