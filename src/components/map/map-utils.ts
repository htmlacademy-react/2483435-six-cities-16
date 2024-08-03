import { useEffect } from 'react';
import { FullOffer, LocationData } from '../../types/offer-type';
import { Map as LeafletMap, Icon, Marker, layerGroup } from 'leaflet';
import { MapMarker } from '../../const';

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

export const adaptLocation = ({
  latitude,
  longitude,
  zoom,
}: LocationData): Location => ({
  lat: latitude,
  lng: longitude,
  zoom: zoom,
});

export const useUpdateLocation = (
  map: LeafletMap | null,
  location: Location
) => {
  useEffect(() => {
    if (map) {
      map.setView(location);
      const markerLayer = layerGroup().addTo(map);
      map.removeLayer(markerLayer);
    }
  });
};

export const useUpdateMarkers = (
  map: LeafletMap | null,
  offers: FullOffer[],
  activeOffer?: FullOffer | null
) => {
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
