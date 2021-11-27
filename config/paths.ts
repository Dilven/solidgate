export const navigationPaths = {
  galeria: "/galeria",
  kontakt: "/kontakt",
};

export const galleryPaths = {
  bramyIFurtki: "/galeria/bramy-furtki",
  balustrady: "/galeria/balustrady",
  balustradySchodowe: "/galeria/barlustrady-schodowe",
  ogrodzenia: "/galeria/ogrodzenia",
}

export const clientPaths = {
  ...navigationPaths,
  ...galleryPaths,
}

export const paths = {
  ...clientPaths,
  api: {
    items: "/api/items",
  },
};
