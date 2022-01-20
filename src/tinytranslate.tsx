import React, { useCallback } from "react";
import { createContext, FC, useContext } from "react";
import { supplant, translateKey } from "./helpers";

export type TranslationProviderProps = {
  translations: TranslationFormat;
  locale: string;
};

export type TranslationFormat = {
  [key: string]: {
    locale: string;
    messages: TranslationMessages;
  };
};

export interface TranslationMessages {
  [key: string]: string | TranslationMessages;
}

export type TranslationData = Record<string, unknown>;

export type TranslationContextProps = (
  key: string,
  data?: TranslationData
) => string | undefined;

export const TranslationProvider: FC<TranslationProviderProps> = ({
  children,
  translations,
  locale,
}) => {
  const contextValue = useCallback(
    (key: string, data?: TranslationData) => {
      const value = translateKey(key, translations[locale].messages);
      return supplant(value, data);
    },
    [translations, locale]
  );
  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};

export const TranslationContext = createContext<TranslationContextProps | null>(
  null
);

export const useTranslation = () => {
  const translateContext = useContext(TranslationContext);
  if (!translateContext) {
    throw new Error("Missing TranslationProvider.");
  }
  return translateContext;
};
