import { FullOffer } from '../../types/offer-type';

type StructuredOffersType = {
  [key: string]: FullOffer[];
};

function toStructureOffers(offers: FullOffer[]) {
  const structuredOffers: StructuredOffersType = {};

  offers.map((offer) => {
    if (!structuredOffers[offer.city.name]) {
      structuredOffers[offer.city.name] = [];
    }
    structuredOffers[offer.city.name].push(offer);
  });

  return structuredOffers;
}

export { toStructureOffers };
