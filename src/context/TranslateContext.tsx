import { createContext, useContext } from 'react';

export type TranslateContextType = {
    translations: {
        [key: string]: {
            [key: string]: string;
        };
    };
    setTranslations: React.Dispatch<React.SetStateAction<TranslateContextType['translations']>>;
    langCode: string;
    setLangCode: React.Dispatch<React.SetStateAction<TranslateContextType['langCode']>>;
};

const TranslateContext = createContext<TranslateContextType>({
    translations: {},
    setTranslations: () => {},
    langCode: 'en',
    setLangCode: () => {},
});

export const useTranslateContext = () => useContext(TranslateContext);

export default TranslateContext;
