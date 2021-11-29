import { getConfig } from "@/config/config";

export const GoogleMap = () => (
  <iframe
    width="600"
    height="400"
    loading="lazy"
    frameBorder="0"
    src={`https://www.google.com/maps/embed/v1/place?key=${getConfig('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY')}
          &amp;q=ChIJDb1D_KGDEEcRQT-VsTN2P8w
          &amp;center=51.144349,18.6132
          &amp;zoom=16`}
    allowFullScreen
  ></iframe>
);
// style="width: 100%; border:0;"
