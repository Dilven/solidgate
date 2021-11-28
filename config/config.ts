import getConfigNext from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfigNext();
type EnvVariable = "NEXT_PUBLIC_URL" | "NEXT_PUBLIC_INTERNAL_API_TIMEOUT" | "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY";

export const getConfig = (name: EnvVariable) => {
  let val: string | undefined;
  if (name.startsWith("NEXT_PUBLIC")) {
    val = publicRuntimeConfig[name];
  } else {
    val = serverRuntimeConfig[name];
  }
  if (!val) {
    throw new Error(`Cannot find environmental variable: ${name}`);
  }
  return val;
};
