import { CITIES } from '../mock/const-mock';
import { UserGeneral } from './user-type';

type CityName = (typeof CITIES)[number]['name'];
type OfferType = 'apartment' | 'hotel' | 'house' | 'room';

interface OfferCity {
  name: CityName;
  location: LocationData;
}

interface LocationData {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface ThumbnailOffer {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: OfferCity;
  isFavorite: boolean;
  isPremium: boolean;
  location: LocationData;
  previewImage: string;
  rating: number;
}

interface OfferHost {
  avatarUrl: string;
  isPro: boolean;
  name: string;
}

interface FullOffer extends Omit<ThumbnailOffer, 'previewImage'> {
  bedrooms: number;
  description: string;
  goods: string[];
  host: UserGeneral;
  images: string[];
  maxAdults: number;
}

export type {
  FullOffer,
  OfferCity,
  OfferHost,
  OfferType,
  ThumbnailOffer,
  LocationData,
  CityName,
};
