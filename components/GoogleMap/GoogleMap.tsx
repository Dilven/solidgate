import { getConfig } from "@/config/config";
import { getQueryParams } from "@/helpers/get-query-params";

const query = getQueryParams({
  q: "ChIJDb1D_KGDEEcRQT-VsTN2P",
  key: getConfig("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"),
  center: "51.144349,18.6132",
  zoom: 16,
});
const endpoint = "https://www.google.com/maps/embed/v1/place";
const src = `${endpoint}${query}`;

export const GoogleMap = () => (
  <iframe
    width="600"
    height="400"
    loading="lazy"
    frameBorder="0"
    src={src}
    allowFullScreen
  ></iframe>
);
