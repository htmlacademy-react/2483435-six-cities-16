import { CITIES } from '../const';
import { UserGeneral } from './user-type';
type CityName = (typeof CITIES)[number];
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

interface FullOffer {
  id: string;
  title: string;
  type: OfferType;
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

type Offer = Omit<FullOffer, 'previewImage'>;

export type {
  FullOffer,
  OfferCity,
  OfferHost,
  OfferType,
  ThumbnailOffer,
  LocationData,
  CityName,
  Offer,
};
