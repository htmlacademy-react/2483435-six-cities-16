import { useRef } from 'react';
import useMap from '../../components/map/use-map';
import 'leaflet/dist/leaflet.css';
import {
  adaptLocation,
  useUpdateLocation,
  useUpdateMarkers,
} from './map-utils';
import { getLocation } from '../../utils/utils';
import { activeSelectors } from '../../store/slices/active-slice';
import { useAppSelector } from '../../hooks/store';

type MapProps = {
  className: string;
};

export function Map({ className}: MapProps) {

  const city  = useAppSelector(activeSelectors.city);
  const correctLocation = adaptLocation(getLocation(city));
  const mapRef = useRef(null);
  const map = useMap(mapRef, correctLocation);

  useUpdateLocation(map, correctLocation);
  useUpdateMarkers(map);

  return <section className={`${className}__map map`} ref={mapRef}></section>;
}
