import { paths } from "@/config/paths";

export const meta = {
  title: "Solidgate",
  description: `Solidgate to firma zajmująca się wykonywanie ogrodzeń, bram, furtek, balustrad schodowych i innych elementów kutych!`,
};

export const titleTemplate = `%s | ${meta.title}`;

export const pageTitles: Partial<Record<keyof typeof paths, string>> = {
  solidgate: "Solidgate",
  balustrady: "Galeria - Balustrady",
  balustradySchodowe: "Galeria - Balustrady schodowe",
  bramyIFurtki: "Galeria - Furtki i bramy",
  ogrodzenia: "Galeria - Ogrodzenia",
  galeria: "Galeria",
  kontakt: "Kontakt",
};
