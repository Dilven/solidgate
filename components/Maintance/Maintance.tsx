import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

type IsMaintanceMode = "true" | "false";

export const Maintance = ({ children }: Props) => {
  const [isMaintanceMode] = useLocalStorage<IsMaintanceMode>(
    "isMaintanceMode",
    "true"
  );

  if(isMaintanceMode === "true") {
    return <div>Maintance mode</div>;
  } 
  return <>{children}</>
};
