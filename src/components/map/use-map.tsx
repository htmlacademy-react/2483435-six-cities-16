import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'leaflet';

type Location = {
  lat: number;
  lng: number;
  zoom: number;
};
enum MapSetting {
  MapUrl =
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  MapCopyright =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  currentCity: Location
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: currentCity.lat,
          lng: currentCity.lng,
        },
        zoom: currentCity.zoom,
      });

      const layer = new TileLayer(MapSetting.MapUrl, {
        attribution: MapSetting.MapCopyright,
      });
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, currentCity]);

  return map;
}

export default useMap;
