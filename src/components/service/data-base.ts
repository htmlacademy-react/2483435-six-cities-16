import { FullOffer } from '../../types/offer-type';


export default class DataBase {
  #offers: FullOffer[];

  constructor(offers: FullOffer[]) {
    this.#offers = offers;
  }

  get offers() {
    return this.#offers;
  }

  getFavoritesOffers() {
    return this.#offers.filter((offer) => offer.isFavorite);
  }

  getOffersByName(cityName: string) {
    return this.#offers.filter((offer) => offer.city.name === cityName);
  }
}
