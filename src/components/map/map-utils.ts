import { useEffect } from 'react';
import { CityName, FullOffer, LocationData } from '../../types/offer-type';
import { Map as LeafletMap, Icon, Marker, layerGroup } from 'leaflet';
import { MapMarker } from '../../const';
import { activeSelectors } from '../../store/slices/active-slice';
import { useAppSelector } from '../../hooks/store';
import { CITIES } from '../../mock/const-mock';

type Location = {
  lat: number;
  lng: number;
  zoom: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: MapMarker.DefaultMarker,
  iconSize: [27, 40],
  iconAnchor: [15, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: MapMarker.ActiveMarker,
  iconSize: [27, 40],
  iconAnchor: [15, 40],
});

const getLocation = (cityName: CityName) =>
  CITIES.find((city) => city.name === cityName)!.location;

const adaptLocation = ({
  latitude,
  longitude,
  zoom,
}: LocationData): Location => ({
  lat: latitude,
  lng: longitude,
  zoom: zoom,
});

const useUpdateLocation = (map: LeafletMap | null, location: Location) => {
  useEffect(() => {
    if (map) {
      map.setView(location);
      const markerLayer = layerGroup().addTo(map);
      map.removeLayer(markerLayer);
    }
  });
};

const useUpdateMarkers = (map: LeafletMap | null, offers: FullOffer[]) => {
  const activeOffer = useAppSelector(activeSelectors.activeOffer);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            activeOffer !== undefined && offer.title === activeOffer?.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOffer]);
};

export { getLocation, adaptLocation, useUpdateLocation, useUpdateMarkers };
