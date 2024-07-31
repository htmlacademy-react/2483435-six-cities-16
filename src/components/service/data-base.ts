import { AuthStatus, Setting } from '../../const';
import { createMockComment } from '../../mock/comment-mock';
import { mockFullOffer } from '../../mock/offer-mock';
import { CityName, FullOffer } from '../../types/offer-type';
import { Comment } from '../../types/comment-type';
import { getAuthStatus } from '../../mock/user-mock';
import { faker } from '@faker-js/faker';
export class DataBase {
  #offers: FullOffer[];
  #comments: Map<string, Comment[]>;
  #authStatus: AuthStatus;
  activeCity: CityName = 'Paris';
  activeOffer: FullOffer | null = null;

  constructor(offers: FullOffer[]) {
    this.#authStatus = getAuthStatus();
    this.#offers = offers;
    this.#comments = new Map();
    this.#offers.forEach((offer) => {
      this.#comments.set(
        offer.id,
        Array.from({ length: faker.number.int({ max: 40, min: 1 }) }, createMockComment)
      );
    });
  }

  setActiveCity(cityName: CityName){
    this.activeCity = cityName;
  }

  setActiveOffer(offer: FullOffer) {
    this.activeOffer = offer;
  }

  get offers() {
    return this.#offers;
  }

  get comments() {
    return this.#comments;
  }

  get authStatus() {
    return this.#authStatus;
  }

  set authStatus(status: AuthStatus) {
    this.#authStatus = status;
  }

  getCommentsById(offerId: string | undefined): Comment[] {
    const comments = offerId ? this.#comments.get(offerId) : [];
    return comments ? comments : [];
  }

  getAllOffersIds(): FullOffer['id'][] {
    return this.#offers.map((offer) => offer.id);
  }

  getFavoritesOffers(): FullOffer[] {
    return this.#offers.filter((offer) => offer.isFavorite);
  }

  getOffersByCity(cityName?: CityName): FullOffer[] {
    return this.#offers.filter((offer) => offer.city.name === cityName);
  }

  getLocation(cityName?: CityName) {
    return this.#offers.find((offer) => offer.city.name === cityName)?.city.location;
  }

  getOfferById(id: string){
    return this.#offers.find((offer) => offer.id === id);
  }


}

export const dataBase = new DataBase(
  Array.from({ length: Setting.OffersCount }, mockFullOffer)
);
