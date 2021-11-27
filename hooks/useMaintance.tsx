import { useLocalStorage } from "./useLocalStorage";

type IsMaintanceMode = 'true' | 'false';

export const useMaintance = () => {
    const [isMaintanceMode, setMaintanceMode] = useLocalStorage<IsMaintanceMode>(
        'isMaintanceMode',
        'true',
      );
    return {
        isMaintanceMode,
        setMaintanceMode
    }
}