import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { getConfig } from "@/config/config";
import { getQueryParams } from "@/helpers/get-query-params";
import { mapStyles } from "./mapStyles";
import styles from "./GoogleMap.module.scss";

const query = getQueryParams({
  pb: "!1m14!1m8!1m3!1d10012.234286262501!2d18.612413!3d51.144271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc3f7633b1953f41!2sSolidgate!5e0!3m2!1sen!2sus!4v1638191401340!5m2!1sen!2sus-VsTN2P",
  key: getConfig("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"),
  zoom: 16,
});

interface Props {
  onMarkerPress: () => void;
}

export const GoogleMap = ({ onMarkerPress }: Props) => {
  const mapRef = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: getConfig("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"),
      version: "weekly",
    });

    loader.load().then((google) => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 51.144349, lng: 18.6132 },
        zoom: 12,
        styles: mapStyles,
      });

      const marker = new google.maps.Marker({
        position: { lat: 51.144349, lng: 18.6132 },
        map,
      });

      marker.setMap(map);

      google.maps.event.addListener(marker, "click", onMarkerPress);
    });
  });

  return <div id="map" ref={mapRef} className={styles.container} />;
};
