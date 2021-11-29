import { getConfig } from "@/config/config";
import { getQueryParams } from "@/helpers/get-query-params";

const query = getQueryParams({
  pb: "!1m14!1m8!1m3!1d10012.234286262501!2d18.612413!3d51.144271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc3f7633b1953f41!2sSolidgate!5e0!3m2!1sen!2sus!4v1638191401340!5m2!1sen!2sus-VsTN2P",
  key: getConfig("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"),
  zoom: 16,
});
const endpoint = "https://www.google.com/maps/embed";
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
