import { createContext, useContext, useState, type ReactNode } from "react";

interface SoundContextProps {
  isSoundEnabled: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextProps | undefined>(undefined);

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  const toggleSound = () => {
    setIsSoundEnabled(!isSoundEnabled);
  }

  return (
    <SoundContext.Provider value={{ isSoundEnabled, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSound = () => {
  const context = useContext(SoundContext);
  
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  
  return context;
};