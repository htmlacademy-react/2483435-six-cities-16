import { useRef } from 'react';
import useMap from '../../components/map/use-map';
import 'leaflet/dist/leaflet.css';
import { CityName, FullOffer } from '../../types/offer-type';
import {
  adaptLocation,
  useUpdateLocation,
  useUpdateMarkers,
} from './map-utils';
import { getLocation } from '../../utils/utils';

type MapProps = {
  className: string;
  activeCity: CityName;
  activeOffer?: FullOffer | null;
  offers: FullOffer[];
};

export function Map({ className, activeCity, activeOffer, offers }: MapProps) {
  const correctLocation = adaptLocation(getLocation(activeCity));
  const mapRef = useRef(null);
  const map = useMap(mapRef, correctLocation);

  useUpdateLocation(map, correctLocation);
  useUpdateMarkers(map, offers, activeOffer);

  return <section className={`${className}__map map`} ref={mapRef}></section>;
}
