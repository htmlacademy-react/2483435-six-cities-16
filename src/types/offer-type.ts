import { CITIES } from '../const';
import type { UserGeneral } from './user-type';

type CityName = (typeof CITIES)[number];
type OfferTypes = 'apartment' | 'hotel' | 'house' | 'room';

interface OfferCity {
  name: CityName;
  location: LocationData;
}

interface LocationData {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface FullOffer {
  id: string;
  title: string;
  type: OfferTypes;
  price: number;
  city: OfferCity;
  location: LocationData;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  bedrooms: number;
  description: string;
  goods: string[];
  host: UserGeneral;
  images: string[];
  maxAdults: number;
}

interface OfferHost {
  avatarUrl: string;
  isPro: boolean;
  name: string;
}

type ThumbnailOffer = Omit<
  FullOffer,
  'bedrooms' | 'description' | 'goods' | 'host' | 'images' | 'maxAdults'
>;

type OfferType = Omit<FullOffer, 'previewImage'>;

type AllOffersType = FullOffer | ThumbnailOffer | OfferType;

export type {
  FullOffer,
  OfferCity,
  OfferHost,
  OfferTypes,
  ThumbnailOffer,
  LocationData,
  CityName,
  OfferType,
  AllOffersType,
};
