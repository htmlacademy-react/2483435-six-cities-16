import { useRef } from 'react';
import useMap from '../../components/map/use-map';
import 'leaflet/dist/leaflet.css';
import { CityName, FullOffer } from '../../types/offer-type';
import { dataBase } from '../service/data-base';
import {
  adaptLocation,
  useUpdateLocation,
  useUpdateMarkers,
} from './map-utils';

type MapProps = {
  className: string;
  activeCity?: CityName;
  activeOffer?: FullOffer | null;
  offers: FullOffer[];
};

export function Map({ className, activeCity, activeOffer, offers }: MapProps) {
  const correctLocation = adaptLocation(dataBase.getLocation(activeCity)!);
  const mapRef = useRef(null);
  const map = useMap(mapRef, correctLocation);

  useUpdateLocation(map, correctLocation);
  useUpdateMarkers(map, offers, activeOffer);

  return (
    <section
      className={`${className}__map map`}
      style={{ height: '900px' }}
      ref={mapRef}
    >
    </section>
  );
}
