
import React, { createContext, useContext, useState } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export default function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside a LanguageProvider"
    );
  }

  return context;
}

