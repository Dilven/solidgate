export const navigationPaths = {
  solidgate: "/",
  galeria: "/galeria",
  kontakt: "/kontakt",
};

export const galleryPaths = {
  bramyIFurtki: "/galeria/bramy-furtki",
  balustrady: "/galeria/balustrady",
  balustradySchodowe: "/galeria/balustrady-schodowe",
  ogrodzenia: "/galeria/ogrodzenia",
};

export const clientPaths = {
  ...navigationPaths,
  ...galleryPaths,
};

export const paths = {
  ...clientPaths,
  api: {
    items: "/api/items",
  },
};
